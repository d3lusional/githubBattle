import React, { Component } from 'react'
import './ui-toolkit/css/nm-cx/main.css'
import { connect } from 'react-redux'
import { Navigation } from 'react-router'
import { fetchGitHubUser, battleResult } from './state/actions'

class Battle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      player1: '',
    //   player1GitHubScore : 0,
      player2: '',
      player2GitHubScore : 0,
    }
    this.handleP1Submit = this.handleP1Submit.bind(this)
    this.handleP2Submit = this.handleP2Submit.bind(this)
    this.handleBattle = this.handleBattle.bind(this)
  }

  handlePlayer1Change = e => {
    //   console.log(this.state.player1)
    this.setState({ player1: e.target.value })
  }

  handlePlayer2Change = e => {
    //   console.log(this.state.player1)
    this.setState({ player2: e.target.value })
  }

  handleP1Submit (e) {
    e.preventDefault
    console.log(this.props)
    //   console.log(this.state.player1)
    this.props.getGitUser(e.target.name, this.state.player1)
  }
  handleP2Submit (e) {
    //const { public_repos, followers} = this.props.player2
    e.preventDefault
    console.log(this.props)
    //   console.log(this.state.player1)
    this.props.getGitUser(e.target.name, this.state.player2)

  }

  handleBattle(e){
        
        //console.log(this.props.player1.public_repos)
        let p1Repos = this.props.player1.public_repos 
        let p1Followers = this.props.player1.followers
        let p1GitHubScore = (p1Repos + p1Followers) * 12
        
        let p2Repos = this.props.player2.public_repos 
        let p2Followers = this.props.player2.followers
        let p2GitHubScore = (p2Repos + p2Followers) * 12

        const { player1, player2 } = this.props
       
        const p1 = { ... player1, score: p1GitHubScore}
        const p2 = { ... player2, score: p2GitHubScore}

        this.props.battleResult(p1,p2)
        // this.props.player1Score(p1GitHubScore)
        console.log("Player 1 :" +p1GitHubScore)
        console.log("Player 2 :" +p2GitHubScore)

        // console.log(this.props.player2)
        this.props.history.push("/Results")
        console.log(this.props.battleResults)

  }

  render () {
    return (
        <div className="card">
            
      <div className='battleCard'>
        {/* RENDER FOR NO SELECTED USER */}
        {this.props.player1 === undefined &&
          <div className='battleBorder'>
            <h2>Player 1</h2>
            <p>GitHub Username</p>
            <input
              name='player1'
              value={this.state.player1}
              onChange={this.handlePlayer1Change}
              type='text'
              />
            <button name='player1' onClick={this.handleP1Submit}>Get User</button>
          </div>}

        {/* RENDER FOR USER SELECTED */}
        {this.props.player1 != undefined &&
          <div className='battleBorder'>
            <img src={this.props.player1.avatar_url} />
            <h2>{this.props.player1.login}</h2>
          </div>}
        {/* RENDER FOR NO SELECTED USER */}
        {this.props.player2 === undefined &&
          <div className='battleBorder'>
            <h2>Player 2</h2>
            <p>GitHub Username</p>
            <input
              name='player2'
              value={this.state.player2}
              onChange={this.handlePlayer2Change}
              type='text'
              />
            <button name='player2' onClick={this.handleP2Submit}>Get User</button>
          </div>}

        {/* RENDER FOR USER SELECTED */}
        {this.props.player2 !== undefined &&
          <div className='battleBorder'>
            <img src={this.props.player2.avatar_url} />
            <h2>{this.props.player2.login}</h2>
          </div>}

      </div>
          {/* RENDER BATTLE BUTTON */}
          {this.props.player1 !== undefined && this.props.player2 != undefined &&
            <div className="battleButton">
            <button onClick={this.handleBattle}>BATTLE</button>
            </div>}
            </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    player1: state.player1,
    //player1Score: state.player1Score,
    player2: state.player2,
    //player2Score: state.player2Score,

  }
}

const mapDispatchToProps = dispatch => {
  return {
    getGitUser: (player, gitUser) => dispatch(fetchGitHubUser(player, gitUser)),
    battleResult: (p1GitHubScore,p2GitHubScore) => dispatch(battleResult(p1GitHubScore,p2GitHubScore))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Battle)
