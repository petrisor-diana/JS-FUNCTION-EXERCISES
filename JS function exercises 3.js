
// 1. functie care returneaza toate cuvintele dintr-o lista care il contin pe x

function String(x, sir) {
    var list = [];
    for (var i = 0; i < sir.length; i++) {
        if (sir[i].includes(x) == true)
            list.push(sir[i]);
    }
    return list;
}

log(searchA('bob', ['bobita', 'obicu', 'bobu', 'obob']));


// 2. functie care returneaza toate cuvintele dintr-o lista care incep cu x

function searchA(x, sir) {
    var listaNoua = [];
    for (var i = 0; i < sir.length; i++) {
        if (sir[i].startsWith(x))
            listaNoua.push(sir[i]);
    }
    return listaNoua;
}


// 3. functie care returneaza toate nr dintr-o lista divizibile cu a

function filterDivide(a, sir) {
    var sirNou = [];
    for (var i = 0; i < sir.length; i++)
        if (sir[i] % a !== 0)
            sirNou.push(sir[i]);
    return sirNou;
}

log(filterDivide(11, [22, 3, 55, 66]));



// 4. functie care adauga un element , dupa ultimul element din lista


function newList(list, num) {
    var rezultat = [num];
    for (var i = 0; i < list.length; i++) {
        rezultat[i + 1] = list[i];  // push.rezultat
    }
    return rezultat;
}

//log(newList([3, 2, 1, 0], 4));



// 5. 


function reverse(list) {
    var listNew = [];
    for (i = list.length - 1; i >= 0; i--) {
        listNew.push(list[i]);
    }
    return listNew;
}

log(reverse([3, 2, 1, 0]));


// 6. functie care returneaza o lista de nr cuprinse intre A1 si A2

function giveMe(A1, A2) {
    var rezultat = [];
    for (var i = A1; i <= A2; i++) {
        rezultat.push(i)
    }
    return rezultat;
}

log(giveMe(10, 20));


// homework

// **1. cel mai mare nr dintr-o lista

function biggestNumber(a) {
    var max = a[0];
    for (var i = 0; i < a.length - 1; i++)
        for (j = i + 1; j < a.length; j++) {
            if (a[i] > a[j])
                max = a[i];
            else
                max = a[j];
        }
    return max;
}
log(biggestNumber([2, 4, 90, 78, -900, 567]));


//**2.

function smallestNumber(a) {
    var min = a[0];
    for (var i = 0; i < a.length - 1; i++)
        for (j = i + 1; j < a.length; j++) {
            if (a[i] < a[j])
                min = a[i];
            else
                min = a[j];
        }
    return min;
}
log(smallestNumber([2, 4, 90, 78, -900, 567]));


//** 3.

function sumOfAllNumbers(a) {
    var sum = 0;
    for (var i = 0; i < a.length; i++)
        sum = sum + a[i];
    return sum;
}
log(sumOfAllNumbers([1, 2, 3, 4, 400]));


//** 4.

function PalindromNum(a) {
    for (var i = 0; i < = a.length / 2); i++)
            if (a[i] == a[length-i])
                return true;
            else
                return false;
}


//** 

function palindrom(list) {
    if (list.length === 0) { return true; }
    if (list[0] !== list[list.length - 1]) { return false }
    return palindrom(list.slice(1, list.length - 1));
}

log(palindrom([7, 4, 6, 6, 4, 7]))


//** 5.

function numberPosition(a, b) {
    for (i = 0; i < b.length; i++)
        if (a == b[i])
            return i;

    return -1;
}

log(numberPosition(4, [1, 2, 3]));


//** 
a = [1, 3, 2, 8, 5];
log(a.indexOf(3));


//** 6
function concatenateString(a, b) {
    var c = a;
    for (i = 0; i < b.length; i++)
        c.push(b[i]);

    return c;
}

log(concatenateString([5, 6], [7, 8]));


//** 

var a = [5, 8, 9];
var b = [9, 8];
log(a.concat(b));


// ** 7.

var a = [3, 4, 5];

function addFirst(nr, list) {
    list.unshift(nr);
    for (var i = 0; i < list.length; i++)
        return list[i];
}

log(addFirst(43, a));



//** 8.

function evenNumbers(a,b) {
    while (a <= b){
        if (a % 2 == 0){
          var x=a;  
          return x;
          a++;}
    }
}

log(evenNumbers(11,33));











