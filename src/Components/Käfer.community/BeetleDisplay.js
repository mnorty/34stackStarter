import React, {Component} from 'react';
import axios from 'axios';
import './Beetle.css';

class BeetleDisplay extends Component {
    handleDeleteBeetle = () => {
        axios.delete(`/api/beetle/${this.props.beetle.id}`)
        .then(res => {
            this.props.deleteBeetle(res.data)
        })
    }

    render(){
        return (
        <div className="beetlePost">
            <h4 className='beetle-year'>{this.props.beetle.year}</h4>
            <img src={this.props.beetle.image} alt='"Groovy Bug man"' className='beetle-pictures'/>
            <button className="postButton"onClick={this.handleDeleteBeetle}>Delete</button>   
            <button className="postButton"onClick={this.handleDeleteBeetle}>Edit</button>     
        </div>
    )
    }
}

export default BeetleDisplay;