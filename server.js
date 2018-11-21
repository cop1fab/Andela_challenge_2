import Express from 'express';
import allParcels, { getParcelById, getParcelsByUserId, putParcelsById, postParcels } from './models/datastructure'

const server = Express();
// const bodyParser = require("body-parser");

// server.use(bodyParser.urlencoded({extended:false}));
// server.use(bodyParser.json());


server.use(Express.json());

const appVersion = '/api/v1';

server.get(`${appVersion}/parcels`, (req, res) => {
  res.json(allParcels);
});

server.get(`${appVersion}/parcels/:parid`, (req, res) => {
  const temparcel = getParcelById(Number.parseInt(req.params.parid, 10))
  if (!temparcel) {
    res.send('sorry, no match found');
  } else { 
    res.json(temparcel);
  }
});

server.get(`${appVersion}/users/:usid/parcels`, (req, res) => {
const tempParcels = getParcelsByUserId(Number.parseInt(req.params.usid,10))
  if (!tempParcels.length) {
    res.send('No user registered');
  } else {
    res.send(tempParcels);
  }
});

server.put(`${appVersion}/parcels/:parid/cancel`, (req, res) => {
  const tempIndex = putParcelsById(Number.parseInt(req.params.parid, 10));
 
  res.json(tempIndex);
});
server.post(`${appVersion}/parcels`, (req, res) => {
  const createParcel = postParcels(req.body)
  res.json(allParcels);
});

// eslint-disable-next-line no-console
const port = process.env.PORT || 3200;
server.listen(port, () => console.log('server started successfuly'));

module.exports = server
