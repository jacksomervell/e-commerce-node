var mongoose = require('mongoose')

var orderSchema = new mongoose.Schema({
  name: {type: String, required: true },
  gender: String,
  dob: Date,
})

var Order = mongoose.model('Order', orderSchema)

module.exports = Order