const express = require('express');
const {json} = require('body-parser');
const ctrl = require('./controller');
const app = express();
const cors = require('cors')

app.use(cors());
// cors helps ports not matching up
app.use(json());


app.get('/api/beetles', ctrl.getBeetle);
app.delete('/api/beetle/:id', ctrl.deleteBeetle);
app.post('/api/createbeetle' , ctrl.createBeetle)
app.put('/api/updatebeetle/:id' , ctrl.changeBeetle)
//these are what the client initially hits, then depending on the type of request it launches a different function. 

const server_port = 5056;
//what port we are running at 
app.listen(server_port, () => console.log(`Aircooled Magic at port: ${server_port}`))
// just a message letting us know the server is running properly