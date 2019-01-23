'use strict';

const Model = require('cf401-mongo');
const schema = require('./example-schema.js');

/**
 * Class representing a Player.
 * @extends Model
 */
class Template extends Model {}

module.exports = new Template(schema);
