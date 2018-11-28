import { Router } from 'express';
import { getParcelsByUserId } from '../models/datastructure';

const userRouters = Router();
userRouters.get('/users/:userId/parcels', (req, res) => {
  const tempParcels = getParcelsByUserId(Number.parseInt(req.params.userId, 10));
  if (!tempParcels.length) {
    res.status(400).send('No user registered');
  } else {
    res.status(200).send(tempParcels);
  }
});


export default userRouters;
