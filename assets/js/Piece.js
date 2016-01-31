function Piece(type, color, position) {
    this.type = type;
    this.color = color;
    this.position = position;

    this.isAPawn = function () {
        return type.toUpperCase() != type;
    };

}
