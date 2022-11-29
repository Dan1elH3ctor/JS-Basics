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


// if statement
let age = 17;
if(age>17) {
    console.log("you are qualified");
}
else{
    console.log("you are not qualified")
}
