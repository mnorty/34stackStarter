import React,{Component} from 'react'
import axios from 'axios'

class AddBeetle extends Component {
  constructor(){
    super()
    this.state = {
      year: '',
      image: ''
    }
  }
  // setting up state to be updated 
  handleYear(year) {
    this.setState({year:year})
    // console.log(this.state.year)
    //when this is ran it update the year on state with the year value of the function
  }

  handleImage(image) {
    this.setState({image:image})
    // console.log(this.state.image)
    //when this is ran it update the image on state with the image value of the function
  }

  handleAddBeetle = (e) => {
    e.preventDefault()
    //stopps stuff from doing it defualt, this is a remnant from when I was using a form. 
		axios.post('/api/createbeetle', {
				year: this.state.year,
        image: this.state.image
        //this is the url for the rquest and the body that will be included. 
      })
			.then((res) => {
        console.log(res)
        // just logs a console log response
      })
      // console.log(this.state)
      
  }
  render() {
		return (
			<div className="createEdit">
          <div className='createContainer'>
          <h1 className="addTitle">Add Your Beetle Here</h1>
            Year<input
              className="inputField"
              onChange={e => this.handleYear(e.target.value)}
              // update the state to match the input 
              type="text"
              placeholder='Enter your Year'
            />
            Image<input className="inputField"
              onChange={e => this.handleImage(e.target.value)}
              // update the state to match the input 
              type="text"
              placeholder='Image URL'
            />
            <button onClick={this.handleAddBeetle} className="inputField">Los Geht's!</button>
        </div>
			</div>
      //last button runs the handleAddBeetle function which initiates the request to server.
    )
  }
}

export default AddBeetle