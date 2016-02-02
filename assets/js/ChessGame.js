function ChessGame(pgn, pieces) {
    this.pgn = pgn;
    this.moves = pgn.getMoves();
    this.pieces = pieces;

    var self = this;
    var moveIndex = 0;
    var gamePositions = [pieces];
    //parseGame();

    this.nextPosition = function () {
        moveIndex++;
        return gamePositions[moveIndex];
    };

    function parseGame() {
        for (var i = 0; i < self.moves.length; i++) {
            console.log(i);
            if (i % 2 == 0) {
                gamePositions.push(parseMove(gamePositions[i], self.moves[i], 255));
            }
            else {
                gamePositions.push(parseMove(gamePositions[i], self.moves[i], 0));
            }

        }
    }
}