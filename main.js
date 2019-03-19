var helloWorld = "hello world";
console.log(helloWorld);

var myname = "Preeti";

console.log(myname);

var age = "30";
console.log(age);

var ignasiage = "30";
var agediff = age - ignasiage;
console.log(agediff);

var age2 = "21";

if (age > age2) {
    console.log("You are older than 21");
} else {
    console.log("You are not older than 21");
}

if (age > ignasiage) {
    console.log("You are older than ignasiage");
} else if (age == ignasiage) {
    console.log("You have the same age as Ignasi");
} else if (age < ignasiage) {
    console.log("You are younger than ignasiage");
}
var names = ["Preeti", "Ami", "Laura", "Mari", "Pol"];
names.sort();
console.log(names);

console.log(names[0]);
console.log(names[4]);

for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Exercise 2
var groupage = [29, 30, 26];

var i = 0;
while (i < groupage.length) {
    if (groupage[i] % 2 == 0) {
        console.log(groupage[i]);
    }
    i++;
}

for (var i = 0; i < groupage.length; i++) {
    if (groupage[i] % 2 == 0)
        console.log(groupage[i]);
}


//Exercise 3
var numberArray = [4, 9, 2, -8, 11, 1, 6];

console.log(lowestNumber(numberArray))

function lowestNumber(array) {

    var lowestNumber = array[0];
    for (var i = 1; i < array.length; i++) {
        var otherNumbers = array[i];
        if (otherNumbers < lowestNumber) {
            lowestNumber = otherNumbers;
        }
    }
    return lowestNumber;

}
//Exercise 4
var numberArray = [4, 9, 2, -8, 11, 1, 6];

console.log(biggestNumber(numberArray))

function biggestNumber(array) {

    var biggestNumber = array[0];
    for (var i = 1; i < array.length; i++) {
        var otherNumbers = array[i];
        if (otherNumbers > biggestNumber) {
            biggestNumber = otherNumbers;
        }
    }
    return biggestNumber;
}

//exercise 5

var longArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];

var arrayIndex = 5;

printElement(longArray, arrayIndex)

function printElement(array, index) {
    console.log(array[index])
}

///exercise 6
var repeatArray = [3, 6, 67, 6, 23, 11, 100, 8, 93, 0, 17, 24, 7, 1, 33, 45, 28, 33, 23, 12, 99, 100];


function repeatNumber() {

    for (var a = 0; a < repeatArray.length; a++) {
        for (var j = a + 1; j < repeatArray.length; j++) {
            if (repeatArray[a] === repeatArray[j]) {
                console.log(repeatArray[a]);
            }
        }
    }
}
repeatNumber();

//Exercise1
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());

//Exercise2
function reverse_a_number(n) {
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(reverse_a_number(32443));

//Exercise3
function string_in_alphabetical_order(n) {
    n = n + "";
    return n.split("").sort().join("");
}
console.log(string_in_alphabetical_order("webmaster"));

//exercise3
function uppercase(str) {
    var array1 = str.split(" ");

    for (var x = 0; x < array1.length; x++) { 
        array1[x] = array1[x].charAt(0).toUpperCase() + array1[x].slice(1)
    }
    return array1.join(" ");
}
console.log(uppercase("prince of persia"));

//exercise 4
function longestWord(str) {
    var longarray = str.split(" ");
    var longest =0;
    var word= null;
    for (var i = 0; i < longarray.length; i++) {
        if(longest<longarray[i].length){
            longest = longarray[i].length;
            word = longarray[i];
        }
    }
    return word;
}
console.log(longestWord("Web Development Tutorial"));
