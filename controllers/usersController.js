const { User } = require('../models/index')
const { comparePassword } = require('../helper/bcrypt');
const { signToken } = require('../helper/jwt')
const { verify } = require(`../helper/googleOauth`)

class UsersController {
    static async login(req, res, next) {
        try {

            // console.log(req.body) //tracker

            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            // console.log(user) //tracker

            if (!user) {
                next({
                    name: `BadRequest`,
                    errors: { message: `Invalid username/password` }
                })
            } else if (!comparePassword(req.body.password, user.password)) {
                next({
                    name: `BadRequest`,
                    errors: { message: `Invalid username/password` }
                })
            } else {

                // console.log(`hello`)

                const payload = { email: user.email };
                const token = signToken(payload);

                res.status(200).json({ accessToken: token });

            }
        } catch (err) {
            next(err);
        }


    }

    static async register(req, res, next) {
        if (req.body.password == '') req.body.password = null;

        const newUser = {
            email: req.body.email,
            password: req.body.password
        };
        try {
            const user = await User.create(newUser);
            res.status(201).json({
                id: user.id,
                email: user.email,
            });
        } catch (err) {

            // console.log(err) //tracker

            if (err.name == 'SequelizeValidationError') {
                err = err.errors.map(error => error.message)
                next({
                    name: `BadRequest`,
                    errors: { message: err }
                })
            } else {
                // console.log(err.message)
                next(err);
            }
        }
    }

    static async oauthGoogle(req, res, next) {

        // console.log(req.headers);

        const google_token = req.headers.google_token

        try {
            const googlePayload = await verify(google_token);
            const googleEmail =  googlePayload.email;

            // console.log('ini gmail: ', googleEmail);

            // res.status(200).json({
            //     email: googleEmail
            // })

            const user = await User.findOne({
                where: {
                    email: googleEmail
                }
            })

            // console.log(user.email)

            if(user) {

                // console.log('ini password PG: ', user.password)

                if(!comparePassword(process.env.google_default_password, user.password)) {
                    throw `Please login via website`
                } else {

                    // console.log('ini email PG: ', user.email)

                    const payload = {
                        email: user.email
                    }
    
                    const token = signToken(payload);

                    // console.log('ini email PG: ', token)

                    res.status(200).json({
                        token
                    })
                }
            } else {
                const newUser = await User.create({
                    email: googleEmail,
                    password: process.env.google_default_password
                })

                const payload = {
                    email: newUser.email
                }

                const token = signToken(payload);
                
                res.status(201).json({
                    token
                })
            }

        
        } catch(err) {

            // console.log(err)

            next(err)
        }


    }
}

module.exports = UsersController;