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
			<div>
				<h1>Add Beetle</h1>
				<form onSubmit={this.handleAddBeetle}>
					<input
						placeholder='Beetle Year'
						name='Beetle Year'
						// onChange={this.handleAddBeetle}
					/>
					<input
						placeholder='Beetle Image'
						name='Beetle Image'
						// onChange={this.handleAddBeetle}
					/>
					<button onClick={this.handleAddBeetle}>Add Beetle</button>
				</form>
			</div>
    )
  }
}

export default AddBeetle