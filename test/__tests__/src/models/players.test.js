'use strict';

const rootDir = process.cwd();
const players = require(`${rootDir}/src/models/players/players-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Players Model', () => {
  it('can post() a new player', () => {
    let obj = {name:'John', bats:'R',throws:'R',position:'C',team:'Bunnies'};
    return players.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() a player', () => {
    let obj = {name:'John', bats:'R',throws:'R',position:'C',team:'Bunnies'};
    return players.post(obj)
      .then(record => {
        return players.get(record._id)
          .then(player => {
            Object.keys(obj).forEach(key =>{
              expect(player[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});