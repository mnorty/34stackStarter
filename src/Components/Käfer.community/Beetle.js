import React, {Component} from 'react';
import axios from 'axios';
import BeetleDisplay from './BeetleDisplay';
import './Beetle.css'

class Beetle extends Component {
    constructor(props){
        super(props);
        this.state = {
            beetle: []
        }
        //this is the section that displays all the beetles at the bottom of the page. 
    }

    componentDidMount(){
        this.handleGetBeetle()
        //at the initial loading of the page it does a get request for the hardcoded beetles
    }

    componentDidUpdate(){
        this.handleGetBeetle()
        //has the page reloade the beetles after an update is made to show the changes. 
    }

    handleGetBeetle = () => {
        axios.get('http://localhost:5056/api/beetles')
        //this is the address the get request is going to 
        .then(res => {
            this.setState({
                beetle: res.data
                // sets the beetle array as the response from the server
            })
        })
    }

    handleDeleteBeetle = (data) => {
        this.setState({
            beetle: data
        })
    }

    render(){
        const mappedBeetles = this.state.beetle.map((element, i) => {
            //this slices up the beetle array into individual beetles and then returns them individually
            return (
                <BeetleDisplay key={i} 
                                beetle={element}
                                deleteBeetle={this.handleDeleteBeetle}/>
            )
        })
        return(
            <div className='beetles-flex-div'>
                <div className='beetles'>
                    {mappedBeetles}
                </div>
            </div>
            //displays all the individual beetles
        ) 
    }
}

export default Beetle;