export class JobBoard {
  constructor (start) {
    this.start = start;
  };

  werewolf() {
    let numberOfWolvesContracts = randomGen(3);
    let numberOfWolves = [0][0];
    for (let i=1; i<numberOfWolvesContracts.length+1; i=i+1){
      numberOfWolves[0][i] = randomGen(5);
      numberOfWolves[1][i] = ((randomGen(5)*numberOfWolves[0][i])+300);
    }
    return numberOfWolves;
  };
  
  goblinCave() {
    let numberOfGoblinContracts = randomGen(2);
    let numberOfGoblins = [0][0];
    for (let i=1; i<numberOfGoblinContracts.length+1; i=i+1){
      numberOfGoblins[0][i] = randomGen(12);
      numberOfGoblins[1][i] = numberOfGoblins[0][i] * 25;
    }
    return numberOfGoblins;
  };
  
  caravanEscort() {
    let numberOfEscortContracts = randomGen(7);
    let numberOfBandits = [0][0];
    for (let i=1; i<numberOfEscortContracts.length+1; i=i+1){
      numberOfBandits[0][i] = randomGen(10);
      numberOfBandits[1][i] = numberOfBandits[0][i] * 50;
    }
    return numberOfBandits;
  };

  caravanAmbush() {
    let numberOfAmbushContracts = randomGen(2);
    let numberOfGuards = [0][0];
    for (let i=1; i<numberOfAmbushContracts.length+1; i=i+1){
      numberOfGuards[0][i] = randomGen(9);
      numberOfGuards[1][i] = (numberOfGuards[0][i]*this.randomGen(5))+500;
    }
    return numberOfGuards;
  };

  manhunterContract() {
    let numberOfManhunterContracts = randomGen(4);
    let numberOfManhunters = [0][0];
    for (let i=1; i<numberOfManhunterContracts.length+1; i=i+1){
      numberOfManhunters[0][i] = randomGen(10);
      numberOfManhunters[1][i] = (numberOfManhunters[0][i]*this.randomGen(5))+750;
    }
    return numberOfManhunters;
  };

  soldierContract() {
    let numberOfSoldierContracts = randomGen(3);
    let numberOfSoldiers = [0][0];
    for (let i=1; i<numberOfSoldierContracts.length+1; i=i+1){
      numberOfSoldiers[0][i] = randomGen(12);
      numberOfSoldiers[1][i] = (numberOfSoldiers[0][i]*this.randomGen(7))+1000;
    }
    return numberOfSoldiers;
  };

  ogreContract() {
    let numberOfOgreContracts = randomGen(2);
    let numberOfOgres = [0][0];
    for (let i=1; i<numberOfOgreContracts.length+1; i=i+1){
      numberOfOgres[0][i] = randomGen(8);
      numberOfOgres[1][i] = (numberOfOgres[0][i]*this.randomGen(3))+1500;
    }
    return numberOfOgres;
  };

  warPartyContract() {
    let numberOfWarPartyContracts = randomGen(1);
    let numberOfWarParty = [0][0];
    for (let i=1; i<numberOfWarPartyContracts.length+1; i=i+1){
      numberOfWarParty[0][i] = randomGen(15);
      numberOfWarParty[1][i] = (numberOfWarParty[0][i]*this.randomGen(15))+2500;
    }
    return numberOfWarParty;
  };

  deathMoney() {
    this.werewolfDeathMoney = 150;
    this.goblinCaveDeathMoney = 75;
    this.caravanEscortDeathMoney = 125;
    this.caravanAmbushDeathMoney = 200;
    this.manhunterContractDeathMoney = 350;
    this.guardPatrolContractDeathMoney = 425;
    this.ogreContractDeathMoney = 500;
    this.mercContractDeathMoney = 750;
  };

  randomGen(number) {
    return Math.ceil(Math.random() * number);
  };
  
}
