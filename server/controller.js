let pokemon = [
  {name: '1956',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r45BA7KAUn9JAMi8wp5FDx1CJqXP20ydUc_W13k7k29oZ2jOHA',
   id: 0},
  {name: 'Beetle',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r45BA7KAUn9JAMi8wp5FDx1CJqXP20ydUc_W13k7k29oZ2jOHA',
   id: 1},
  {name: 'Beetle2',
   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9r45BA7KAUn9JAMi8wp5FDx1CJqXP20ydUc_W13k7k29oZ2jOHA',
   id: 2}
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