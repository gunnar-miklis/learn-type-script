/*  Module 8: Organize code using TypeScript namespaces
    Lab Start */

/*  TODO: Create a the Loans namespace. */
namespace Loans {
	export interface Loan {
		principle: number;
		interestRate: number;
	}
	export interface ConventionalLoan extends Loan {
		months: number;
	}
}

/*  TODO: Create LoanPrograms namespace. */
namespace LoanPrograms {
	/*  TODO: Update the calculateInterestOnlyLoanPayment function. */
	export function calculateInterestOnlyLoanPayment(loanTerms: Loans.Loan): string {
		const payment: number = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
		return 'The interest only loan payment is ' + payment.toFixed(2);
	}
	/*  TODO: Update the calculateConventionalLoanPayment function. */  
	export function calculateConventionalLoanPayment(loanTerms: Loans.ConventionalLoan): string {
		const interest: number = calculateInterestRate(loanTerms.interestRate);
		const payment: number = loanTerms.principle * interest / (1 - (Math.pow(1/(1 + interest), loanTerms.months)));
		return 'The conventional loan payment is ' + payment.toFixed(2);
	}
	function calculateInterestRate (interestRate: number): number {
		const interest: number = interestRate / 1200;
		return interest
	}
}

/*  TODO: Add reference paths. */

/*  TODO: Update the function calls. */

const interestOnlyPayment = LoanPrograms.calculateInterestOnlyLoanPayment({principle: 30000, interestRate: 5});
const conventionalLoanPayment = LoanPrograms.calculateConventionalLoanPayment({principle: 30000, interestRate: 5, months: 180});
console.log(interestOnlyPayment);         // :>> "The interest only loan payment is 125.00" 
console.log(conventionalLoanPayment);     // :>> "The conventional loan payment is 237.24"
