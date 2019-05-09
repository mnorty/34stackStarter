let pokemon = [
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

module.exports = {
  getPokemon: (req, res) => {
      res.status(200).send(pokemon)
  },
  deletePokemon: (req, res) => {
      const {id} = req.params;
      pokemon = pokemon.filter((pokemon) => pokemon.id !== +id)
      res.status(200).send(pokemon)
  }
}