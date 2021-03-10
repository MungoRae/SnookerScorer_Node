import React, { Component } from 'react'

export class PlayerScore extends Component {
  render() {
    return (
      <div>
        <p>{ this.props.playerName } { this.props.score }</p>
      </div>
    )
  }
}

export default PlayerScore
