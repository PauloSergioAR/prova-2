const express = require('express');
const app = express();

const router = require('./src/routes');

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.get('/', (req, res) => {
  res.send("api works")
});

app.listen(port);

console.log("App running on port: ", port)