import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Pawn extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board){
        switch(this.player){
            case 0:
                let wrow1 = board.findPiece(this).row + 1;
                let wrow2 = board.findPiece(this).row + 2;
                let wcol = board.findPiece(this).col;

                let wmove1 = Square.at(wrow1, wcol);
                let wmove2 = Square.at(wrow2, wcol);

                if(board.findPiece(this).row > 1)
                    return [wmove1]
                else if(board.findPiece(this).row == 1)
                    return [wmove1,wmove2]

                break;
            default:
                let brow1 = board.findPiece(this).row - 1;
                let brow2 = board.findPiece(this).row - 2;
                let bcol = board.findPiece(this).col;

                let bmove1 = Square.at(brow1, bcol);
                let bmove2 = Square.at(brow2, bcol);

                if(board.findPiece(this).row < 6)
                    return [bmove1]
                else if(board.findPiece(this).row == 6)
                    return [bmove1,bmove2]
                break;
        }
    }
}
