var Game = /** @class */ (function () {
    function Game() {
    }
    return Game;
}());
var Player = /** @class */ (function () {
    function Player() {
    }
    return Player;
}());
var Deck = /** @class */ (function () {
    function Deck() {
    }
    return Deck;
}());
var Card = /** @class */ (function () {
    function Card(upV, rV, dV, lV) {
        this.upValue = upV;
        this.rightValue = rV;
        this.downValue = dV;
        this.leftValue = lV;
    }
    Card.prototype.displayCard = function () {
        return "" + this.upValue + "," + this.rightValue + "," + this.downValue + "," + this.leftValue;
    };
    return Card;
}());
var Board = /** @class */ (function () {
    function Board() {
        this.table = new Array(9);
    }
    Board.prototype.addCard = function (position, card) {
        this.table[position] = card;
    };
    Board.prototype.displpayBoard = function () {
        var strBoard = "";
        var i = 0;
        while (i < 3) {
            strBoard += ("[" + this.table[i].displayCard() + "]");
            i++;
        }
        strBoard += "\n";
        while (i < 6) {
            strBoard += ("[" + this.table[i].displayCard() + "]");
            i++;
        }
        strBoard += "\n";
        while (i < 9) {
            strBoard += ("[" + this.table[i].displayCard() + "]");
            i++;
        }
        return strBoard + "";
    };
    return Board;
}());
var boardGame = new Board();
var card1 = new Card(5, 5, 5, 6);
var card2 = new Card(7, 8, 7, 2);
var card3 = new Card(8, 1, 3, 3);
var card4 = new Card(4, 3, 9, 9);
var card5 = new Card(1, 2, 5, 2);
var card6 = new Card(9, 9, 4, 4);
var card7 = new Card(4, 4, 5, 5);
var card8 = new Card(3, 3, 7, 7);
var card9 = new Card(4, 7, 1, 1);
boardGame.addCard(0, card1);
boardGame.addCard(1, card2);
boardGame.addCard(2, card3);
boardGame.addCard(3, card4);
boardGame.addCard(4, card5);
boardGame.addCard(5, card6);
boardGame.addCard(6, card7);
boardGame.addCard(7, card8);
boardGame.addCard(8, card9);
document.body.innerText = boardGame.displpayBoard();
