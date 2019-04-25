import React, { Component } from 'react'
import CreateCarContainer from '../../ui/createcar/CreateCarContainer'

class Car extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1">
            <h1>Create Car</h1>
            
            <CreateCarContainer />
          </div>
        </div>
      </main>
    )
  }
}

export default Car
