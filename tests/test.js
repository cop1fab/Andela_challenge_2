import chai from 'chai';

import chaiHttp from 'chai-http';
import server from '../server';

const should = chai.should();


chai.use(chaiHttp);

describe('/GET parcels', () => {
  it('it should GET all the parcels', (done) => {
    chai.request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.should.be.a('array');
        done();
      });
  });
});

describe('/GET parcels by Id', () => {
  const id = 1;
  it('it should GET all the parcels by ParcelId', (done) => {
    chai.request(server)
      .get(`/api/v1/parcels/:${id}`)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.be.a('object');

        done();
      });
  });
});

describe('GET parcels by user Id', () => {
  const id = 1;
  it('it shoud GET all parcels by UserId', () => {
    chai.request(server)
      .get(`/users/:${id}/parcels`)
      .end((err, res) => {
        should.not.exist(err);
        res.body.should.be.a('object');
      });
  });
});
