const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const Account = new Schema({
  name: {type: String, minLenght: 1, maxLenght: 255},
  email: {type: String, minLenght: 1, maxLenght: 255},
  phone: {type: Number, minLenght: 1, maxLenght: 10},
  password: {type: String, minLenght: 1, maxLenght: 255},
  repassword: {type: String, minLenght: 1, maxLenght: 255}
});

module.exports = mongoose.model('Account', Account)