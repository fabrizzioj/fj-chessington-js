import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Rook extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let row = board.findPiece(this).row
        let col = board.findPiece(this).col
        let moves = [];

        for (let i = 0; i <= 7; i++)
            if (i != col) {
                let newPos = Square.at(row, i);
                if (board.getPiece(newPos) === undefined)
                    moves.push(newPos);
                else break;
            }

        for (let i = 0; i <= 7; i++)
            if (i != row) {
                let newPos = Square.at(i, col);
                if (board.getPiece(newPos) === undefined)
                    moves.push(newPos);
                else break;
            }

        return moves;
    }
}
