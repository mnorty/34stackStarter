const express = require('express');
const {json} = require('body-parser');
const ctrl = require('./controller');
const app = express();
const cors = require('cors')

app.use(cors());
app.use(express(json()));


app.get('/api/beetles', ctrl.getBeetle);
app.delete('/api/beetle/:id', ctrl.deleteBeetle);

const server_port = 5056;
app.listen(server_port, () => console.log(`Aircooled Magic at port: ${server_port}`))