const express = require("express");
const app = express();
const port = 8000;

require("./config/joke.config");

app.use(express.json(), express.urlencoded({ extended: true}));

const AllMyJokesRoutes = require("./routes/joke.routes");
AllMyJokesRoutes(app);

app.listen( 8000, () => console.log(`server is up on port: ${port}`));