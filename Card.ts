import {Elemental} from "./Elemental";

export class Card{
  idCard : number;
  lvl : number;
  upValue : Number;
  rightValue : Number;
  downValue : Number;
  leftValue : Number;
  cardImage : string;
  elemental : Elemental;

  constructor(idCard : number, lvl : number, upV : Number, rV : Number, dV : Number, lV : Number, cardImage : string, elemental : Elemental){
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
