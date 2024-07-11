// NOTE: When to use interfaces
//	* weightless (take up no space, since not compiled in JS)
//	* no impact on the code that will be executed

// e.g. for full-stack applications
// use an interface in a shared module for both: client and server
//	==> this ensures the data structure is the same on both sides

interface Dog {
	id?: number;
	name: string;
	age: number;
	description: string;
}

// client: retrieve data from server API
async function loadDog( id: number ): Dog {
	return await ( await fetch('URL') ).json() as Dog;
}


// NOTE: When to use classes
//	* allow to define implementation details.
//	* while interfaces only allow to define how data is structured...
//	* ...classes allow to define properties, methods and even defining default values for an object = "template object".

// server: managing data, load or save to a database
class DogData implements Dog {
    _id: number;
    _name: string;
    _age: number;
    _description: string;

    constructor({name, age, description, id = 0}: Dog) {
        this._id = id;
        this._name = name;
        this._age = age;
        this._description = description;
    }

    static load(id: number): DogData {
        // retrieve data from database and return
    }

    save() {
        // store data to database
    }
}