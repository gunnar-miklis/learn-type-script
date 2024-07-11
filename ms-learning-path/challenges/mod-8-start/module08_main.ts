/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */

/*  TODO: Add reference paths. */
/// <reference path="./module08_loans.ts" />
/// <reference path="./module08_loan-programs.ts" />

/*  TODO: Update the function calls. */

const interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
const conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         // :>> "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     // :>> "The conventional loan payment is 237.24"
