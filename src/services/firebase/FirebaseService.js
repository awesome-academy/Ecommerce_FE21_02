import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import uuid from "uuid";
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  appId: process.env.REACT_APP_APP_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID
};

export default class FirebaseService {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth();
    this.db = app.firestore();
  }
  snapshotToArray(snapshot) {
    let returnArr = [];

    snapshot.forEach(function(childSnapshot) {
      let item = childSnapshot.data();
      item.id = childSnapshot.id;

      returnArr.push(item);
    });

    return returnArr;
  }
  docToObject(doc) {
    let data = doc.data();
    return {
      id: doc.id,
      ...data
    };
  }

  // Auth API //
  createUserWithEmailAndPassword = (email, password) => {
    return this.auth.createUserWithEmailAndPassword(email, password);
  };

  loginWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  logOut = () => this.auth.signOut();

  signOut = () => this.auth.signOut();

  // *** Merge Auth and DB User API *** //

  onAuthUserListener = (next, fallback) =>
    this.auth.onAuthStateChanged(authUser => {
      if (authUser) {
        this.user(authUser.uid)
          .get()
          .then(snapshot => {
            const dbUser = snapshot.data();

            // merge auth and db user
            authUser = {
              uid: authUser.uid,
              email: authUser.email,
              emailVerified: authUser.emailVerified,
              providerData: authUser.providerData,
              ...dbUser
            };

            next(authUser);
          });
      } else {
        fallback();
      }
    });

  // *** User API ***

  user = uid => this.db.collection("users").doc(uid);

  updateUser = (newUser, uid) => {
    return this.db
      .collection("users")
      .doc(uid)
      .update(newUser);
  };
  // *** Category API ***

  categories = async () => {
    let categoriesSnapshot = await this.db.collection("categories").get();
    let dataPromises = categoriesSnapshot.docs.map(async categoryDoc => {
      let category = categoryDoc.data();
      let subCategoriesSnapshot = await this.subCategories(categoryDoc.ref);
      return {
        id: categoryDoc.id,
        ...category,
        subCategories: this.snapshotToArray(subCategoriesSnapshot)
      };
    });
    return await Promise.all(dataPromises);
  };

  subCategories = categoryRef => categoryRef.collection("sub-categories").get();

  // *** Product API ***
  product = id =>
    new Promise(async (resolve, reject) => {
      try {
        let productDoc = await this.db
          .collection("products")
          .doc(id)
          .get();
        resolve({ data: this.docToObject(productDoc) });
      } catch (e) {
        reject(e);
      }
    });

  products = () =>
    new Promise(async (resolve, reject) => {
      try {
        let productsSnapshot = await this.db.collection("products").get();
        let products = productsSnapshot.docs.map(productDoc => {
          return this.docToObject(productDoc);
        });
        resolve({ data: products });
      } catch (e) {
        reject(e);
      }
    });
  productBy = subCategoryId =>
    new Promise(async (resolve, reject) => {
      try {
        let productsSnapshot = await this.db
          .collection("products")
          .where("subCategoryId", "==", subCategoryId)
          .get();
        let products = productsSnapshot.docs.map(productDoc => {
          return this.docToObject(productDoc);
        });
        resolve({ data: products });
      } catch (e) {
        reject(e);
      }
    });

  // *** Rating API ***
  ratingsByUser = userId =>
    new Promise(async (resolve, reject) => {
      try {
        let ratingSnapshot = await this.db
          .collection("ratings")
          .where("userId", "==", userId)
          .get();
        let ratings = ratingSnapshot.docs.map(ratingDoc => {
          return this.docToObject(ratingDoc);
        });
        resolve({ data: ratings });
      } catch (e) {
        reject(e);
      }
    });
  ratingsByProduct = async productId => {
    let ratingsSnapshot = await this.db
      .collection("ratings")
      .where("productId", "==", productId)
      .get();
    let dataPromises = ratingsSnapshot.docs.map(async ratingDoc => {
      let rating = ratingDoc.data();
      let userDoc = await this.user(rating.userId).get();

      return {
        id: ratingDoc.id,
        ...rating,
        userEmail: userDoc.data().email
      };
    });
    return await Promise.all(dataPromises);
  };

  setRating = (userId, productId, value, content) => {
    let rating = {
      userId,
      productId,
      value,
      content
    };
    return this.db
      .collection("ratings")
      .doc(uuid.v4())
      .set(rating);
  };
}

export const firebase = new FirebaseService();
