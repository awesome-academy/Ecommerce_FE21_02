import axios from "axios";

const endpoints = {
  HOTDEAL: "hot-deal",
  NEW_PRODUCTS: "new-products",
  HOT_PRODUCTS: "hot-products",
  PRODUCTS: "products",
  CATEGORIES: "categories",
  SUB_CATEGORIES: "sub-categories"
};

const APIClient = {
  BASE_URL: "http://5ccee3eb5b71f40014dc0ae9.mockapi.io/api",

  async getProduct(productId, config = {}) {
    let finalURL = `${this.BASE_URL}/${endpoints.PRODUCTS}/${productId}`;
    return axios.get(finalURL, config);
  },
  async getCategories(config = {}) {
    let finalURL = `${this.BASE_URL}/${endpoints.CATEGORIES}`;
    return axios.get(finalURL, config);
  },
  async getSubCategoriesBy(categoryId, config = {}) {
    let finalURL = `${this.BASE_URL}/${endpoints.CATEGORIES}/${categoryId}/${
      endpoints.SUB_CATEGORIES
    }`;
    return axios.get(finalURL, config);
  },
  async getProductsBy(categoryId, subCategoryId, config = {}) {
    let finalURL = `${this.BASE_URL}/${endpoints.CATEGORIES}/${categoryId}/${
      endpoints.SUB_CATEGORIES
    }/${subCategoryId}`;
    return axios.get(finalURL, config);
  },
  async getAllProducts(categories) {
    let products = [];
    let subCategoriesRequest = categories.map(category => {
      return this.getSubCategoriesBy(category.id);
    });
    return new Promise(async function(resolve, reject) {
      try {
        const categoryResponses = await Promise.all(subCategoriesRequest);
        categoryResponses.forEach(categoryResponse => {
          let subCategories = categoryResponse.data;
          subCategories.forEach(subCategory => {
            products = [...products, ...subCategory.products];
          });
        });
        resolve({ data: products });
      } catch (e) {
        reject(e);
      }
    });
  }
};
export { APIClient, endpoints };
