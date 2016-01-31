
function ChessGame(pgn, pieces){
    this.pgn = pgn;
    this.moves = pgn.getMoves();
    this.moveIndex = 0;
    this.pieces = pieces;
}