import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board){
        let row = (this.player == 0) ? board.findPiece(this).row + 1 : board.findPiece(this).row - 1;
        let col = board.findPiece(this).col;
        return Square.at(row, board.findPiece(this).col);
    }
}
