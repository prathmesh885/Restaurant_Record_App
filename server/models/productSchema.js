const mongoose = require("mongoose");
const express = require('express');
const app = express();
const UserSchema = new mongoose.Schema({
  
  restaurantId: {
    type: String,
    default: 0,
  },
  restaurantName: {
    type: String,
    default: 0,
  },
  email: {
    type: String,
    default: 0,
  },
  mobileNumber: {
    type: String,
    default: 0,
  },
  address: {
    type: String,
    default: 0,
  },
  service: {
    type: String,
    default: 0,
  }
});

const User = mongoose.model("product", UserSchema);

module.exports = User;