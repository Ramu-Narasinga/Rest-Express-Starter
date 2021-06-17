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

router.post("/signup", signupBodyValidation, signupUser);