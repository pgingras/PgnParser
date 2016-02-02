var CHESS_LETTERS = ["a", "b", "c", "d", "e", "f", "g", "h"];
var NUMBERS = [7, 6, 5, 4, 3, 2, 1, 0];

function isTypeAPawn(pieceType) {
    return pieceType.toUpperCase() != pieceType;
}


//ex: a1 to {x:0,y:7}
function chessCoordinatesToPosition(chessCoordinates) {
    var x = chessLetterToCoordinate(chessCoordinates[0]);
    var y = chessNumberToBoardCoordinate(chessCoordinates[1]);
    return {x: x, y: y};
}

function chessLetterToCoordinate(letter) {
    return CHESS_LETTERS.indexOf(letter);
}

function chessNumberToBoardCoordinate(num) {
    return NUMBERS[parseInt(num) - 1];
}

function isCapture(move) {
    return move.indexOf("x") > -1;
}

function isAtKnightDistance(p1, p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y) == 3
        && Math.abs(p1.y - p2.y) != 3
        && Math.abs(p1.x - p2.x) != 3;
}
function isAChessLetter(char) {
    return CHESS_LETTERS.indexOf(char) != -1;
}

function isCastling(move) {
    return move[0] == 'O';
}