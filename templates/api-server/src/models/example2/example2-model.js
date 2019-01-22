'use strict';

const Model = require('../mongo.js');
const schema = require('./example2-schema.js');

/** 
 * Class representing a Team.
 * @extends Model
 */
class Example2 extends Model {}

// module.exports = Example2;


module.exports = new Example2(schema);

// const Example2 = require('./example2-model');

// let t1 = new Example2(teamSchema);
// let t2 = new Example2(teamSchema);

