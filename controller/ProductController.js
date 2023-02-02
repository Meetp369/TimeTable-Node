const productSchema = require("../model/ProductSchema");

exports.addProduct = (req, res) => {
  var product = new productSchema(req.body);
  console.log(product);
  product.save((err, data) => {
    if (err) {
      res.status(501).json({
        message: "error occured",
      });
    } else {
      res.status(201).json({
        message: "product added",
        data: data,
      });
    }
  });
};