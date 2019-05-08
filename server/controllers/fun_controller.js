let events = [
  {name: 'rollerskating' , funLevel: 7.5 , id:1},
  {name: 'ice blocking' , funLevel: 8, id:2}
]
//event is a let to let us modify it, const does not allow it to be modified

module.exports = {
  getAllEvents: (req,res) => {
    res.status(200).send(events)
  },
  getEventbyId: (req,res) => {
    const event = events.filter((event) => {
      return event.id === +req.params.id
    })
    res.status(200).send(event[0])//having it return at index zero makes it an object . . somehow
  },
  addEvent: (req,res) => {
    console.log(req.body)
    let id = events[events.length -1].id +1
    const newEvent = {
      name: req.body.name,
      funLevel: req.body.funLevel,
      id: id
    }
    console.log(newEvent)
    events = [...events,newEvent]
    res.status(200).send(newEvent)
  }
}