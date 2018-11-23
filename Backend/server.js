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
  res.status(200).json(allParcels);
});

// Endpoint to get 1 parcel by parcel id

server.get(`${appVersion}/parcels/:parcelId`, (req, res) => {
  const temParcel = getParcelById(req.params.parcelId);
  if (!temParcel) {
    res.status(204).send();
  } else {
    res.status(200).json(temParcel);
  }
});

// Endpoint to get all parcels by user id

server.get(`${appVersion}/users/:userId/parcels`, (req, res) => {
  const tempParcels = getParcelsByUserId(Number.parseInt(req.params.userId, 10));
  if (!tempParcels.length) {
    res.status(400).send('No user registered');
  } else {
    res.status(200).send(tempParcels);
  }
});

// Endpoint to cancel parcel by parcel id

server.put(`${appVersion}/parcels/:parid/cancel`, (req, res) => {
  const tempIndex = cancelParcelsById(Number.parseInt(req.params.parcelId, 10));
  res.status(200).json(tempIndex);
});

// Endpoint to create a parcel

server.post(`${appVersion}/parcels`, (req, res) => {
  const createParcel = postParcels(req.body);
  res.status(200).json(createParcel);
});

const port = process.env.PORT || 8882;
// eslint-disable-next-line no-console
server.listen(port, () => console.log('server started successfuly'));

export default server;
