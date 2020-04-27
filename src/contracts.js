export class JobBoard {
  constructor (start) {
    this.start = start;
  }

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

  deathMoney(){
    this.werewolf = 150;
    this.goblinCave = 75;
    this.caravanEscort = 125;
    this.caravanAmbush = 200;
  }

  randomGen(number){
    return Math.ceil(Math.random() * number);
  }
  
}
