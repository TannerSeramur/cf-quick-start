'use strict';

const rootDir = process.cwd();
const example = require(`../../../src/models/example/example-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Example Model', () => {
  it('can post() a new example', () => {
    let obj = {name:'Test', trueorfalse:'T',group:'This one'};
    return example.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() an example', () => {
    let obj = {name:'Test', trueorfalse:'T',group:'This one'};
    return example.post(obj)
      .then(record => {
        return example.get(record._id)
          .then(example => {
            Object.keys(obj).forEach(key =>{
              expect(example[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});