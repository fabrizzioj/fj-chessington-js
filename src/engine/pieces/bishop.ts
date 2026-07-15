import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from "../square";

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    // public getAvailableMoves(board: Board) {
    //     let row = board.findPiece(this).row
    //     let col = board.findPiece(this).col
    //     let moves = [];
    //
    //     for (let i = -7; i <= 7; i++) {
    //         let newRow = row + i;
    //         let newCol = col + i;
    //         if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7 && i != 0)
    //             moves.push(Square.at(newRow, newCol));
    //     }
    //
    //     for (let i = -7; i <= 7; i++) {
    //         let newRow = row + i;
    //         let newCol = col - i;
    //         if (newRow >= 0 && newRow <= 7 && newCol >= 0 && newCol <= 7 && i != 0)
    //             moves.push(Square.at(newRow, newCol));
    //     }
    //
    //     return moves;
    // }

    public getAvailableMoves(board: Board) {
        const currentSquare = board.findPiece(this);
        // TypeScript safety check: if the piece isn't on the board, return no moves
        if (!currentSquare) return [];

        let row = currentSquare.row;
        let col = currentSquare.col;
        let moves = [];

        const directions = [[1, 1], [1, -1], [-1, 1], [-1, -1]];

        for (const direction of directions) {
            let currentRow = row + direction[0];
            let currentCol = col + direction[1];

            while (currentRow >= 0 && currentRow <= 7 && currentCol >= 0 && currentCol <= 7) {
                let square = Square.at(currentRow, currentCol);
                let pieceInWay = board.getPiece(square);

                if (pieceInWay === undefined) {
                    moves.push(square);
                } else {
                    if (pieceInWay.player !== this.player) {
                        moves.push(square);
                    }
                    break;
                }

                currentRow += direction[0];
                currentCol += direction[1];
            }
        }

        return moves;
    }
}
