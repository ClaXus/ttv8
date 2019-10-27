import {Player} from "./Player";
import {Board} from "./Board";
import {Deck} from "./Deck";
import {Rule} from "./Rule";

function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

export class Game{
  player1: Player;
  player2: Player;
  board : Board;
  turn : Number;
  timeInTurn : number;
  deckPlayer1 : Deck;
  deckPlayer2 : Deck;
  timeByTurn : number;
  timestampBegin : Number;
  timestampEnd : Number;
  rules : Array<Rule>;

  constructor(player1 : Player, player2 : Player, board : Board, timeByTurn : number, deckPlayer1 : Deck, deckPlayer2 : Deck, rules : Array<Rule>){
    this.player1 = player1;
    this.player2 = player2;
    this.board = new Board();
    this.turn = 0;
    this.timeInTurn = timeByTurn;
    this.deckPlayer1 = deckPlayer1;
    this.deckPlayer2 = deckPlayer2;
    this.timeByTurn = timeByTurn;
    this.rules = rules;
  }

  putCard(position : number, player : Player, currentTurn : number){
    // TODO
    this.turn = currentTurn+1;
  }





}
