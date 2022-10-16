const JokesController = require('../controllers/joke.controller');

module.exports = (app) => {
    app.get('/api/jokes', JokesController.findAllJokes);
    app.get('/api/jokes/:_id', JokesController.findOneJoke);
    app.post('/api/jokes', JokesController.createNewJoke);
    app.put('/api/jokes/:_id', JokesController.updateTheJoke);
    app.delete('/api/jokes/:_id', JokesController.deleteTheJoke);
}

