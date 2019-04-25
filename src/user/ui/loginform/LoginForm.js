import React, { Component } from 'react'

class LoginForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: '',
      
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value })
  }

 

  handleSubmit(event) {
    event.preventDefault()

    if (this.state.name.length < 2)
    {
      return alert('Please fill in your name.')
    }

    if (this.state.password.length < 5)
    {
      return alert('Password should be atleast 5 characters.')
    }

    this.props.onLoginFormSubmit(this.state.name, this.state.password)
  }

  render() {
    return(
      <form className="pure-form pure-form-stacked" onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" value={this.state.name} onChange={this.onNameChange.bind(this)} placeholder="Name" />
          <span className="pure-form-message">This is a required field.</span>

          <br />
          <label htmlFor="password">Password</label>
          <input id="password" type="password" value={this.state.password} placeholder="Password"  onChange={this.onPasswordChange.bind(this)} />
          <span className="pure-form-message">This is a required field.</span>

          <br />
          

         

          <button type="submit" className="pure-button pure-button-primary">Login</button>
        </fieldset>
      </form>
    )
  }
}

export default LoginForm
