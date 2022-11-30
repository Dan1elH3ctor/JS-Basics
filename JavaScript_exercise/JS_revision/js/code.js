// Math method
console.log("sqrt(: ", Math.sqrt(36));


// Return middle element
let data = [9, 3, 1, "Peter", 5, 10];
let size = data.length;
console.log("Array size: ", size);
console.log("Element ", data[size]);
// new quick method
console.log("at(): ", data.at(-1));
// fetch middle element
// let middleIndex = (data.length - 1)/ 2;
// console.log("middle element: ", data[middleIndex]);

// let middleIndex = Math.trunc((data.length - 1)/ 2);
// console.log("middleIndex: ", middleIndex);
// console.log("middle element: ", data.slice(middleIndex, middleIndex + 2));
 
let middleIndex = Math.trunc((data.length - 1)/ 2);
if(middleIndex % 2 == 0) {
    console.log(data.slice(middleIndex, middleIndex + 2) );
}
else {console.log(data[middleIndex]);
 }


//  string methods
let sentence = 'We are Aedirn';

// return first index of sentence
console.log("[0]: ", sentence[0]);
console.log(sentence.charAt('0'));

// add a string to join to sentence
console.log("concat():", sentence.concat(" and everything"));

// check if string ends with specific character or word
console.log("endsWith(Aedirn):", sentence.endsWith("Aedirn"));
console.log("endsWith(l):", sentence.endsWith("l"));

// check for inclusion of
console.log("includes(am):", sentence.includes("am"));
console.log("includes(are):", sentence.includes("are"));

// split
console.log(sentence.split('e'));

// date method
let myDate = new Date();
console.log("date:", myDate.toLocaleDateString());
let currentDate = myDate.getDate();
console.log("setDate(): ", new Date(myDate.setDate(currentDate + 5)));
// date format

// if statement
let age = 17;
if(age>17) {
    console.log("you are qualified");
}
else{
    console.log("you are not qualified")
}
// loops
let numbers = [8, 9, 3, 12, 34];
// for in loop
for(let numb in numbers) {
    console.log(numb)
};
console.table(numbers);

let people = {
    name: 'Cassidy',
    surname: 'Lawrence',
    email: 'Cassidy@gmail.com',
};
// for(let p in people){
//     console.log('${p} => ${people[p]}');
// }

// while loop
// let cnt = 0;
// while(cnt < 10) {
//     console.log('Step: ${cnt}');
// }

// using numbers array
// let cnt = 0;
// while(cnt < numbers.length){
//     console.log('Step: ${numbers[cnt]}');
//     cnt++;
// }

// do while
// do{
//     console.log('Step: ${numbers[cnt]}');
//     cnt++;
// }while(cnt < numbers.length);

// for of is used to loop through an array. for in is intended for iterating over object keys, not array indexes
// While loops allows code to execute until its truth conditions are met, this uses boolean do-while loops executes first then checks conditions.

// function
function addition(numb1, numb2) {
    console.log("Sum is: ", numb1 + numb2);
}
addition(4, 5);
addition(5, 7);
addition(9, 23);

// function task
function subtraction(numb1, numb2) {
    return numb1 - numb2;
}
console.log(subtraction(7, 4));

// rest operator
function sumOf(...args) {
    return args.reduce((a, b)=>{return a + b})
}
console.log(sumOf(1, 2, 3, 4, 5));

// constructor function
function Person(...details){
    this.firstName = details[0];
    this.lastName = details[1]; 
    this.email = details.at(-1);

}
let person1 = new Person("Peter", "Henk", "peter@gmail.com")
console.log(person1)
