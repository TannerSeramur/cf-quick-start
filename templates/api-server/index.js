'use strict';

require('dotenv').config();
const mongoose = require('mongoose');

const mongooseOptions = {
  useNewUrlParser:true,
  useCreateIndex: true,
};
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/template`, mongooseOptions);

require('./src/app.js').start(process.env.PORT || 3000);
