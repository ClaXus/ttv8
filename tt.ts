import { Board } from "./Board";
import { Card  } from "./Card";
import { Player  } from "./Player";
import { Game  } from "./Game";
import { Deck  } from "./Deck";
import { Elemental  } from "./Elemental";
import { Rule  } from "./Rule";


export class tt{
  sessionPlayer : string;
  playerSession : Player;
  selectedCard : HTMLImageElement;
  fullDeck : Deck;
  currentGame : Game;
  mylistener:EventListener;

  evalBoard(){
    for(var j=0;j<10;j++){
      if(this.currentGame.board.statusTable[j]==1){
        //alert("position " + (j) + " is blue" );
        var img = <HTMLImageElement> document.getElementsByClassName("square"+ (j))[0];
        img.style.backgroundColor = "royalblue";
      }
      else if(this.currentGame.board.statusTable[j]==2){
        //alert("position " + (j) + " is red" );
        var img = <HTMLImageElement> document.getElementsByClassName("square"+ (j))[0];
        img.style.backgroundColor = "orangered";
        document.getElementById('score').innerText = ""+this.currentGame.score.toString()+"-"+(10-this.currentGame.score).toString();
      }
    }
  }

  selectCard(x){
    this.selectedCard = x;
    //alert("carte sélectionnée" + x.className);
  }


  allocateCards(){
    var x = this;
    var j=0;
    for(;j<5;j++){
          let img = document.createElement("img");
          img.src = this.currentGame.deckPlayer1.cards[j].cardImage;
          img.classList.add("card" + j);
          //img.tagName
          //this.mylistener = (e:Event) => x.selectCard(img);
          img.addEventListener("click", function(){
            x.selectCard(img);
          });
          document.getElementById("player1").appendChild(img);
    }
    for(j=0;j<5;j++){
      let img = document.createElement("img");
      img.src = this.currentGame.deckPlayer2.cards[j].cardImage;
      img.classList.add("card" + (5+j));
      img.addEventListener("click", function(){
        x.selectCard(img);
      });
      document.getElementById("player2").appendChild(img);
    }
  }


  putCard(selectedSquare, position){
    var currentPlayer;
    var selectedCardNumber = parseInt(this.selectedCard.className[(this.selectedCard.className.length)-1]);

    if((selectedCardNumber)<5){
      currentPlayer = this.currentGame.player1;
    }
    else{
        currentPlayer = this.currentGame.player2;
    }
    var isOkay = this.currentGame.putCard(position, this.fullDeck.cards[selectedCardNumber], currentPlayer);
    if(isOkay){
      selectedSquare.appendChild(this.selectedCard);
      var x = this;
      this.selectedCard.addEventListener("click", function(){
        x.selectedCard = null;
      });
    }
    this.evalBoard();
    this.selectedCard = null;
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

    var scoreBoard = document.getElementById('score');
    scoreBoard.innerText = '5-5';

  }

  addClickableBoard(){
        var x = this;
        // iterate to add the possibility to put on square - AJOUT DES CASES CLIQUABLES
        for(var j=1; j<10; j++){
          let selectedSquare = document.getElementsByClassName("square" + j)[0];
          let pos = j;
          selectedSquare.addEventListener('click', function(){
            x.putCard(selectedSquare, pos);
          },false);
        }
  }
  launchParty($) {

    this.displayGraphicBoard();
    this.addClickableBoard();
    this.allocateCards();
  }

  jsonToCards(jsonCards){
    let fullDeck = new Array<Card>();
    var jsonParse = JSON.parse(jsonCards);
    var x = this;
    for(var j=0;j<jsonParse.length;j++){
          let card = new Card(jsonParse[j].idCard, jsonParse[j].lvl, jsonParse[j].upValue, jsonParse[j].rightValue,
            jsonParse[j].downValue, jsonParse[j].leftValue, jsonParse[j].link, new Elemental(jsonParse[j].elemental));
          fullDeck.push(card);
    }

    return new Deck(fullDeck);
  }

  public run(jsonFile, $) {
    this.fullDeck = this.jsonToCards(jsonFile);
    let rules = Rule[10]; // bidon
    let deck1 = new Array<Card>();
    let deck2 = new Array<Card>();
    var j = 0;
    for(;j<5;j++){
      deck1.push(this.fullDeck.cards[j]);
    }
    for(;j<10;j++){
      deck2.push(this.fullDeck.cards[j]);
    }
    this.currentGame = new Game(new Player(), new Player(), 120, new Deck(deck1), new Deck(deck2), rules);
    this.launchParty($);
  }
}


//alert(this.currentGame.board.getCard(position));

//var jsonParse = JSON.parse(this.cardData);

/*for(var j=0;j<this.fullDeck.cards.length;j++){
      let img = document.createElement("img");
      img.src = this.fullDeck.cards[j].cardImage;

      img.classList.add("card" + j);
      img.addEventListener("click", function(){
        x.selectCard(img)
      }, false);
      if(j<5){
        img.style.backgroundColor = "royalblue";
        document.getElementById("player1").appendChild(img);
      }
      else{
          img.style.backgroundColor = "orangered";
          document.getElementById("player2").appendChild(img);
      }
}*/


/*let img = document.createElement("img");
img.src = jsonParse[j].link;

img.classList.add("card" + j);
img.addEventListener("click", function(){
  x.selectCard(img)
}, false);
if(j<5){
  img.style.backgroundColor = "royalblue";
  document.getElementById("player1").appendChild(img);
}
else{
    img.style.backgroundColor = "orangered";
    document.getElementById("player2").appendChild(img);
}*/
