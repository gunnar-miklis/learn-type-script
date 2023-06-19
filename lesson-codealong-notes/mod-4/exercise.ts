// COMMENT: since the function doesn't return any value, we can indicate the absence of data by using: "type void"
function displayAlert( message: string ): void {
    alert('The message is ' + message);
}

function sumArray( input: number[] ): number {
    let total: number =  0;
    for(let count = 0; count < input.length; count++) {
        if( isNaN( input[count] ) ){
            continue;
        }
        total += Number( input[count] );
    }
    return total;
}
console.log( sumArray( [1, 2, 3] ) ); // Ok :>> 6
// console.log( sumArray( 5 ) ); // not an array
// console.log( sumArray( [1, 'two', 3] ) ); // not a number

const addThreeNumbers = ( x: number, y: number, z?: number ): number => !z ? x + y : x + y + z
console.log( addThreeNumbers(10, 20) );
console.log( addThreeNumbers(10, 20, 30) );

const subtractThreeNumbers = ( x: number, y: number, z= 100 ): number => x - y - z;
console.log( subtractThreeNumbers(10, 20) );
console.log( subtractThreeNumbers(10, 20, 15) );