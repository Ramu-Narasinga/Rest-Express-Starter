import { validationResult } from 'express-validator/check';
import { prisma } from '../helpers/prisma-client';
import bcrypt from 'bcrypt';
import { Success } from '../helpers/response';
import { Successful_Signup } from '../helpers/contants';

/**
* @api {post} /api/user Create user
* @apiName Create new user
* @apiPermission admin
* @apiGroup User
*
* @apiParam  {String} [firstName] firstName
* @apiParam  {String} [lastName] lastName
* @apiParam  {String} [email] Email
* @apiParam  {String} [password] Password
*
* @apiSuccess (200) {Object} `User` object
*/
export const signupUser = async (req, res, next) => {
    try {

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
          return;
        }
  
        const { firstName, lastName, email, password } = req.body

        let hashPassword = await bcrypt.hash(password, process.env.SALT_ROUNDS);

        // TODO: move this to service layer
        // https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2
        // https://dev.to/santypk4/bulletproof-node-js-project-architecture-4epf
        // save the user data
        let user = await prisma.user.create({
          data: {
            firstName, 
            lastName, 
            email, 
            password: hashPassword
          },
        })

        let res: any = {
          message: Successful_Signup,
          data: {
            email,
            firstName
          }
        }
        res = new Success(res);

        res.status().send(res)
     } catch(err) {
       return next(err)
     }
} 