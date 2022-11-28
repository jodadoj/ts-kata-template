import calcWinState from "./calcWinState";
import { BoardState } from "./calcWinState"
test("Takes in an array of string representing a tictactoe "
+ "game state and says if the game is over", () => {

    const board1:BoardState = [
        'X','X','X',
        '', '', '',
        '', '', ''
    ];

    const board2:BoardState = [
        'X', 'O', 'O',
        'X', '', 'O',
        'X', 'O', ''
    ];

    const board3:BoardState = [
        'X','X','O',
        '', '', '',
        '', '', ''
    ];

    const board4:BoardState = [
        'X', 'X', 'O',
        'O', 'O', 'X',
        'X', 'O', 'X'
    ];

    const board5:BoardState = [
        'X', 'O', 'O',
        'O', 'X', 'X',
        'X', 'O', 'X'
    ];


    expect(calcWinState(board1)).toEqual({state:"won", winner: 'X'});

    expect(calcWinState(board2)).toEqual({state:"won", winner: 'X'});

    expect(calcWinState(board3)).toEqual({ state: "not finished"});

    expect(calcWinState(board4)).toEqual({state: "draw"});

    expect(calcWinState(board5)).toEqual({state:"won", winner: 'X'});
});