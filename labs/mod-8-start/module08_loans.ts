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