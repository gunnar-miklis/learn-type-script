/*  Module 7: Working with external libraries
    Lab Start */

/*  TODO: Add the import statement. */
import * as LoanPrograms from './module07_loan-programs';

/*  TODO: Update the function calls. */
const interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
const conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         // :>> "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     // :>> "The conventional loan payment is 237.24"
