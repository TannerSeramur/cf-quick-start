'use strict';

const Model = require('../mongo.js');
const schema = require('./players-schema.js');

/**
 * Class representing a Player.
 * @extends Model
 */
class Players extends Model {}

module.exports = new Players(schema);

