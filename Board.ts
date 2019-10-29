import {Card} from "./Card";

export class Board{
   table : Array<Card>;
   constructor(){
     this.table = new Array(9);
   }
   addCard(position : number, card : Card){
     this.table[position]=card;
   }

   getCard(position : number){
     return this.table[position].displayCard();
   }

   displayGraphicBoard(){
     var body = document.getElementById('tableTest');
     var tbl = document.createElement('table');
     tbl.align = "center";
     tbl.style.width = '3OOpx';
     tbl.setAttribute('border', '1');
     tbl.id = "gameTable";
     var tbdy = document.createElement('tbody');
     for (var i = 0; i < 3; i++) {
       var tr = document.createElement('tr');
       tr.style.height = '62px';
       for (var j = 0; j < 3; j++) {
           var td = document.createElement('td');
           td.style.width = '62px';
           td.classList.add("square" + ((j+i*3)+1));
           var img = document.createElement("img");
           tr.appendChild(td);
       }
       tbdy.appendChild(tr);
     }
     tbl.appendChild(tbdy);
     body.appendChild(tbl);
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
