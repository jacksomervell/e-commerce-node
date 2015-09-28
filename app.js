var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/e-commerce-node')

var Order = require('./models/order');
var Product = require('./models/product');
var User = require('./models/user');