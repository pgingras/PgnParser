var example = "1. f4 d5 2. e3 c6 3. d3 Nf6 4. b3 h6 5. Bb2 Bf5 6. h3 e6 7. g4 Bh7 8. h4 Qb6 9. Qe2 Nbd7 10." +
    " a3 O-O-O 11. Nd2 c5 12. Bg2 Kb8 13. Nb1 Be7 14. g5 hxg5 15. hxg5 Ne8 16. Nc3 f6 17. g6 Bxg6 18. Rxh8 " +
    "c4 19. dxc4 dxc4 20. Na4 Qa5+ 21. Bc3 Qf5 22. Rc1 Bxa3 23. Rd1 cxb3 24. Qb5 Qxb5 25. cxb3 Bb4 26. Bxb4" +
    " Qxb4+ 27. Rd2 Qxb3 28. Nb2 Kc7 29. Nf3 Nd6 30. Rxd8 Kxd8 31. Nd4 Qb4 32. Nxe6+ Ke7 33. Nxg7 Ne4 34. Bxe4" +
    " Bxe4 35. f5 Nc5 36. Nd1 Nb3 37. Nf2 Qxd2+ 38. Kf1 Qxe3 39. Nxe4 Qxe4 40. Kf2 Qf4+ 41. Ke2 Qg4+ 42. Kd3 " +
    "Qxg7 43. Kc4 Nd4 44. Kxd4 Qg4+ 45. Kd5 Qxf5+ 46. Kd4 Qe6 47. Kc5 Qc6+ 48. Kd4 Ke6 49. Kd3 a6 50. Kd4 a5 " +
    "51. Kd3 a4 52. Kd4 a3 53. Kd3 Qc5 54. Kd2 a2 55. Kd3 a1=Q 56. Kd2 Qa2+ 57. Kd3 Qb4 58. Ke3" +
    " Qaa3+ 59. Ke2 Qbb2+ 60. Kd1 Qaa1#";

function Pgn(pgn) {
    this.pgn = pgn;
    var moves;

    this.getMoves = function () {
        moves = pgn.split(" ").filter(function (move) {
            if (move.length == 0) {
                return false;
            }
            return /^[a-zA-Z()]+$/.test(move[0]);

        });
        return moves;
    };


}

