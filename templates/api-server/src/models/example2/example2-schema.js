'use strict';

const example = require('../example/example-schema.js');
const mongoose = require('mongoose');
require('mongoose-schema-jsonschema')(mongoose);

const example2 = mongoose.Schema({
  name: { type:String, required:true },
}, { toObject:{virtuals:true}, toJSON:{virtuals:true} });

example2.virtual('example', {
  ref: 'exampe',
  localField: 'name',
  foreignField: 'group',
  justOne:false,
});

example2.pre('find', function() {
  try {
    this.populate('example');
  }
  catch(e) {
    console.error('Find Error', e);
  }
});

module.exports = mongoose.model('example2', example2);
