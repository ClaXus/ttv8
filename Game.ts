import {Player} from "./Player";
import {Board} from "./Board";

export class Game{
  player1: Player;
  player2: Player;
  board : Board;
  timeByTurn : Number;
  timestampBegin : Number;
  timestampEnd : Number;
}
