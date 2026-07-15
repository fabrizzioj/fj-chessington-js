import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let currentSquare = board.findPiece(this);
        let row = currentSquare.row;
        let col = currentSquare.col;
        let moves = [];

        switch (this.player) {
            case 0: // White
                let wMove1 = Square.at(row + 1, col);

                if (board.getPiece(wMove1) === undefined) {
                    moves.push(wMove1);

                    if (row == 1) {
                        let wMove2 = Square.at(row + 2, col);

                        if (board.getPiece(wMove2) === undefined) {
                            moves.push(wMove2);
                        }
                    }
                }
                break;

            default: // Black
                let bMove1 = Square.at(row - 1, col);

                if (board.getPiece(bMove1) === undefined) {
                    moves.push(bMove1);

                    if (row == 6) {
                        let bMove2 = Square.at(row - 2, col);

                        if (board.getPiece(bMove2) === undefined) {
                            moves.push(bMove2);
                        }
                    }
                }
                break;
        }

        return moves;
    }
}
