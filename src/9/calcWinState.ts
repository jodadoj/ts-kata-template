type Player = "X" | "O"

type PosState = Player | ""

export type BoardState = [
    PosState,PosState,PosState,
    PosState,PosState,PosState,
    PosState,PosState,PosState
]

//type WinState = "draw" | "X won" | "O won" | "not finished"

type WinState = {state: "draw"} | { state: "not finished"} | {state:"won", winner:Player}

function calcWinState(board:BoardState): WinState {
    for (let check = 0; check<3; check++){

        let offset = (check*3); //0,3,6


        if (board[offset] === board[offset+1] && board[offset]!==''){ //check horizontal wins
            if (board[offset+1] === board[offset+2]){
                const element:PosState = board[offset];
                if (element=='X'||element=='O'){
                    const player = element;
                    const winner:WinState={state:"won", winner: player};
                    return winner;
                }
            }
        }
        if (board[check] == board[check+3]){ //checks vertical wins
            if (board[check+3] === board[check+6]){
                const element:PosState = board[check];
                if (element=='X'||element=='O'){
                    const player = element;
                    const winner:WinState={state:"won", winner: player};
                    return winner;
                }
            }
        }
    }

    if (board[0] == board[4]){ //descending diagonal wins
        if (board[4] === board[8]){
            const element:PosState = board[0];
            if (element=='X'||element=='O'){
                const player = element;
                const winner:WinState={state:"won", winner: player};
                return winner;
            }
        }
    } 

    if (board[6] == board[4]){ //ascending diagonal wins
        if (board[4] === board[2]){
            if (board[6]=='X'||board[6]=='O'){
                const element:PosState = board[6];
                if (element=='X'||element=='O'){
                    const player = element;
                    const winner:WinState={state:"won", winner: player};
                    return winner;
                }
            }
        }
    }

    if (board[0] && board[1] && board[2] 
        && board[3] && board[4] && board[5] 
        && board[6] && board[7] && board[8]){ //full gameboard
        return {state: "draw"};
    }

    return { state: "not finished"}; //if none are true
}

export default calcWinState;