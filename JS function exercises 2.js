// 1.

console.log("hello");


function log(a) {
    console.log(a);
}



// 2. input x, returneaza x

function identity(x) {
    return x;
}

console.log(identity(2));

// 3. afiseaza x la consola folosind functiile de mai sus
//log(identity(7));


// 4. input 2 nr , returnaza suma lor


function sum(x, y) {
    return x + y;
}
log(sum(45, 45));

// 5. input un nr, returneaza nr*2

function double(x) {
    return x * 2;
} 
log(double(4));


// 6.
log(double(double(4)));

// 7.
log(double(sum(4, 7)));

// 8. 
nr1 = 4;
nr2 = 7;

log(sum(nr2,(sum(nr2,sum(nr2,nr2)));

log(sum(sum(nr2,nr2),sum(nr2,nr2));



// 9.

function mul(x, y) {
    return x * y;
}
log(mul(2, 9));


// 10. returneaza daca x este mai aproape pe axa numerelor de valoarea -15 sau 15

function aprox15(x) {
    if (x < 0) {
        return -15;
    }
    else {

        return 15;
    }
}

log(aprox15(-5));

// 11. returneaza daca x este mai aproape pe axa numerelor de valoarea -y sau y

function aproxF(x, y) {
    var min = y;
    var max = y;
    if (y < 0) {
        max = -y;
    }
    else {
        max = y;
    }
    if (x < 0) {
        return min;
    }
    else {
        return max;
    }
}
console.log(aproxF(-5, 100));



// 12.

function year(x) {
    if (x === 2018)
        return "2018!!!!";
    if (x === 2000)
        return "Commet";
    if (x < 1990)
        return "Old folks";
    else
        if (x > 2000)
            return "New folks";
    if ((x > 1990) && (x < 2000))
        return "Millenials";
}

log(year(2000));
log(year(2018));
log(year(1898));
log(year(1999));
log(year(2060));


// 13.

function negativeF(x) {
    if (x <= 0)
        return x;
    else
        return -x;
}
log(negativeF(79));


// 14.

// 7*4+7*4+(7+4)

log("abc");
log(sum(double(mul(7, 4)), sum(7, 4)));
log(negativeF(sum(double(mul(7, 4)), sum(7, 4))));
log(sum(negativeF(7), 4));

// 15. 

function cub(x) {
    return mul(x, mul(x, x));
}
log(cub(3));



// 16.

// function smallNumber(x, y, z) {
//     if (x < y) {
//         if (y < z)
//             return x;
//     }
//     else
//         if (x > y) {
//             if (y > z)
//                 return z;
//             else
//                 return y;
//         }
// }

function min(a, b, c) {
    if (a <= b && b <= c)
        return a;
    else if (b <= a && b <= c)
        return b;
    else
        return c;
}

log(min(2, 5, -8));


// 17.

function stringLength(a) {
    return a.length;
}
log(stringLength("portocala"));


// 18.

function replaceWord(a, b) {
    return a.replace(b, 'the Kit');
}

log(replaceWord('home:Welcome home!', 'home'));


// 19. functie de pe prototipul string

String.prototype.capitalLetter = function (x) {
    if (x == x.toUpperCase()) {
        alert('upper case true');
    }
    if (x == x.toLowerCase()) {
        alert('lower case true');
    }
};

capitalLetter("best friend");


// 20. scriu o functie pe prototipul object --> diffZero este vazuta ca o functie pe tipul object si se apeleaza diffZero(x)


object.prototype.diffZero = function (x) {
    if(x==0)
      return "true";
    else 
      return "false";  
}


log(diffZero(8));


// 21.  


Object.prototype.isPrototypeOf = function (b) {  
    return "Joker, Joker";
}

var a = "ab";
alert(a.isPrototypeOf());



// 22. afiseaza la consola obiectele dintr-o lista


var Fruits = ['portocale', 'banane', true, undefined, 'capsuna'];

for (var i = 0; i < Fruits.length; i += 1) {
    console.log(Fruits[i]);
}


