const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
    .then((allTheJokes) => {
        res.json(allTheJokes)
    })
    .catch(err => res.json({error: err}));
}

module.exports.findOneJoke = (req, res) => {
    Joke.findOne({_id: req.params._id })
    .then((oneSingleJoke) => res.json(oneSingleJoke))
    .catch(err => res.json({error: err}));
}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
    .then((newCreatedJoke) => {
        res.json(newCreatedJoke)
    })
    .catch(err => res.json({error: err}));
}

module.exports.updateTheJoke = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params._id}, req.body, {new: true, runValidators: true})
    .then((upadatedJoke) => {
        res.json(upadatedJoke)
    })
    .catch(err => res.json({error: err}));
}

module.exports.deleteTheJoke = (req, res) => {
    Joke.deleteOne({_id: req.params._id})
    .then(result => {
        res.json(result)
    })
    .catch(err => res.json({error: err}));
}
