const News = require('../models/news.model');


exports.news_create = function (req, res,next) {
        let news = new News(
            {
                userId: req.body.userId,
                topic: req.body.topic,
                description: req.body.description,
                postedDate: req.body.postedDate
            }
        );
        news.save(function (err) {
            if (err) {
                return next(err);
            }
            res.send('News Created successfully')
        })
};

exports.news_read = function (req, res,next) {
    News.find({newsId : req.params.newsId}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};

exports.news_update = function (req, res,next) {
    news.update({newsId : req.params.newsId},{topic: req.body.topic, description: req.body.description,
    postedDate: req.body.postedDate}, function (err, news) {
        if(req.isAuthenticated()) {
            if (err) return next(err);
            res.send('News updated.');
        } else {
            res.redirect('/')
        }
    });


};

exports.news_delete = function (req, res,next) {
    News.deleteOne({newsId : req.params.newsId}, function (err,news) {
        if(req.isAuthenticated()) {
        res.send('News removed');
    }});

};

exports.news_readAll = function (req, res,next) {
    News.find({}, function (err, news) {
        if (err) return next(err);
        res.send(news);
    })
};