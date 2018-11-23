/* eslint-disable import/no-extraneous-dependencies */
import chai from 'chai';

import chaiHttp from 'chai-http';
import server from '../server';
import allParcels from '../models/data.json';

const should = chai.should();


chai.use(chaiHttp);

describe('/GET parcels', () => {
  it('it should GET all the parcels', (done) => {
    chai.request(server)
      .get('/api/v1/parcels')
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.body.length.should.be.eql(allParcels.length);
        const receivedParcels = res.body;
        receivedParcels[0].parcelId.should.be.eql(allParcels[0].parcelId);
        receivedParcels[0].userId.should.be.eql(allParcels[0].userId);
        receivedParcels[0].weight.should.be.eql(allParcels[0].weight);
        receivedParcels[0].location.should.be.eql(allParcels[0].location);
        receivedParcels[0].destination.should.be.eql(allParcels[0].destination);
        receivedParcels[0].price.should.be.eql(allParcels[0].price);
        receivedParcels[0].status.should.be.eql(allParcels[0].status);
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

// describe('/POST parcels', () => {
//   it('it should POT a new tempParcel', (done) => {
//     const tempParcel = {
//       userId: '4',
//       weight: '30',
//       location: 'Kinamba',
//       destination: 'Karongi',
//       description: 'Oranges',
//       price: '35000',
//       status: 'yet to be delivered',
//     };
//     chai.request(server)
//       .post('/api/v1/post/parcels')
//       .send(tempParcel)
//       .end((err, res) => {
//         // should.not.exist(err);
//         // console.log(res);
//         res.should.have.status(200);
//         res.should.be.a('array');
//         // console.log(res);
//         res.body.should.have.property('userId').eql('4');
//         res.body.should.have.property('weight').eql('30');
//         res.body.should.have.property('location').eql('Kinamba');
//         res.body.should.have.property('destination').eql('Karongi');
//         res.body.should.have.property('price').eql('35000');
//         res.body.should.have.property('status').eql('yet to be delivered');
//         // const tempParcel = res.body;
//         done();
//       });
//   });
// });
