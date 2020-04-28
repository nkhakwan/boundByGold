export class JobBoard {
  



  constructor(){
  //callOurFunctions(){

    this.ourThreeDimentionalArray = new Array(new Array(new Array()));
    this.werewolfDeathMoney = 150;
    this.goblinCaveDeathMoney = 75;
    this.caravanEscortDeathMoney = 125;
    this.caravanAmbushDeathMoney = 200;
    this.manHunterContractDeathMoney = 350;
    this.guardPatrolContractDeathMoney = 425;
    this.ogreContractDeathMoney = 500;
    this.mercContractDeathMoney = 750;
  }

  werewolf() {
    let numberOfWolvesContracts = this.randomGen(3);
    for (let i=0; i<numberOfWolvesContracts; i=i+1){
      this.ourThreeDimentionalArray[0][0][i] = this.randomGen(5);
      console.log(`we are here ${this.ourThreeDimentionalArray[0][0][i]}`);
      //this.ourThreeDimentionalArray[0][1][i] = ((this.randomGen(5)*(this.ourThreeDimentionalArray[0][0][i]))+300);
      let a = ((this.randomGen(5)*(this.ourThreeDimentionalArray[0][0][i]))+300);
      console.log(a);
    }
  }
  
  goblinCave() {
    let numberOfGoblinContracts = this.randomGen(2);
    for (let i=0; i<numberOfGoblinContracts.length; i=i+1){
      this.ourThreeDimentionalArray[1][0][i] = this.randomGen(12);
      this.ourThreeDimentionalArray[1][1][i] = this.ourThreeDimentionalArray[1][0][i] * 25;
    }
  }
  
  caravanEscort() {
    let numberOfEscortContracts = this.randomGen(7);
    for (let i=0; i<numberOfEscortContracts.length; i=i+1){
      this.ourThreeDimentionalArray[2][0][i] = this.randomGen(10);
      this.ourThreeDimentionalArray[2][1][i] = this.ourThreeDimentionalArray[2][0][i] * 50;
    }
  }

  caravanAmbush() {
    let numberOfAmbushContracts = this.randomGen(2);
    for (let i=0; i<numberOfAmbushContracts.length; i=i+1){
      this.ourThreeDimentionalArray[3][0][i] = this.randomGen(9);
      this.ourThreeDimentionalArray[3][1][i] = (this.ourThreeDimentionalArray[3][0][i]*this.randomGen(5))+500;
    }
  }

  manHunterContract() {
    let numberOfManhunterContracts = this.randomGen(4);
    for (let i=0; i<numberOfManhunterContracts.length; i=i+1){
      this.ourThreeDimentionalArray[4][0][i] = this.randomGen(10);
      this.ourThreeDimentionalArray[4][1][i] = (this.ourThreeDimentionalArray[4][0][i]*this.randomGen(5))+750;
    }
  }

  soldierContract() {
    let numberOfSoldierContracts = this.randomGen(3);
    for (let i=0; i<numberOfSoldierContracts.length; i=i+1){
      this.ourThreeDimentionalArray[5][0][i] = this.randomGen(12);
      this.ourThreeDimentionalArray[5][1][i] = (this.ourThreeDimentionalArray[5][0][i]*this.randomGen(7))+1000;
    }
  }

  ogreContract() {
    let numberOfOgreContracts = this.randomGen(2);
    for (let i=0; i<numberOfOgreContracts.length; i=i+1){
      this.ourThreeDimentionalArray[6][0][i] = this.randomGen(8);
      this.ourThreeDimentionalArray[6][1][i] = (this.ourThreeDimentionalArray[6][0][i]*this.randomGen(3))+1500;
    }
  }

  warPartyContract() {
    let numberOfWarPartyContracts = this.randomGen(1);
    for (let i=0; i<numberOfWarPartyContracts.length; i=i+1){
      this.ourThreeDimentionalArray[7][0][i] = this.randomGen(15);
      this.ourThreeDimentionalArray[7][1][i] = (this.ourThreeDimentionalArray[7][0][i]*this.randomGen(15))+2500;
    }
  }

  randomGen(number) {
    return Math.ceil(Math.random() * number);
  }
  
}