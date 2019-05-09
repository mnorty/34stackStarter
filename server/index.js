const express = require('express');
const {json} = require('body-parser');
const ctrl = require('./controller');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express(json()));


app.get('/api/pokemon', ctrl.getPokemon);
app.delete('/api/pokemon/:id', ctrl.deletePokemon);

const server_port = 5056;
app.listen(server_port, () => console.log(`Aircooled Magic at port: ${server_port}`))