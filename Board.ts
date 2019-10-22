import {Card} from "./Card";

export class Board{
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
