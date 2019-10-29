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

  selectCard(x){
    this.selectedCard = x;
  }

  putCard(selectedSquare, position){
    selectedSquare.appendChild(this.selectedCard);
    var selectedCardNumber = this.selectedCard.className[this.selectedCard.className.length-1];
    this.currentGame.board.addCard(position, this.fullDeck.cards[selectedCardNumber]);
    this.selectedCard = null;
  }

  addClickableBoard(){
        var x = this;
        // iterate to add the possibility to put on square - AJOUT DES CASES CLIQUABLES
        for(var j=1; j<10; j++){
          let selectedSquare = document.getElementsByClassName("square" + j)[0];
          selectedSquare.addEventListener('click', function(){
            x.putCard(selectedSquare, j);
          },false);
        }
  }

  allocateCards(){
    var x = this;
    var j=0;
    for(;j<5;j++){
          let img = document.createElement("img");
          img.src = this.currentGame.deckPlayer1.cards[j].cardImage;
          img.classList.add("card" + j);
          img.addEventListener("click", function(){
            x.selectCard(img)
          }, false);
          img.style.backgroundColor = "royalblue";
          document.getElementById("player1").appendChild(img);
    }
    for(j=0;j<5;j++){
      let img = document.createElement("img");
      img.src = this.currentGame.deckPlayer2.cards[j].cardImage;
      img.classList.add("card" + (5+j));
      img.addEventListener("click", function(){
        x.selectCard(img)
      }, false);
      img.style.backgroundColor = "orangered";
      document.getElementById("player2").appendChild(img);
    }
  }

  launchParty($) {
    this.currentGame.board.displayGraphicBoard();
    this.addClickableBoard();
    this.allocateCards();

    document.getElementById("player1").style.margin = "0 auto";
    document.getElementById("player1").style.textAlign = "center";
    document.getElementById("player1").style.paddingBottom = "2px";

    document.getElementById("player2").style.margin = "0 auto";
    document.getElementById("player2").style.textAlign = "center";
    document.getElementById("player2").style.paddingTop = "2px";
  }

  jsonToCards(jsonCards){
    let fullDeck = new Array<Card>();
    var jsonParse = JSON.parse(jsonCards);
    var x = this;
    for(var j=0;j<jsonParse.length;j++){
          let card = new Card(jsonParse[j].idCard, jsonParse[j].lvl, jsonParse[j].upValue, jsonParse[j].rightValue,
            jsonParse[j].downValue, jsonParse[j].leftValue, jsonParse[j].link, new Elemental(jsonParse[j].elemental));
          fullDeck.push(card);

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
