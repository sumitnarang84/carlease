import React, { Component } from 'react'

class SignUpForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      password: '',
      membershipType : ''
    }
  }

  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  onMembershipTypeChange(event) {
    this.setState({ membershipType: event.target.value })
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

    if (this.state.membershipType === '')
    {
      return alert('Please select membership type')
    }

    this.props.onSignUpFormSubmit(this.state.name, this.state.password, this.state.membershipType)
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
          <label htmlFor="membershipType">Membership Type</label>
          <select id="membershipType" name="membershipType" value={this.state.membershipType} onChange={this.onMembershipTypeChange.bind(this)} >
          <option value="">Select</option>
          <option value="Regulator">Regulator</option>
          <option value="Manufacturer">Manufacturer</option>
          <option value="Dealership">Dealership</option>
          <option value="Lease Company">Lease Company</option>
          <option value="Leasee">Leasee</option>
          <option value="Scrap Merchant">Scrap Merchant</option>
          </select>
          <span className="pure-form-message">This is a required field.</span>

         

          <button type="submit" className="pure-button pure-button-primary">Sign Up</button>
        </fieldset>
      </form>
    )
  }
}

export default SignUpForm
