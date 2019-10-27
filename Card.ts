
export class Card{
  idCard : number;
  lvl : number;
  upValue : Number;
  rightValue : Number;
  downValue : Number;
  leftValue : Number;
  cardImage : String;

  constructor(upV : Number, rV : Number, dV : Number, lV : Number){
    this.upValue = upV;
    this.rightValue=rV;
    this.downValue=dV;
    this.leftValue=lV;
  }
  displayCard(){
    return ""+this.upValue+","+this.rightValue+","+this.downValue+","+this.leftValue;
  }
}
