import { body } from 'express-validator/check';

export function signupBodyValidation() {
    return [ 
        body('firstName', "firstName doesn't exist").exists(),
        body('lastName').optional(),
        body('email', "Invalid email").exists().isEmail(),
        body('password').exists().isString()
    ]
}