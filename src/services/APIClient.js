import axios from "axios";

const endpoints = {
  HOTDEAL: "hot-deal",
  NEW_PRODUCTS: "new-products",
  HOT_PRODUCTS: "hot-products",
  PRODUCTS: "products"
};

const APIClient = {
  BASE_URL: "http://5ccee3eb5b71f40014dc0ae9.mockapi.io/api/",

  async getProduct(productId, config = {}) {
    let finalURL = `${this.BASE_URL}${endpoints.PRODUCTS}/${productId}`;
    return axios.get(finalURL, config);
  },
  async post(endpoint, data, config = {}) {
    return axios.post(this.BASE_URL + endpoint, data, config);
  }
};
export { APIClient, endpoints };
