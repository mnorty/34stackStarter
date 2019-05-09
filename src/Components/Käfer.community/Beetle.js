import React, {Component} from 'react';
import axios from 'axios';
import BeetleDisplay from './BeetleDisplay';
import './Beetle.css'

class Pokemon extends Component {
    constructor(props){
        super(props);
        this.state = {
            pokemon: []
        }
    }

    componentDidMount(){
        this.handleGetBeetle()
    }

    handleGetBeetle = () => {
        axios.get('http://localhost:5056/api/pokemon')
        .then(res => {
            this.setState({
                pokemon: res.data
            })
        })
    }

    handleDeletePokemon = (data) => {
        this.setState({
            pokemon: data
        })
    }

    render(){
        const mappedBeetles = this.state.pokemon.map((element, i) => {
            return (
                <BeetleDisplay key={i} 
                                pokemon={element}
                                deletePokemon={this.handleDeletePokemon}/>
            )
        })
        return(
            <div className='beetles-flex-div'>
                <div className='beetles'>
                    {mappedBeetles}
                </div>
            </div>
        ) 
    }
}

export default Pokemon;