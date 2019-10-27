import { Board } from "./Board";
import { Card  } from "./Card";
import { Player  } from "./Player";

function tableCreate() {
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
        var img = document.createElement("img");
        img.src = "./Joliflor.png"
        td.appendChild(img);
        tr.appendChild(td);
    }
    tbdy.appendChild(tr);
  }
  tbl.appendChild(tbdy);
  body.appendChild(tbl)
}

export class tt{
  sessionPlayer : string;
  playerSession : Player;
  public run() {
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

    tableCreate();

  }
}
