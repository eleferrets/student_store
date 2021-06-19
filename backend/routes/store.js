const express = require("express");
const Store = require("../models/store");
const { NotFoundError } = require("../utils/errors");
const router = express.Router();

// list all products
router.get("/products", async (req, res, next) => {
  try {
    const products = await Store.listProducts();
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

// // create new products
// router.post("/products", async (req, res, next) => {
//   try {
//     const products = req.body.products;
//     const newProducts = await Store.recordProducts(products);
//     res.status(201).json({ products: newProducts });
//   } catch (err) {
//     next(err);
//   }
// });
// create new orders
router.post("/products", async (req, res, next) => {
  try {
    const cart = req.body.cart;
    const user = req.body.userInfo;
    const newCart = await Store.recordCart(cart);
    const newUser = await Store.recordUser(user);
    // console.log("user",newUser,"cart",newCart);
    const purchase = await Store.listOrders(newCart, newUser);
    res.status(201).json({ purchase });
  } catch (err) {
    next(err);
  }
});

// fetch single product
router.get("/products/:productsId", async (req, res, next) => {
  try {
    const productsId = req.params.productsId;
    const products = await Store.fetchProductsById(productsId);
    // console.log("pID", productsId, "p", products)
    if (!products) {
      throw new NotFoundError("product not found");
    }
    res.status(200).json({ products });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
