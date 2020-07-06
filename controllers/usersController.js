const { User } = require('../models/index')
const { comparePassword } = require('../helper/bcrypt');
const  signToken = require('../helper/jwt')

class UsersController {
    static async login (req, res) {
        try{
            
            // console.log(req.body) //tracker

            const user = await User.findOne({
                where: {
                    email: req.body.email
                }
            })

            // console.log(user) //tracker

            if(!user) throw `Invalid username/password`;
            else if(!comparePassword(req.body.password, user.password)) throw `Invalid username/password`;
            else {
                
                // console.log(`hello`)
                
                const payload = {email: user.email};
                const token = signToken(payload);

                res.status(200).json({accessToken: token});
            }


        } catch (err) {
            res.status(500).json(err)
        }
        
            
    }

    static async register(req, res) {
        if(req.body.password == '') req.body.password = null;

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

            err = err.errors.map(error => error.message)

            res.status(500).json({error: err});
        }
    }
}

module.exports = UsersController;