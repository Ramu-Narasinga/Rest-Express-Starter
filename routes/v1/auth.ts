import express from 'express';
import {
    signupUser
} from '../../controller/auth';
import { Router } from 'express';
import { signupBodyValidation } from "../../middleware/request-validations/auth";

const router = Router();

// TODO: add schema validation

// best practices links:
// https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/

/**
* @api {post} /api/user Create user
* @apiName Create new user
* @apiPermission admin
* @apiGroup User
*
* @apiParam  {String} [userName] username
* @apiParam  {String} [email] Email
* @apiParam  {String} [phone] Phone number
* @apiParam  {String} [status] Status
*
* @apiSuccess (200) {Object} mixed `User` object
*/
router.post("/signup", signupBodyValidation, signupUser);