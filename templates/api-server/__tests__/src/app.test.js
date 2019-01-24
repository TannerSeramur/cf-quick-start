'use strict';

const rootDir = process.cwd();
const supergoose = require('./supergoose.js');
const {app} = require(`${rootDir}/src/app.js`);
const mockRequest = supergoose.server(app);

beforeAll(supergoose.startDB);
afterAll(supergoose.stopDB);

describe('api server', () => {

  it('should respond with a 404 on an invalid route', () => {

    return mockRequest
      .get('/foo')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  it('should respond with a 404 on an invalid method', () => {

    return mockRequest
      .post('/api/v1/notes/12')
      .then(results => {
        expect(results.status).toBe(404);
      });

  });

  it('should respond properly on request to /api/v1/example', () => {

    return mockRequest
      .get('/api/v1/example')
      .then(results => {
        expect(results.status).toBe(200);
      });

  });

  it('should be able to post to /api/v1/example', ()  => {

    let obj = {name:'Test Name', description:'Test description'};

    return mockRequest
      .post('/api/v1/example')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.team).toEqual(obj.team);
      });

  });


  it('following a post to example, should find a single record', () => {

    let obj = {name:'Test Name', description:'Test description'};

    return mockRequest
      .post('/api/v1/example')
      .send(obj)
      .then(results => {
        return mockRequest.get(`/api/v1/example/${results.body._id}`)
          .then(list => {
            expect(list.status).toBe(200);
            expect(list.body.team).toEqual(obj.team);
          });
      });

  });

});
