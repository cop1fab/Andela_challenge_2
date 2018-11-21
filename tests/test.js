// import assert from 'assert';
//Require the dev-dependencies
let chai = require('chai');

let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

describe('/GET parcels', () => {
  it('it should GET all the parcels', (done) => {
    chai.request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
          should.not.exist(err);
          res.should.have.status(200);
          res.body.should.be.a('array');;
      done();
      });
  });
});

describe('/GET parcels', () => {
  const id = 1;
  it('it should GET all the parcels by Id', (done) => {
    chai.request(server)
      .get(`/api/v1/parcels/:${id}`)
      .end((err, res) => {
        should.not.exist(err);
        //chai.expect(err).to.not.exist;
        // res.should.have.status('200');

        //res.body.should.have.property('id');
        res.body.should.be.a('object');

      done();
      });
  });
});
