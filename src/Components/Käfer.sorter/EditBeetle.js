import React,{Component} from 'react'
import axios from 'axios'
//importing this stuff gives everything in the file access to them. 
class EditBeetle extends Component {
  constructor(){
    super()
    this.state = {
      year: '',
      image: '',
      id: ''
    }
    //above sets up our state, which we will update below with our methods.
    console.log(this.state)
  }

  handleYear(year) {
    this.setState({year:year})
    console.log(this.state.year)
    //when this is ran it update the year on state with the year value of the function
  }

  handleImage(image) {
    this.setState({image:image})
    console.log(this.state.image)
    //when this is ran it update the image on state with the image value of the function
  }
  handleID(id) {
    this.setState({id:id})
    console.log(this.state.id)
    //when this is ran it update the id on state with the id value of the function
  }

  handleEditBeetle = (e) => {
    e.preventDefault()
    //prevents something from doing something we don't want to do that it does by default.I beleive this was used for a <form> that is not being used anymore
		axios.put(`/api/updatebeetle/${this.state.id}`, {
				year: this.state.year,
        image: this.state.image,
        //this defines what we are sending to the server on a put request. the URl which is adaptave to the id of the car, and the body contains the car details
      })
			.then((res) => {
        console.log(res)
        //just a console log
      })
      // console.log(this.state)
      
  }
  render() {
    //this is the display portion, this works like html inside of the html.
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
//this is the name of the export for other files that want to import this imformation. 