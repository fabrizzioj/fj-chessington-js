import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class King extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let row = board.findPiece(this).row
        let col = board.findPiece(this).col
        let moves = [];

        let verticalIncrements = [-1, 0, 1]
        let horizontalIncrements = [-1, 0, 1]

        for (let vIncrement of verticalIncrements)
            for (let hIncrement of horizontalIncrements) {
                let newRow = row + vIncrement;
                let newCol = col + hIncrement;

                if (hIncrement != 0 || vIncrement != 0)
                    if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7)
                        moves.push(Square.at(newRow, newCol));
            }

        return moves;
    }
}
