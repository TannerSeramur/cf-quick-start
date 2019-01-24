'use strict';

const rootDir = process.cwd();
const example2 = require(`${rootDir}/src/models/example2/example2-model.js`);

const supergoose = require('../supergoose.js');

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('Example2 Model', () => {
  it('can post() a new example2', () => {
    let obj = {name:'Test Example2'};
    return example2.post(obj)
      .then(record => {
        Object.keys(obj).forEach(key =>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });

  it('can get() an example2', () => {
    let obj = {name:'Test Example2'};
    return example2.post(obj)
      .then(record => {
        return example2.get(record._id)
          .then(example2 => {
            Object.keys(obj).forEach(key =>{
              expect(example2[0][key]).toEqual(obj[key]);
            });
          });
      });
  });
  
});