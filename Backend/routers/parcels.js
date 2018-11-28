import { Router } from 'express';
import allParcels, { getParcelById, postParcels, cancelParcelsById } from '../models/datastructure';

const parcelsRouters = Router();

// parcelsRouters.get('/hello', (req, res) =>{
//   res.json({messg:'hello world'});
// });

parcelsRouters.get('/parcels', (req, res) => {
  res.status(200).json(allParcels);
});

parcelsRouters.get('/parcels/:parcelId', (req, res) => {
  const temParcel = getParcelById(req.params.parcelId);
  if (!temParcel) {
    res.status(204).send();
  } else {
    res.status(200).json(temParcel);
  }
});

parcelsRouters.post('/parcels/', (req, res) => {
  const createParcel = postParcels(req.body);
  res.status(200).json(createParcel);
});

parcelsRouters.put('/parcels/:parcelId/cancel', (req, res) => {
  const tempIndex = cancelParcelsById(Number.parseInt(req.params.parcelId, 10));
  res.status(200).json(tempIndex);
});

export default parcelsRouters;
