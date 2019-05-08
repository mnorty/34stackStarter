import React, {Component} from 'react'
import axios from 'axios'

class Event extends Component {
  constructor(){
    super()
    this.state = {
      selectedID: null,
      selectedEvent: null
    }
  }

  handeGetEventById = () =>{
    axios.get('/api/event/${thi.state.selection}').then((res) => {
      console.log(res.data)
    })
  }

  handleUpdateId = (e) => {
    this.setState({
      selectedID: e.target.value
    })
  }

  render(){
    return(
      <div>
        <h1>Event By ID</h1>
        <input />
        <button onClick={this.handeGetEventById}>Find Event</button>
      </div>
    )
  }
}

export default Event