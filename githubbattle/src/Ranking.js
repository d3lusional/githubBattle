import { connect } from 'react-redux'
import { Navigation } from 'react-router'
import React, { Component } from 'react'
import './ui-toolkit/css/nm-cx/main.css'


class Ranking extends Component {
  constructor (props) {
    super(props)
  }

  render () {
      console.log(this.props)
    return (
      <div>
        <h2>Rankings</h2>
        <div>
          <img src={this.props.player1URL} alt='Avatar' />
          <p>{this.props.player1Login}</p>
          <p>{this.props.player1Score}</p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
    return {
    //   player1URL: state.battle.player1.avatar_url,
    //   player1Login: state.battle.player1.login,
      player1: state.battle.player1,
    //   player2URL: state.battle.player2.avatar_url,
    //   player2Login: state.battle.player2.login,
      player2Score: state.battle.player2,
    }
  }

export default connect(null,mapStateToProps)(Ranking);