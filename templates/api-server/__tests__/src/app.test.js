'use strict';

const rootDir = process.cwd();
const supergoose = require('./supergoose.js');
const {server} = require(`${rootDir}/src/app.js`);
const mockRequest = supergoose.server(server);

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

  it('should respond properly on request to /api/v1/teams', () => {

    return mockRequest
      .get('/api/v1/teams')
      .then(results => {
        expect(results.status).toBe(200);
      });

  });

  it('should be able to post to /api/v1/teams', () => {

    let obj = {name:'test'};

    return mockRequest
      .post('/api/v1/teams')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.title).toEqual(obj.title);
      });

  });

  it('should be able to post to /api/v1/players', ()  => {

    let obj = {name:'John', bats:'R',throws:'R',position:'C',team:'Bunnies'};

    return mockRequest
      .post('/api/v1/players')
      .send(obj)
      .then(results => {
        expect(results.status).toBe(200);
        expect(results.body.team).toEqual(obj.team);
      });

  });


  it('following a post to players, should find a single record', () => {

    let obj = {name:'John', bats:'R',throws:'R',position:'C',team:'Bunnies'};

    return mockRequest
      .post('/api/v1/players')
      .send(obj)
      .then(results => {
        return mockRequest.get(`/api/v1/players/${results.body._id}`)
          .then(list => {
            expect(list.status).toBe(200);
            expect(list.body.team).toEqual(obj.team);
          });
      });

  });

});
