import {Elemental} from "./Elemental";

export class Card{
  idCard : number;
  lvl : number;
  upValue : number;
  rightValue : number;
  downValue : number;
  leftValue : number;
  cardImage : string;
  elemental : Elemental;

  constructor(idCard : number, lvl : number, upV : number, rV : number, dV : number, lV : number, cardImage : string, elemental : Elemental){
    this.idCard = idCard;
    this.lvl = lvl;
    this.upValue = upV;
    this.rightValue=rV;
    this.downValue=dV;
    this.leftValue=lV;
    this.cardImage = cardImage;
    this.elemental = elemental;
  }

  displayCard(){
    return ""+this.upValue+","+this.rightValue+","+this.downValue+","+this.leftValue;
  }
}
