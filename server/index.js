const express = require('express')
const app = express()
const fun_ctrl = require('./controllers/fun_controller')
//above is the syntax for importing things into the server
// to turn this on, use nodemon server/index.js   we need to have the file path or it will try to run at the root
// we use postman to test this. this address will be http://localhost:3333 with / seperating the specific file path
app.use(express.json())

app.get('/api/events',fun_ctrl.getAllEvents)
app.get('/api/event/:id' , fun_ctrl.getEventbyId)
app.post('/api/addEvent', fun_ctrl.addEvent)
// app.get('/api/events', (req,res) => {
//   res.status(200).send(events)
// }) this is what it looked like before moving it into controller
// app.delete('/api/events' , (req,res) = {
//   res.status(500).send(')
// })

const port = 3333
//this is also referenced at the bottom of package.json
app.listen(port, () => console.log(`Aircooled Community at port: ${port}`))