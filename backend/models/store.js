const { BadRequestError } = require("../utils/errors");
const { storage } = require("../data/storage");

class Store {
  static async listProducts() {
    // list all items in the transactions array
    const transactions = storage.get("products").value();
    return transactions;
  }

  static async fetchProductsById(productId) {
    // fetch a single transfer
    const transfer = storage
      .get("products")
      .find({ id: Number(productId) })
      .value();
    return transfer;
  }

  static async recordProducts(product) {
    // create a new product
    console.log(product);
    if (!product) {
      throw new BadRequestError(`No product sent.`);
    }
    const requiredFields = ["description", "category", "price"];
    requiredFields.forEach((field) => {
      if (!product[field] && product[field] !== 0) {
        throw new BadRequestError(`Field: "${field}" is required in product`);
      }
    });

    const products = await Store.listProducts();
    const productId = products.length + 1;
    const postedAt = new Date().toISOString();

    const newProduct = { id: productId, postedAt, ...product };

    storage.get("products").push(newProduct).write();

    return newProduct;
  }
}

module.exports = Store;
