import { JobBoard } from './contracts.js';

export class IncomeStatement {
  constructor() {
    this.wage = 50;
    this.deathPayment = 150;
  }

  calculateIncome(contractClicked, mercSurvived) {
    let income = 0;
    if (mercSurvived) {
      income = contractClicked[1] -
        (contractClicked[0] * this.wage) +
        ((contractClicked[0] - mercSurvived) * contractClicked[2]) -
        ((contractClicked[0] - mercSurvived) * this.deathPayment);
    } else {
      income = ((contractClicked[0] - mercSurvived) * contractClicked[2]) -
        ((contractClicked[0] - mercSurvived) * this.deathPayment) -
        (contractClicked[0] * this.wage);
    }
    return income;
  }
}