'use strict';

const Model = require('../mongo.js');
const schema = require('./teams-schema.js');

/** 
 * Class representing a Team.
 * @extends Model
 */
class Teams extends Model {}

module.exports = Teams;


// module.exports = new Teams(schema);

const Teams = require('./teams-model');

let t1 = new Teams(teamSchema);
let t2 = new Teams(teamSchema);

