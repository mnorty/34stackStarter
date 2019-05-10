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

  handleYear(year) {
    this.setState({year:year})
    console.log(this.state.year)
  }

  handleImage(image) {
    this.setState({image:image})
    console.log(this.state.image)
  }

  handleAddBeetle = (e) => {
		e.preventDefault()
		axios.post('/api/createbeetle', {
				year: this.state.year,
        image: this.state.image
      })
			.then((res) => {
				console.log(res)
      })
      console.log(this.state)
      
  }
  render() {
		return (
			<div className="createEdit">
          <div className='createContainer'>
          <h1 className="addTitle">Add Your Beetle Here</h1>
            Year<input
              className="inputField"
              onChange={e => this.handleYear(e.target.value)}
              type="text"
              placeholder='Enter your Year'
            />
            Image<input className="inputField"
              onChange={e => this.handleImage(e.target.value)}
              type="text"
              placeholder='Image URL'
            />
            <button onClick={this.handleAddBeetle} className="inputField">Los Geht's!</button>
        </div>
			</div>
    )
  }
}

export default AddBeetle