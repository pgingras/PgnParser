//Takes a move and a piece configuration and returns the new piece configuration
function parseMove(pieces, move, color) {
    var pieceType = move[0];
    var possibleMovedPieces = removeWrongColorAndTypePieces();
    var pieceNewPosition;
    var newPieces = [];

    newPieces = findFinalPosition();

    var movedPiecePos;

    switch (pieceType) {
        case "N":
            movedPiecePos = findMovedKnightPosition();

        default:

    }

    newPieces.forEach(function(piece){
        if(piece.position == movedPiecePos){
            piece.position = pieceNewPosition;
        }
    });

    return newPieces;



    function findMovedKnightPosition() {
        possibleMovedPieces = possibleMovedPieces.filter(function (piece) {
            return calculateSquareDistance(piece.position, pieceNewPosition) == 3;
        });

        if (possibleMovedPieces.length > 1) {
            if (isAChessLetter(move[1])) {
                possibleMovedPieces = possibleMovedPieces.filter(function (piece) {
                    piece.position.x == chessLetterToCoordinate(move[1]);
                });
            }
            else {
                possibleMovedPieces = possibleMovedPieces.filter(function (piece) {
                    piece.position.y == chessNumberToBoardCoordinate(move[1]);
                });
            }

        }
        return possibleMovedPieces[0].position;

    }

    function findFinalPosition() {
        if (isCapture(move)) {
            pieceNewPosition = chessCoordinatesToPosition(move.substring(move.indexOf("x") + 1, move.indexOf("x") + 3));
            return pieces.filter(function (piece) {
                return piece.position != pieceNewPosition;
            });
        }
        else {
            if (isTypeAPawn(pieceType)) {
                pieceNewPosition = chessCoordinatesToPosition(move.substring(0, 2));
            }
            else {
                move = move.replace("+", "").replace("#", "");
                pieceNewPosition = chessCoordinatesToPosition(move.substring(move.length - 2, move.length));
            }
            return pieces;
        }
    }

    function removeWrongColorAndTypePieces() {
        return pieces.filter(function (piece) {
            if (isTypeAPawn(pieceType)) {
                return piece.color == color && piece.isAPawn();
            } else {
                return piece.color == color && piece.type == pieceType;
            }
        });
    }
}


