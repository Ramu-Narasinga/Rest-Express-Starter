import { body } from 'express-validator/check';

export function signupBodyValidation() {
    return [ 
        body('userName', "userName doesn't exists").exists(),
        body('email', "Invalid email").exists().isEmail(),
        body('phone').optional().isInt(),
        body('status').optional().isIn(['enabled', 'disabled'])
    ]
}