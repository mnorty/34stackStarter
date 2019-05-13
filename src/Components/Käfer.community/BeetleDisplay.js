import React, {Component} from 'react';
import axios from 'axios';
import './Beetle.css';

class BeetleDisplay extends Component {
    handleDeleteBeetle = () => {
        axios.delete(`/api/beetle/${this.props.beetle.id}`)
        //this provides the url and the id we want to delete, it gets the logic for how to handle the delete from controller.js
        .then(res => {
            this.props.deleteBeetle(res.data)
            // this is fired after we recieve the response from the server, res.data doesnt exist until we get a resonse from the server. 
        })
    }

    render(){
        return (
        <div className="beetlePost">
            <div>
                <div className='postRight'>
                    <h4 className='beetle-year'>Year: {this.props.beetle.year}</h4>
                    <h4 className='beetle-id'>This Car's id: {this.props.beetle.id}</h4>
                </div>
                <div className="postRight">
                    <button className="postButton"onClick={this.handleDeleteBeetle}>Delete</button>   
                </div>
            </div>
            <div>
                <img src={this.props.beetle.image} alt='"Groovy Bug man"' className='beetle-pictures'/> 
            </div>
        </div>
    )
    }
}

export default BeetleDisplay;