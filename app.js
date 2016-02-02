var DARK_SQUARE = "#347FC4";
var LIGHT_SQUARE = "#F4EBD9";
var GRID_SIZE = 640;
var SQUARE_SIZE = GRID_SIZE / 8;
var PIECE_SIZE = SQUARE_SIZE * 0.8;

var WHITE_KING;
var WHITE_BISHOP;
var WHITE_KNIGHT;
var WHITE_PAWN;
var WHITE_QUEEN;
var WHITE_ROOK;
var BLACK_KING;
var BLACK_BISHOP;
var BLACK_KNIGHT;
var BLACK_PAWN;
var BLACK_QUEEN;
var BLACK_ROOK;

var pieces = [];
var PIECE_TYPES = ["B", "Q", "K", "N", "R", "p"];
var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];
var chessGame;

function preload() {
    WHITE_KING = loadImage("assets/image/whiteKing.png");
    BLACK_KING = loadImage("assets/image/blackKing.png");
    WHITE_BISHOP = loadImage("assets/image/whiteBishop.png");
    WHITE_KNIGHT = loadImage("assets/image/whiteKnight.png");
    WHITE_PAWN = loadImage("assets/image/whitePawn.png");
    WHITE_QUEEN = loadImage("assets/image/whiteQueen.png");
    WHITE_ROOK = loadImage("assets/image/whiteRook.png");
    BLACK_BISHOP = loadImage("assets/image/blackBishop.png");
    BLACK_KNIGHT = loadImage("assets/image/blackKnight.png");
    BLACK_PAWN = loadImage("assets/image/blackPawn.png");
    BLACK_QUEEN = loadImage("assets/image/blackQueen.png");
    BLACK_ROOK = loadImage("assets/image/blackRook.png");
}

function setup() {
    createCanvas(800, 800);

    drawGrid(GRID_SIZE, 0, 0);
    drawGridLetters();
    drawGridNumbers();
    createStartingPosition();
    drawPosition(pieces);
    createChessGame();


}

function createChessGame(){
    chessGame = new ChessGame(new Pgn(example), pieces);

}

function keyReleased() {
    if(key == "'"){
        pieces = chessGame.nextPosition(pieces);
        drawPosition(pieces);
    }
    return false; // prevent any default behavior
}


function draw() {

}

function drawSquare(color, x, y, size) {
    fill(color);
    rect(x, y, size, size);
}

function drawGrid(gridSize, x, y) {
    noStroke();

    var initialX = x;
    for (var i = 0; i < 8; i++) {

        for (var j = 0; j < 8; j++) {
            if ((i + j) % 2 == 1) {
                drawSquare(DARK_SQUARE, x, y, gridSize / 8);
            }
            else {
                drawSquare(LIGHT_SQUARE, x, y, gridSize / 8);
            }
            x += gridSize / 8;
        }
        y += gridSize / 8;
        x = initialX;

    }
}

function drawGridLetters() {
    fill(DARK_SQUARE);
    for (var i = 0; i < 8; i++) {
        text(LETTERS[i], i * SQUARE_SIZE + SQUARE_SIZE / 2, GRID_SIZE + 20);
    }
}
function drawGridNumbers() {
    fill(DARK_SQUARE);
    for (var i = 8; i > 0; i--) {
        text(8 - i + 1, GRID_SIZE + 10, (i - 1) * SQUARE_SIZE + SQUARE_SIZE / 2);
    }
}

function drawPiece(col, line, pieceType, color) {
    var x = col * (GRID_SIZE / 8) + SQUARE_SIZE * 0.1;
    var y = line * (GRID_SIZE / 8) + SQUARE_SIZE * 0.1;
    switch (pieceType) {
        case "N":
            drawKnight(x, y, color);
            break;
        case "K":
            drawKing(x, y, color);
            break;
        case "R":
            drawRook(x, y, color);
            break;
        case "Q":
            drawQueen(x, y, color);
            break;
        case "B":
            drawBishop(x, y, color);
            break;
        default:
            drawPawn(x, y, color);
            break;
    }
}

function drawBishop(x, y, color) {
    if (color == 0) {
        image(BLACK_BISHOP, x, y, PIECE_SIZE, PIECE_SIZE);
    }
    else {
        image(WHITE_BISHOP, x, y, PIECE_SIZE, PIECE_SIZE);
    }
}

function drawPawn(x, y, color) {
    if (color == 0) {
        image(BLACK_PAWN, x, y, PIECE_SIZE, PIECE_SIZE);
    }
    else {
        image(WHITE_PAWN, x, y, PIECE_SIZE, PIECE_SIZE);
    }
}

function drawQueen(x, y, color) {
    if (color == 0) {
        image(BLACK_QUEEN, x, y, PIECE_SIZE, PIECE_SIZE);
    }
    else {
        image(WHITE_QUEEN, x, y, PIECE_SIZE, PIECE_SIZE);
    }
}
function drawRook(x, y, color) {
    if (color == 0) {
        image(BLACK_ROOK, x, y, PIECE_SIZE, PIECE_SIZE);
    }
    else {
        image(WHITE_ROOK, x, y, PIECE_SIZE, PIECE_SIZE);
    }
}
function drawKnight(x, y, color) {
    if (color == 0) {
        image(BLACK_KNIGHT, x, y, PIECE_SIZE, PIECE_SIZE);
    }
    else {
        image(WHITE_KNIGHT, x, y, PIECE_SIZE, PIECE_SIZE);
    }
}

function drawKing(x, y, color) {
    if (color == 0) {
        image(BLACK_KING, x, y, PIECE_SIZE, PIECE_SIZE);
    }
    else {
        image(WHITE_KING, x, y, PIECE_SIZE, PIECE_SIZE);
    }
}

function createStartingPosition() {
    pieces.push(new Piece("K", 255, {x: 4, y: 7}));
    pieces.push(new Piece("K", 0, {x: 4, y: 0}));
    pieces.push(new Piece("Q", 0, {x: 3, y: 0}));
    pieces.push(new Piece("Q", 255, {x: 3, y: 7}));
    pieces.push(new Piece("B", 0, {x: 2, y: 0}));
    pieces.push(new Piece("B", 255, {x: 2, y: 7}));
    pieces.push(new Piece("B", 0, {x: 5, y: 0}));
    pieces.push(new Piece("B", 255, {x: 5, y: 7}));
    pieces.push(new Piece("R", 0, {x: 0, y: 0}));
    pieces.push(new Piece("R", 255, {x: 7, y: 7}));
    pieces.push(new Piece("R", 0, {x: 7, y: 0}));
    pieces.push(new Piece("R", 255, {x: 0, y: 7}));
    pieces.push(new Piece("N", 0, {x: 1, y: 0}));
    pieces.push(new Piece("N", 255, {x: 6, y: 7}));
    pieces.push(new Piece("N", 0, {x: 6, y: 0}));
    pieces.push(new Piece("N", 255, {x: 1, y: 7}));
    pieces.push(new Piece("p", 0, {x: 0, y: 1}));
    pieces.push(new Piece("p", 0, {x: 1, y: 1}));
    pieces.push(new Piece("p", 0, {x: 2, y: 1}));
    pieces.push(new Piece("p", 0, {x: 3, y: 1}));
    pieces.push(new Piece("p", 0, {x: 4, y: 1}));
    pieces.push(new Piece("p", 0, {x: 5, y: 1}));
    pieces.push(new Piece("p", 0, {x: 6, y: 1}));
    pieces.push(new Piece("p", 0, {x: 7, y: 1}));
    pieces.push(new Piece("p", 255, {x: 0, y: 6}));
    pieces.push(new Piece("p", 255, {x: 1, y: 6}));
    pieces.push(new Piece("p", 255, {x: 2, y: 6}));
    pieces.push(new Piece("p", 255, {x: 3, y: 6}));
    pieces.push(new Piece("p", 255, {x: 4, y: 6}));
    pieces.push(new Piece("p", 255, {x: 5, y: 6}));
    pieces.push(new Piece("p", 255, {x: 6, y: 6}));
    pieces.push(new Piece("p", 255, {x: 7, y: 6}));
}

function drawPosition(pieces) {
    drawGrid(GRID_SIZE, 0, 0);
    pieces.forEach(function (piece) {
        drawPiece(piece.position.x, piece.position.y, piece.type, piece.color);
    })
}

