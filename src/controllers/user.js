/**
 * Created by Durzo on 5/28/2016.
 */

import {users} from '../sample_data/user-info.js';

class User {
    // GET: '/currentUserInfoRoute'
    static getCurrentUser(req, res, next) {
        res.send('<h1>This is the currentUserRoute screen</h1>');
    }

    // POST: '/user/create'
    static createUser(req, res, next) {
        res.send('<h1>User was probably created.</h1>');
    }

    // GET: '/user/:user'
    static getUserInfo(req, res, next) {
        var userFound = false;
        users.forEach((user) => {
            if(req.params.user == user.username){
                res.json(user);
                userFound = true;
            }
        });
        if(!userFound) {
            res.status(404).json({message: `User ${req.params.user} not found.`});
        }
    }

    static validateUser(req, res, next) {
        if (req.params.userId && req.params.guid) {
            res.json({valid:true});
        } else {
            res.json({valid:false});
        }
    }

    static loginUser(req, res, next) {
        if (req.body.username && req.body.password) {
            // Set cookies.
            res.json({valid:true});
        } else {
            // Clear cookies.
            res.json({valid:false});
        }
    }
}

module.exports = User;