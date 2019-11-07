import {Card} from "./Card";

export class Board{
   table : Array<Card>;
   statusTable : Array<number>;
   constructor(){
     this.table = new Array<Card>(9);
     this.statusTable = new Array<number>(9);
   }
   addCard(position : number, card : Card){
     this.table[position]=card;
   }

   getCard(position : number){
     return this.table[position].displayCard();
   }
}
