import { Board } from "./Board";
import { Card  } from "./Card";
import { Player  } from "./Player";

function loadJSON(callback) {
   var xobj = new XMLHttpRequest();
   xobj.overrideMimeType("application/json");
   xobj.open('GET', ('./cards.json'), true); // Replace 'my_data' with the path to your file
   xobj.onreadystatechange = function () {
         if (xobj.readyState == 4) {
           // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
           callback(xobj.responseText);
         }
   };
   xobj.send(null);
}

export class tt{
  selectCard(x){
    this.selectedCard = x;
    //alert(x);
  }
  putCard(selectedSquare){
    selectedSquare.appendChild(this.selectedCard);
    this.selectedCard = null;
  }

  tableCreate() {
    var x = this;
    var body = document.getElementById('game');
    var tbl = document.createElement('table');
    tbl.align = "center";
    tbl.style.width = '3OOpx';
    tbl.setAttribute('border', '1');
    var tbdy = document.createElement('tbody');
    for (var i = 0; i < 3; i++) {
      var tr = document.createElement('tr');
      tr.style.height = '62px';
      for (var j = 0; j < 3; j++) {
          var td = document.createElement('td');
          td.style.width = '62px';
          td.classList.add("square" + ((j+i*3)+1));
          /*td.addEventListener("click", function(){
            putCard(x, td);
          }.bind(null,td));*/
          var img = document.createElement("img");
          //img.src = "./Joliflor.png"
          //td.appendChild(img);
          tr.appendChild(td);
      }
      tbdy.appendChild(tr);
    }
    tbl.appendChild(tbdy);
    body.appendChild(tbl)

    // iterate to add the possibility to put on square
    for(var j=1; j<10; j++){
      let selectedSquare = document.getElementsByClassName("square" + j)[0];
      selectedSquare.addEventListener('click', function(){
        x.putCard(selectedSquare);
      },false);
    }

    var jsonParse = JSON.parse(this.cardData);

    for(var j=0;j<jsonParse.length;j++){
          let img = document.createElement("img");
          img.src = jsonParse[j].link;
          img.classList.add("card" + i);
          img.addEventListener("click", function(){
            x.selectCard(img)
          }, false);
          body.appendChild(img);
    }


  }

  sessionPlayer : string;
  playerSession : Player;
  selectedCard : HTMLImageElement;
  cardData : string;

  public run(jsonFile) {
    this.cardData = jsonFile;
    let boardGame = new Board();

    let card1 = new Card(5, 5, 5, 6);
    let card2 = new Card(7, 8, 7, 2);
    let card3 = new Card(8, 1, 3, 3);
    let card4 = new Card(4, 3, 9, 9);
    let card5 = new Card(1, 2, 5, 2);
    let card6 = new Card(9, 9, 4, 4);
    let card7 = new Card(4, 4, 5, 5);
    let card8 = new Card(3, 3, 7, 7);
    let card9 = new Card(4, 7, 1, 1);

    boardGame.addCard(0, card1);
    boardGame.addCard(1, card2);
    boardGame.addCard(2, card3);
    boardGame.addCard(3, card4);
    boardGame.addCard(4, card5);
    boardGame.addCard(5, card6);
    boardGame.addCard(6, card7);
    boardGame.addCard(7, card8);
    boardGame.addCard(8, card9);
    //var textnode = document.createTextNode(boardGame.displpayBoard());
    //document.getElementById("game").appendChild(textnode);

    this.tableCreate();

  }
}
