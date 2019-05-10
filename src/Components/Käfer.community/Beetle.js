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
    }

    componentDidMount(){
        this.handleGetBeetle()
    }

    componentDidUpdate(){
        this.handleGetBeetle()
    }

    handleGetBeetle = () => {
        axios.get('http://localhost:5056/api/beetles')
        .then(res => {
            this.setState({
                beetle: res.data
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
        ) 
    }
}

export default Beetle;