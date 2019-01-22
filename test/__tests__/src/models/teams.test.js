'use strict';

const rootDir = process.cwd();
const teams = require(`${rootDir}/src/models/teams/teams-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Teams Model', () => {
  it('can post() a new team', () => {
    let obj = {name:'Test Team'};
    return teams.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      })
  });

  it('can get() a team', () => {
    let obj = {name:'Test Team'};
    return teams.post(obj)
      .then(record => {
        return teams.get(record._id)
          .then(team => {
            Object.keys(obj).forEach(key =>{
              expect(team[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});