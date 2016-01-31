var DARK_SQUARE = "#0066CC";
var LIGHT_SQUARE = "#F4EBD9";
var CONTOUR = "#91A5DB";
var GRID_SIZE = 640;
var SQUARE_SIZE = GRID_SIZE / 8;

var WHITE_KING;
var PIECE_TYPES = ["B", "Q", "K", "N", "R", "p"];
var LETTERS = ["A", "B", "C", "D", "E", "F", "G", "H"];

function preload(){
    WHITE_KING = loadImage("assets/image/whiteKing.png");
}

function setup() {
    createCanvas(800, 800);

    drawGrid(GRID_SIZE, 0, 0);
    drawGridLetters();
    drawGridNumbers();
    drawBenkoPosition();


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
    var x = col * (GRID_SIZE / 8);
    var y = line * (GRID_SIZE / 8);
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
    fill(color);
    stroke(CONTOUR);
    strokeWeight(2);
    beginShape();
    vertex(x + SQUARE_SIZE / 3 * 2, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 3, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 35, y + 3 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 45, y + 1 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 55, y + 1 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 65, y + 3 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 3 * 2, y + 7 / 8 * SQUARE_SIZE);
    endShape();

}

function drawPawn(x, y, color) {
    fill(color);
    stroke(CONTOUR);
    strokeWeight(2);
    beginShape();
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 3, y + 7 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 3 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 3 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 7, y + 7 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);

    endShape();
}

function drawQueen(x, y, color) {
    fill(color);
    stroke(CONTOUR);
    strokeWeight(2);
    beginShape();
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 3, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 31, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 38, y + 4 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 44, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 50, y + 4 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 56, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 62, y + 4 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 69, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 75, y + 4 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 3 * 2, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);
    endShape();
}
function drawRook(x, y, color) {
    fill(color);
    stroke(CONTOUR);
    strokeWeight(2);
    beginShape();
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 3, y + 5 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 3, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 1 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 3 / 4, y + 1 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 3 / 4, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 7 / 10, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 7 / 10, y + 5 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 3 / 4, y + 6 / 8 * SQUARE_SIZE);
    endShape();
}
function drawKnight(x, y, color) {
    fill(color);
    stroke(CONTOUR);
    strokeWeight(2);

    beginShape();
    vertex(x + SQUARE_SIZE / 10 * 7, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 3 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 5, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 5, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 45, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 40, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 40, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 35, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 10, y + 5 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 7, y + 6 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 10, y + 7 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 15, y + 7 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 35, y + 13 / 32 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 40, y + 5 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 100 * 20, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 7, y + 7 / 8 * SQUARE_SIZE);
    endShape();
    fill(255);
    ellipse(x + SQUARE_SIZE / 3, y + SQUARE_SIZE / 100 * 30, 8, 8);
}

function drawKing(x, y, color) {
    //image(WHITE_KING,x,y, SQUARE_SIZE, SQUARE_SIZE);
    fill(color);
    stroke(CONTOUR);
    strokeWeight(2);
    beginShape();
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 7 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 4, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 45 / 100, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 45 / 100, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 35 / 100, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 35 / 100, y + 2 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 45 / 100, y + 2 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 45 / 100, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 55 / 100, y + 1 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 55 / 100, y + 2 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 65 / 100, y + 2 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 65 / 100, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 55 / 100, y + 3 / 16 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE * 55 / 100, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 2 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 4 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 10 * 6, y + 6 / 8 * SQUARE_SIZE);
    vertex(x + SQUARE_SIZE / 4 * 3, y + 6 / 8 * SQUARE_SIZE);
    endShape();
}

function drawBenkoPosition() {
    drawPiece(4, 7, "K", 255);
    drawPiece(4, 0, "K", 0);
    drawPiece(3, 7, "Q", 255);
    drawPiece(3, 0, "Q", 0);
    drawPiece(0, 7, "R", 255);
    drawPiece(7, 7, "R", 255);
    drawPiece(0, 0, "R", 0);
    drawPiece(7, 0, "R", 0);
    drawPiece(1, 0, "N", 0);
    drawPiece(1, 7, "N", 255);
    drawPiece(5, 2, "N", 0);
    drawPiece(6, 7, "N", 255);
    drawPiece(2, 7, "B", 255);
    drawPiece(5, 7, "B", 255);
    drawPiece(2, 0, "B", 0);
    drawPiece(5, 0, "B", 0);
    drawPiece(2, 4, "p", 255);
    drawPiece(3, 3, "p", 255);
    drawPiece(2, 3, "p", 0);
    drawPiece(1, 3, "p", 0);
    drawPiece(0, 6, "p", 255);
    drawPiece(1, 6, "p", 255);
    drawPiece(4, 6, "p", 255);
    drawPiece(5, 6, "p", 255);
    drawPiece(6, 6, "p", 255);
    drawPiece(7, 6, "p", 255);
    drawPiece(3, 1, "p", 0);
    drawPiece(4, 1, "p", 0);
    drawPiece(5, 1, "p", 0);
    drawPiece(6, 1, "p", 0);
    drawPiece(7, 1, "p", 0);
    drawPiece(0, 1, "p", 0);
}