var mongoose = require('mongoose')

var Product = mongoose.model('Product')
var User = mongoode.model('User')

var orderSchema = new mongoose.Schema({
  name: String,
  createdAt: Date,
  address: Object,
  street: String,
  postcode: String,
  Town: String,
  Country: String,
  Products: [Product.schema],
  User: [User.schema]
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order