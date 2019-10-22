class Game{
  player1: Player;
  player2: Player;
  board : Board;
  timeByTurn : Number;
  timestampBegin : Number;
  timestampEnd : Number;
}

class Player{
  pseudo : String;
  victories : Number;
  defeats : Number;
  draws : Number;
  deck : Deck;

}

class Deck{
  cards: Array<Card>;
}

class Card{
  upValue : Number;
  rightValue : Number;
  downValue : Number;
  leftValue : Number;
  cardImage : String;
  constructor(upV : Number, rV : Number, dV : Number, lV : Number){
    this.upValue = upV;
    this.rightValue=rV;
    this.downValue=dV;
    this.leftValue=lV;
  }
  displayCard(){
    return ""+this.upValue+","+this.rightValue+","+this.downValue+","+this.leftValue;
  }

}

class Board{
   table : Array<Card>;
   constructor(){
     this.table = new Array(9);
   }
   addCard(position : number, card : Card){
     this.table[position]=card;
   }

   displpayBoard(){
     var strBoard = "";
     var i = 0;
     while(i<3){
       strBoard+=("["+this.table[i].displayCard()+"]");
       i++;
     }
     strBoard+= "\n";
     while(i<6){
       strBoard+=("["+this.table[i].displayCard()+"]");
       i++;
     }
     strBoard+= "\n";
     while(i<9){
       strBoard+=("["+this.table[i].displayCard()+"]");
       i++;
     }
     return strBoard+"";
   }
}

let boardGame = new Board();

let card1 = new Card(5,5,5,6);
let card2 = new Card(7,8,7,2);
let card3 = new Card(8,1,3,3);
let card4 = new Card(4,3,9,9);
let card5 = new Card(1,2,5,2);
let card6 = new Card(9,9,4,4);
let card7 = new Card(4,4,5,5);
let card8 = new Card(3,3,7,7);
let card9 = new Card(4,7,1,1);


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
