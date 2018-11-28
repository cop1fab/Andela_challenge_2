import express from 'express';
import Auth from '../middlewares/Auth';
import ParcelController from '../controllers/ParcelController';
import UserControllers from '../controllers/userController';


const userRoute = express.Router();

userRoute.route('/delete')
  .delete(Auth.verifyToken, UserControllers.delete);

userRoute.route('/:userId')
  .get(Auth.verifyToken, UserControllers.userByEmail);

userRoute.route('/:userId/parcels')
  .get(Auth.verifyToken, ParcelController.parcelByUser);

export default userRoute;
