import React, { Component } from 'react'

export class Ball extends Component {
  render() {
    return (
      <div className="column has-text-centered">
        <button className="ball">
          { this.props.colour }
        </button>
      </div>
    )
  }
}

export default Ball
