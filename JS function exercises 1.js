// FUN FUN FUNCTIONS!!!

// Ex 1
// Input: name & age 
// Output: 'heelo my name is ... && age is ...'


var name = "Diana";
var age = 28;
alert("Hello my name is " + name + "and I am " + age + " years old");

// Ex 2
// Input: 3 point objects
// Output: area of the triangle they determine

var pointA = {
    x1: 2,
    y1: 3
};
var pointB = {
    x2: 4,
    y2: 6
};
var pointC = {
    x3: 5,
    y3: 4
};

function getDistance(p1,p2){
    return Math.sqrt((p2.x - p1.x)*(p2.x - p1.x)+(p2.y - p1.y)*(p2.y - p1.y));
  }
  
  
  console.log(getDistance(pointA,pointB));
  
  

function getAria(p1, p2, p3) {
    console.log("Aria triunghiului este = ");
    return Math.sqrt((p2.x - p1.x)*(p2.x - p1.x)+(p2.y - p1.y)*(p2.y - p1.y));
};
console.log(getAria(pointA, pointB, pointC));


//Ex 3
// Input: properties of an object
// Output: object with those properties
// Example: createChair('red', 200, '20cm') => chair Object


function getObject(a, b, c) {
    return cube = {
        a,
        b,
        c
    }
}
console.log(getObject(20, 30, 50));
// function getObject (); console.log(getObject(10,20,30));


// Ex 4 -- no function
// Write a code snippet which interchanges two variables.
// Before "Gooooogle'ing it", think of how you would switch water between
// two glasses
/* Example snippet

    var city1 = 'Iasi';
    var city2 = 'Bacau';
    // ... your code

    console.log(city1); // Bacau
    console.log(city2); //Iasi
*/

var cos1 = "mere";
var cos2 = "pere";
var cos3;

cos3 = cos1;
cos1 = cos2;
cos2 = cos3;

console.log(cos1);
console.log(cos2);


//  Ex 5

function compare(x, y) {
    if (x > y) {
        return true;
    } else {
        return false;
    }
};

console.log(compare(5, 10));


// Ex 6


function biggerThan10(x, y) {
    if ((x - y) > 10) {
        return true;
    }
    else {
        return false;
    }
}

console.log(biggerThan10(5, 10));

// Ex. 7

function clearRest(a, b, c, d) {
    if ((a + b) % (c + d) === 0) {
      return true;
    } else {
      return false;
    }
  }
