import React, { Component } from 'react'
import './ui-toolkit/css/nm-cx/main.css'
import { connect } from 'react-redux'
import { Navigation } from 'react-router'

class Results extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props)
    return (
      <div className="battleResults">
        <div className='card battleResultUser'>
          <h1>1st Place</h1>
          <p> user userScore</p>
          <h1>2st Place</h1>
          <p> user userScore</p>
        </div>
        <div className='card battleResultWinner'>

          <img src={this.props.battle.players1.avatar_url} alt='Avatar' />
          {/* <img src={this.props.battle.players1.avatar_url}/>> */}
          <p>{this.props.battle.players1.login}</p>
          <p>{this.props.battle.players1.score} </p>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    //   player1URL: state.battle.player1.avatar_url,
    //   player1Login: state.battle.player1.login,
    battle: state.battle
    //   player2URL: state.battle.player2.avatar_url,
    //   player2Login: state.battle.player2.login,
  }
}

export default connect(mapStateToProps)(Results)
