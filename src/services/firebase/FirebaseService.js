import app from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
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
}

export const firebase = new FirebaseService();
