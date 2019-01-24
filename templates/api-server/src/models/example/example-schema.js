'use strict';

const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const example = mongoose.Schema({
  name: { type:String, required:true },
  trueorfalse: { type:String, required:true, uppercase:true, enum:['T', 'F'] },
  group: {type:String, required:true},
});

module.exports = mongoose.model('example', example);
