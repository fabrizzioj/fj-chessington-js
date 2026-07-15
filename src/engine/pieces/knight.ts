import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Knight extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let row = board.findPiece(this).row
        let col = board.findPiece(this).col
        let moves = [];

        let incremets = [[1, 2], [1, -2], [2, 1], [2, -1], [-1, 2], [-1, -2], [-2, 1], [-2, -1]];
        for (let incremet of incremets) {
            let newRow = row + incremet[0];
            let newCol = col + incremet[1];

            if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7)
                moves.push(Square.at(newRow, newCol));
        }

        return moves;
    }
}
