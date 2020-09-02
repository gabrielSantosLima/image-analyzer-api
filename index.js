const express = require('express');
const { json } = require('express');
const cors = require('cors')

const app = express();

const AnalizerController = require('./src/controllers/AnalizerController')

app.use(json());
app.use(cors())

app.get('/analyze', AnalizerController.get)

app.listen(3333);