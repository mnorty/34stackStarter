import React,{Component} from 'react'
import axios from 'axios'

class EditBeetle extends Component {
  constructor(){
    super()
    this.state = {
      year: '',
      image: '',
      id: ''
    }
    console.log(this.state)
  }

  handleYear(year) {
    this.setState({year:year})
    console.log(this.state.year)
  }

  handleImage(image) {
    this.setState({image:image})
    console.log(this.state.image)
  }
  handleID(id) {
    this.setState({id:id})
    console.log(this.state.id)
  }

  handleEditBeetle = (e) => {
    e.preventDefault()
		axios.put(`/api/updatebeetle/${this.state.id}`, {
				year: this.state.year,
        image: this.state.image,
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
          <h1 className="addTitle">Edit Your Beetle Here</h1>
            Year<input
              className="inputField"
              onChange={e => this.handleYear(e.target.value)}
              type="text"
              placeholder='Enter your Year'
            />
            Image<input
              className="inputField"
              onChange={e => this.handleImage(e.target.value)}
              type="text"
              placeholder='Image URL'
            />
            Car ID<input
              className="inputField"
              onChange={e => this.handleID(e.target.value)}
              type="text"
              placeholder='Enter your ID'
            />
            <button onClick={this.handleEditBeetle} className="inputField">Gut Gemacht!</button>
        </div>
			</div>
    )
  }
}

export default EditBeetle