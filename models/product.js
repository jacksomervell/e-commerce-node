var mongoose = require('mongoose')

var productSchema = new mongoose.Schema({
  name: String,
  price: Float,
  description: String,
})

var Product = mongoose.model('Product', orderSchema)

module.exports = Product