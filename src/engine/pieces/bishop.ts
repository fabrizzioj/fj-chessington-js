import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let row = board.findPiece(this).row
        let col = board.findPiece(this).col
        let moves = [];

        for (let i = -7; i <= 7; i++) {
            let newRow = row + i;
            let newCol = col + i;
            if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7 && i != 0)
                moves.push(Square.at(newRow, newCol));
        }

        for (let i = -7; i <= 7; i++) {
            let newRow = row + i;
            let newCol = col - i;
            if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7 && i != 0)
                moves.push(Square.at(newRow, newCol));
        }

        return moves;
    }
}
