import { Router } from 'express';
import allParcels, { getParcelById } from '../models/datastructure';

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

export default parcelsRouters;
