import { validationResult } from 'express-validator/check';

/**
 * @api {POST} /api/v1/auth/signup Signup user
 * @apiGroup User
 * @apiDiscription Signup user
 */
export const signupUser = async (req, res, next) => {
    try {
        // Finds the validation errors in this request and wraps them in an object with handy functions
        const errors = validationResult(req);
        
        // TODO: error handling best practices
        if (!errors.isEmpty()) {
          res.status(422).json({ errors: errors.array() });
          return;
        }
  
        const { userName, email, phone, status } = req.body
        
        const user = await User.create({
  
          userName,
  
          email,
  
          phone,
  
          status,   
        })
  
        res.json(user)
     } catch(err) {
       return next(err)
     }
} 