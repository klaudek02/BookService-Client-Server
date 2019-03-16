const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.username = req.body.username;
    user.email = req.body.email;
    user.password = req.body.password;

    user.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['username','email']) });
        }
    );
};
module.exports.updateLikedBooks = (req, res, next) =>{
    User.findByIdAndUpdate(req.body.id, {$push: {liked : req.body.liked}}, function (err, user) {
        if (err) return next(err);
        res.status(200).json({status: true, message: 'Added book to liked list'});
    });
};
module.exports.updateObservedUsers = (req, res, next) =>{
    User.findByIdAndUpdate(req.body.id, {$push: {observed : req.body.observed}}, function (err, user) {
        if (err) return next(err);
        res.status(200).json({status: true, message: 'Added user to observed list'});
    });
};
module.exports.banUser = (req, res, next) =>{
    let user = req.user;
    let idBan = req.body.banId;
    if(user.checkIfAdmin())
    {
        User.findByIdAndUpdate(req.body.id, {ban: 'true'}, function(err,user){
            if(err) return next(err);
            res.status(200).json({status: true, message: 'User banned'});
        })
    }
    else
        return res.status(404).json({ status: false, message: 'You are not admin'});

}