// this is the hard coded supply of beetles for the web page to display when it is initialy loaded.

let beetle = [
  {year: '1956',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r45BA7KAUn9JAMi8wp5FDx1CJqXP20ydUc_W13k7k29oZ2jOHA',
   id: 0},
  {year: '1966',
   image: 'https://www.carspiritpk.com/wp-content/uploads/2018/12/Annie-VW-Beetle-11-850x567-726x363.jpg',
   id: 1},
  {year: '1969',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBI3t3-RhTBocQAh-_MpmPTVZNyZZIjpUi4XiJo-qcq4k-Ym1x',
   id: 2},
   {year: '1974',
   image: 'https://barrettjacksoncdn.azureedge.net/staging/carlist/items/Fullsize/Cars/218069/218069_Side_Profile_Web.jpg',
   id: 3}
]
// this is the functions that the server references when it gets a crud request
module.exports = {
  getBeetle: (req, res) => {
      res.status(200).send(beetle)
  },
  // all this does is send back a 200 status and the beetle array, seen above
  deleteBeetle: (req, res) => {
      const {id} = req.params; // this sets the id we use below as the id that is passed through in the delete request
      beetle = beetle.filter((beetle) => beetle.id !== +id)
      //this updates the array with all beetles except for the beetle with the exact id we passed through.
      res.status(200).send(beetle)
      //sends back a 200 status and the updated beetle array
  },
  createBeetle: (req,res) => {
    // console.log(req.body)
    let id = beetle[beetle.length - 1].id +1
    // this makes the id of the new beetle always one greater than the last beetle
    const newbeetle = {
      year: req.body.year,
      image: req.body.image,
      id: id
      //this sets the paramaters for the new beetle to match the data passed in the body of the clientside put request
    }
    beetle = [...beetle,newbeetle]
    // this adds the new beetle to the existing beetle array
    res.status(200).send(beetle)
    // sends back a 200 status and the updated beetle array
  },
  changeBeetle: (req,res) => {
    // console.log(req.body)
    const {id} = req.params
    // this sets the id variable as the id passed in by the client side request
    const newbeetle = {
      year: req.body.year,
      image: req.body.image,
      //sets the new beetle object to have the matcing information from the body of the client side request
    }

    let editBeetle = beetle.find(element => {
      return element.id === +id
      //sorts through the beetle array and finds the first element that satisfies the parameters.in this case that is the first beetle that matches the id as a number
    })
    // console.log(editBeetle)
    editBeetle.year = newbeetle.year
    editBeetle.image = newbeetle.image
    //this changes the info on the element that the find found with the new info from the updated newbeetle above.

    res.status(200).send(beetle)
    //sends back a 200 status and the updated array.
  },
}