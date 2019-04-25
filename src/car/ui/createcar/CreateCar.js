import React, { Component } from 'react'

class CreateCar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      V5cID: '',
      VIN: '',
      
    }
  }

  onV5cIDChange(event) {
    this.setState({ V5cID: event.target.value })
  }

  onVINChange(event) {
    this.setState({ VIN: event.target.value })
  }

 

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.V5cID.length != 9 )
    {
      return alert('Please fill valid VfFcID - 9 length')
    }

    if (this.state.VIN.length != 15)
    {
      return alert('Please fill valid VIN. - 15 length')
    }

    this.props.onCreateCarSubmit(this.state.V5cID, this.state.VIN)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="V5cID">V5cID</label>
          <input id="V5cID" type="text" value={this.state.V5cID} onChange={this.onV5cIDChange.bind(this)} placeholder="V5cID" />
          <span className="pure-form-message">This is a required field.</span>

          <br />
          <label htmlFor="VIN">VIN</label>
          <input id="VIN" type="VIN" value={this.state.VIN} placeholder="VIN"  onChange={this.onVINChange.bind(this)} />
          <span className="pure-form-message">This is a required field.</span>

          <br />
          

         

          <button type="submit" className="pure-button pure-button-primary">Create</button>
        </fieldset>
      </form>
    )
  }
}

export default CreateCar
