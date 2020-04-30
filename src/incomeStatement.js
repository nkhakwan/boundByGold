// import { JobBoard } from './contracts.js';

export class IncomeStatement {
  constructor() {
    this.wage = 50;
    this.deathPayment = 100;
    this.aggregateIncome = 0;
    this.numberOfMercenaries = 0;
  }

  calculateIncome(contractClicked, mercSurvived) {
    let income = 0;
    if (mercSurvived) {
      console.log("In calculate if")
      income = contractClicked[1] -
        (this.numberOfMercenaries * this.wage) +
        ((contractClicked[0] - mercSurvived) * contractClicked[2]) -
        ((contractClicked[0] - mercSurvived) * this.deathPayment);
    } else {
      console.log("In calculate else")
      income = ((contractClicked[0] - mercSurvived) * contractClicked[2]) -
        ((contractClicked[0] - mercSurvived) * this.deathPayment) -
        (this.numberOfMercenaries * this.wage);
    }
    console.log(`Here is the aggregate before current addition ${this.aggregateIncome}`);
    console.log(`this is the current income ${income}`);

    this.aggregateIncome = income + this.aggregateIncome;
    //return income;
  }
}