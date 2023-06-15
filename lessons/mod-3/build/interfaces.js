"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const employee = {
    firstName: 'Emil',
    lastName: 'Anderson',
    fullName() {
        return this.firstName + ' ' + this.lastName;
    }
};
console.log(employee.firstName);
console.log(employee.fullName());
const obj = {
    requiredProperty: 'required',
    readOnlyProperty: 123456
};
console.log(obj.requiredProperty);
console.log(obj.readOnlyProperty);
obj.requiredProperty = 'is required';
console.log(obj.requiredProperty);
console.log(obj.readOnlyProperty);
const myIceCream = {
    flavor: 'chocolate',
    scoops: 2
};
console.log(myIceCream.flavor);
function tooManyScoops(dessert) {
    return dessert.scoops > 3 ? dessert.scoops + ' is too much!' : 'here you go!';
}
console.log(tooManyScoops(myIceCream));
myIceCream.scoops = 4;
console.log(tooManyScoops(myIceCream));
myIceCream.instructions = 'sprinkle some stuff on top';
console.log(myIceCream);
const myIceCream2 = {
    flavor: 'vanilla',
    scoops: 3,
    sauce: 'caramel',
    nuts: false,
    whippedCream: true
};
function tooManyScoops2(dessert) {
    return dessert.scoops > 3 ? dessert.scoops + ' is too much!' : 'here you go!';
}
console.log(tooManyScoops2(myIceCream2));
const flavors = ['chocolate', 'vanilla', 'strawberry'];
console.log(flavors[0]);
const apiURL = 'https://jsonplaceholder.typicode.com/posts';
function fetchPosts(url) {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield fetch(url);
        const apiData = yield response.json();
        return apiData;
    });
}
function showPosts() {
    return __awaiter(this, void 0, void 0, function* () {
        const posts = yield fetchPosts(apiURL);
        const post1 = posts[0];
        console.log(post1.userId);
        console.log(post1.id);
        console.log(post1.title);
        console.log(post1.body);
    });
}
showPosts();
