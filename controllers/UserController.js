const { User } = require('../models/index.js');
const { comparePassword } = require('../helpers/bcrypt.js');
const { signToken } = require('../helpers/jwt.js');
const { verify } = require('../helpers/googleOAuth.js');

class UserController {
    static async postUserLoginHandler(req, res, next) {
        const email = req.body.email;
        const password = req.body.password;

        try {
            const user = await User.findOne({
                where: {
                    email
                }
            })

            const dataPassword = user ? user.password : '';

            if(!user) {
                throw 'Invalid username or password'
            } else if(!comparePassword(password, dataPassword)) {
                throw 'Invalid username or password'
            } else {
                const payload = {
                    email: user.email
                };

                const token = signToken(payload);

                res.status(200).json({token});
            }

        } catch(err) {
            next(err);
        }
    }

    static async postGoogleLoginHandler(req, res, next) {
        const googleToken = req.headers.google_token;
        
        try {
            const googlePayload = await verify(googleToken);
            const email = googlePayload.email;
            const name = googlePayload.name;

            const user = await User.findOne({
                where: {
                    email
                }
            })

            if(user) {
                if(!comparePassword(process.env.GOOGLE_DEFAULT_PASSWORD, user.password)) {
                    throw 'Please login via website';
                } else {
                    const payload = {
                        email: user.email
                    };
    
                    const token = signToken(payload);
    
                    res.status(200).json({token});
                }
            } else {
                const newUser = {
                    email,
                    password: process.env.GOOGLE_DEFAULT_PASSWORD,
                    name
                }
                const user = await User.create(newUser);

                const payload = {
                    email: user.email
                };

                const token = signToken(payload);

                res.status(200).json({token});
            }
            
        } catch(err) {
            next(err);
        }
    }

    static async postUserRegisterHandler(req, res, next) {
        const newUser = {
            email: req.body.email,
            password: req.body.password,
            name: req.body.name
        }

        try {
            const user = await User.create(newUser);
            
            res.status(201).json({user});
        } catch(err) {
            next(err);
        }

    }
}

module.exports = UserController;