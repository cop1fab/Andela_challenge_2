import Express from 'express';
import allParcels from './models/data.json';
import {
  getParcelById, getParcelsByUserId, cancelParcelsById, postParcels,
} from './models/datastructure';

const server = Express();
server.use(Express.json());

const appVersion = '/api/v1';

// Endpoint to get a list of all parcels

server.get(`${appVersion}/parcels`, (req, res) => {
  res.json(allParcels);
});

// Endpoint to get 1 parcel by parcel id

server.get(`${appVersion}/parcels/:parid`, (req, res) => {
  const temparcel = getParcelById(Number.parseInt(req.params.parid, 10));
  if (!temparcel) {
    res.status(204).send();
  } else {
    res.status(200).json(temparcel);
  }
});

// Endpoint to get all parcels by user id

server.get(`${appVersion}/users/:usid/parcels`, (req, res) => {
  const tempParcels = getParcelsByUserId(Number.parseInt(req.params.usid, 10));
  if (!tempParcels.length) {
    res.status(400).send('No user registered');
  } else {
    res.status(200).send(tempParcels);
  }
});

// Endpoint to cancel parcel by parcel id

server.put(`${appVersion}/parcels/:parid/cancel`, (req, res) => {
  const tempIndex = cancelParcelsById(Number.parseInt(req.params.parid, 10));
  res.status.apply(200).json(tempIndex);
});

// Endpoint to create a parcel

server.post(`${appVersion}/parcels`, (req, res) => {
  const createParcel = postParcels(req.body);
  res.status(200).json(createParcel);
});

// eslint-disable-next-line no-console
const port = process.env.PORT || 3200;
server.listen(port, () => console.log('server started successfuly'));

export default server;
