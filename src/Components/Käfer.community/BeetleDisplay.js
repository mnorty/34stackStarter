import React, {Component} from 'react';
import axios from 'axios';
import './Beetle.css';

class PokemonDisplay extends Component {
    handleDeleteBeetle = () => {
        axios.delete(`/api/pokemon/${this.props.pokemon.id}`)
        .then(res => {
            this.props.deletePokemon(res.data)
        })
    }

    render(){
        return (
        <div>
            <h4 className='beetle-name'>{this.props.pokemon.name}</h4>
            <img src={this.props.pokemon.image} alt='"Groovy Bug man"' className='beetle-pictures'/>
            <button onClick={this.handleDeleteBeetle}>Delete</button>
            <button onClick={this.handleDeleteBeetle}>Edit</button>     
        </div>
    )
    }
}

export default PokemonDisplay;