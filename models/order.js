var mongoose = require('mongoose')

var Product = mongoose.model('Product')
var User = mongoose.model('User')

var orderSchema = new mongoose.Schema({
  createdAt: Date,
  price: String,
  address: {
    street: String,
    postcode: String,
    Town: String,
    Country: String},
  Products: [Product.schema],
  User: {type: mongoose.Schema.ObjectId, ref: 'User'}
})

var Order = mongoose.model('Order', orderSchema)


module.exports = Order