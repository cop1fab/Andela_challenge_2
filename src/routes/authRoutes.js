import express from 'express';
import UserControllers from '../controllers/userController';
import Auth from '../middlewares/Auth';


const authRoute = express.Router();

authRoute.route('/signup')
  .post(Auth.UserValidation, UserControllers.signup);

authRoute.route('/login')
  .post(Auth.UserValidation, UserControllers.login);


export default authRoute;
