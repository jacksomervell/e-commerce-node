var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');


mongoose.connect('mongodb://localhost/e-commerce-node')


var Product = require('./models/product');
var User = require('./models/user');
var Order = require('./models/order');

var firstUser = new User({
  name: 'Jack Somervell',
  gender: 'male',
  dob: 31/05/1987
})

firstUser.save(function(err, user){
  if (err) console.log(err);
    console.log('User Saved!');
})

var firstProduct = new Product({
  name: "Nintendo 64",
  price: 100,
  description: "The most powerful games console on Earth"
})

firstProduct.save(function(err, product){
  if (err) console.log(err);
  console.log('product saved!');
})

var firstOrder = new Order({
  price: "£300",
  createdAt: 04/05/2005,
  address: {
    street: "102 Cotham brow",
    postcode: "BS66AP",
    Town: "Bristol",
    Country: "UK"},
  Products: firstProduct,
  User: firstUser

})

firstOrder.save(function(err, order){
  if (err) console.log(err);
  console.log('order saved!');

  Order.findOne(order.id).populate('User').exec(function(err, order) {
  if (err) console.log(err);
  console.log(order)
  })
})
