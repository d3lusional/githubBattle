import axios from 'axios'
export const GET_GIT_USER = "GET_GIT_USER"
export const BATTLE_RESULT = "BATTLE_RESULT"


export const fetchGitHubUser = (player, gitUser) => {
  return (dispatch, getState, url) => {
    axios.get(`${url}${gitUser}`)
        .then(({ data }) => {
        console.log(data)
        console.log(player)
          dispatch({type: GET_GIT_USER, payload: {player: player, data: data}})
    })
  }
}
export function battleResult(player1, player2){
    return { type: BATTLE_RESULT, player1, player2 }
}
