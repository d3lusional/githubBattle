import { GET_GIT_USER, BATTLE_RESULT } from "./actions"


class BattleResults {
    constructor(
        winner,
        player1,
        player1Score,
        player2,
        player2Score,
    ) {
        this.winner = winner;
        this.player1 =player1;
        this.player1Score = player1Score;
        this.player2 = player2;
        this.player2Score = player2Score;
    }  
}

const initialState = {
    player1: undefined,
    player1Score: undefined,
    player2: undefined,
    player2Score: undefined,
    battles: [ ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GIT_USER:
             return {...state, [action.payload.player]:action.payload.data}
        case BATTLE_RESULT:
            console.log(action.payload)
             return {...state, battle: { 
                 players1: action.player1,
                 players2: action.player2,
            }}
        default:
            return state;
    }
}

export default reducer;