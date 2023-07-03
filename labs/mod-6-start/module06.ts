/*  Module 6: DGenerics in TypeScript
    Lab Start */

/*  DataStore is a utility function that can store up to 10 string values in an array. 
    Rewrite the DataStore class so the array can store items of any type.

    TODO: Add and apply a type variable. */
class DataStore<T> {

    private _data: Array<T> = new Array(10);
    
    AddOrUpdate(index: number, item: T) {
        if(index >=0 && index <10) {
            this._data[index] = item;
        } else {
            console.log('Index is greater than 10')
        }
    }
    GetData(index: number) {
        if(index >=0 && index < 10) {
            return this._data[index];
        } else {
            return
        }
    }
}

const cities = new DataStore();
cities.AddOrUpdate(0, "Mumbai");
cities.AddOrUpdate(1, "Chicago");
cities.AddOrUpdate(11, "London");       // :>> item not added
console.log(cities.GetData(1));         // :>> 'Chicago'
console.log(cities.GetData(12));        // :>> 'undefined'

// TODO Test items as numbers.
const empIDs = new DataStore<number>();
empIDs.AddOrUpdate(7, 123)
empIDs.AddOrUpdate(9, 456)
empIDs.AddOrUpdate(5, 789)
empIDs.AddOrUpdate(15, 111) 		// :>> not added
console.log( empIDs.GetData(2) );	// :>> undefined
console.log( empIDs.GetData(15) );	// :>> undefined
console.log( empIDs.GetData(7) );	// :>> 123


// TODO Test items as objects.
type Pets = {
	name: string;
	breed: string;
	age: number;
}
const dog = { name: 'Snoop', breed: 'chihuahua', age: 3 }

const pets = new DataStore<Pets>();
pets.AddOrUpdate(3, dog );
console.log( pets.GetData(3)?.name ); // :>> Snoop