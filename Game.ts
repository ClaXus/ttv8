import {Player} from "./Player";
import {Board} from "./Board";
import {Deck} from "./Deck";
import {Rule} from "./Rule";
import {Card} from "./Card";

export class Game{
  player1: Player;
  player2: Player;
  board : Board;
  turn : number;
  timeInTurn : number;
  deckPlayer1 : Deck;
  deckPlayer2 : Deck;
  timeByTurn : number;
  timestampBegin : Number;
  timestampEnd : Number;
  rules : Array<Rule>;

  constructor(player1 : Player, player2 : Player, timeByTurn : number, deckPlayer1 : Deck, deckPlayer2 : Deck, rules : Array<Rule>){
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.turn = 1;
    this.timeInTurn = timeByTurn;
    this.deckPlayer1 = deckPlayer1;
    this.deckPlayer2 = deckPlayer2;
    this.timeByTurn = timeByTurn;
    this.rules = rules;
  }

  putCard(position : number, card : Card, player : Player){
    let playerHaveToPlay;
    if(this.turn%2!=0){
      playerHaveToPlay = this.player1;
      this.board.statusTable[position] = 1;
    }
    else{
      playerHaveToPlay = this.player2;
      this.board.statusTable[position] = 2;
    }
    if(playerHaveToPlay==player){
      this.evalPosition(position-1, card);
      this.board.addCard(position-1, card);
      this.turn+=1;
      return true;
    }

    this.board.statusTable[position] = 0;
    return false;
  }

  evalPosition(pos : number, card : Card){
    let playerStatus;
    if(this.turn%2!=0){
      playerStatus = 1;
    }
    else{
      playerStatus = 2;
    }

    // UP
    if(((pos+1)-3)>0){
      if(this.board.table[pos-3]!=undefined){
        if(card.upValue>this.board.table[pos-3].downValue){
          this.board.statusTable[pos-2] = playerStatus;
        }
      }
    }
    // Left
    if(((pos+1)%3)!=1){
      if(this.board.table[pos-1]!=undefined){
        if(card.leftValue>this.board.table[pos-1].rightValue){
          this.board.statusTable[pos] = playerStatus;
        }
      }
    }
    // Right
    if(((pos+1)%3)!=0){
      if(this.board.table[pos+1]!=undefined){
        if(card.rightValue>this.board.table[pos+1].leftValue){
          this.board.statusTable[pos+2] = playerStatus;
        }
      }
    }
    // Down
    if((pos-3)<5){
      if(this.board.table[pos+3]!=undefined){
          if(card.downValue> this.board.table[pos+3].upValue){
            this.board.statusTable[pos+4] = playerStatus;
          }
      }
    }
  }






}
