// var date = new Date()
// console.log(date)
// console.log(date.toDateString())
// console.log(date.toTimeString())
// console.log(date.toLocaleDateString())
// console.log(date.getFullYear())
// console.log(date.getMonth())
// console.log(date.getDate())
// array system  //

// let fruits = ['Apple', 'Banana'];
// let newLength = fruits.push("l;kjf;as")


// console.log(newLength)

// var num = [1, 2, 3, 4, 5, 6, 7, 6]


// num.splice(3, 2)
// console.log(num)
//     // var fruits = ["Banana", "Orange", "Apple", "Mango"];
//     // fruits.splice(2, 0, "Lemon", "Kiwi");
//     // console.log()

// seach //

// var arr = [1, 2, 3, 4, 5, 4, 5, 10, 23, 12, 32, 34, 2342, 234]

// var find = 10;
// var isFound = false
// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] === find) {
//         console.log("find data" + " " + i)
//         isFound = true
//         break;
//     }
//     if (!isFound) {
//         console.log("data not found")
//     }
// }
//tow dimensional array

// var arr = [
//     [78, 71, 60, 90],
//     [78, 71, 60, 90],
//     [78, 71, 60, 90],
//     [78, 71, 60, 90],
//     [78, 71, 60, 90]
// ]
// for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < arr[i].length; j++) {
//         console.log("element " + i + " : " + arr[i][j])
//     }
// // }
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, ]

// // for (var i = 0; i < (arr.length / 2); i++) {
// //     var temp = arr[i]

// //     arr[i] = arr[arr.length - 1 - i];

// //     arr[arr.length - 1 - i] = temp

// // }
// // console.log(arr)
// var result=arr.reverse()
// console.log(result)
// var point = {
//     name: "sohel",
//     id: 1212,
//     phone: 123132,
//     age: 19

// }

// point.name = "ahmed"
// console.log(point)

// function student() {
//     this.name = "sohel"
//     this.age = "25",
//         this.email = "sohelahmed.6862@gmial.com"

// }

// student.prototype = {
//     adderss: "durgapur",
//     getName: function() {
//         return this.adderss
//     }
// }

// var stu = new student()
// console.log(stu.adderss)

// var arr = [1, 5, 8]
// var arr1 = arr.indexOf(1)
// console.log(arr1)

// var numbers = [1, 2, 3, 4, 5];

// var result = numbers.slice(-1, 3);

// console.log(result)

// var additon = function(a, b) {
//     return a + b
// }

// setTimeout(function() {
//     console.log("i wlkj;a;kljfl'")
// }, 5000)

// var another = additon
// console.log(another(5, 6))
//inner function

// function sometime(name, other) {

//     function hi() {
//         console.log(name, other)
//     }
//     hi()
// }

// sometime("sohel", "ahmed")
// function addSquares(a, b) {
//     function square(x) {

//         return x * x;
//     }
//     console.log(square)
//     return square(a) + square(b);
// }
// a = addSquares(2, 3); // returns 13
// b = addSquares(3, 4); // returns 25
// c = addSquares(4, 5);

// function add(arr1, arr2, n) {
//     let result = [];
//     result.push(...arr2.slice(0, n)) //4
//     result.push(...arr1)
//     console.log(result)
//     result.push(...arr2.slice(n, arr1.length))
//     console.log(result)
//     return result;
// }
// console.log(add([1, 2, 3], [4, 5], 1))

// function leap(year) {

//     for (let i = 0; i < year.length; i++) {

//         if ((0 == year[i] % 4) && (0 != year[i] % 100) || (0 == year[i] % 400)) {

//             console.log("leapyeras " + year[i])

//         } else {
//             console.log("not lepa yers")
//         }
//     }

//     return year
// }
// var arr = [2021, 2019, 2020]
// var result = leap(arr)
// console.log(result)

// fivonaki number



// function fe(n) {
//     let f = [0, 1];

//     for (var i = 2; i <= n; i++) {
//         f[i] = f[i - 1] + f[i - 2]
//         console.log(f[i], f[i - 1], f[i - 2])
//     }
//     console.log(f)

//     //     if (n < 2) {
//     //         return n;
// }

// fe(19)
// var nem = fe(n - 1) + fe(n - 2)
// console.log(n)
// // return nem

// // }

// var re = fe(10)
// console.log(re)
// function fibonacci(n) {
//     return n < 1 ? 0 :
//         n <= 2 ? 1 :
//         fibonacci(n - 1) + fibonacci(n - 2);
// }

// console.log(fibonacci(4));

// function fe(n) {
//     if (n == 0) {
//         return [0]
//     } else if (n == 1) {
//         return [0, 1]

//     } else {
//         var fibo = fe(n - 1)
//         var nextelement = fibo[n - 1] + fibo[n - 2]
//         fibo.push(nextelement)

//         return fibo
//     }
// }

// var resu = fe(4)
// console.log(resu)
// ////////////////////prime number/////////////////

// var n = 57
// var sum = 0

// function prime(n) {
//     for (var i = 2; i < n; i++) {


//         for (var j = 0; j < i; j++) {
//             if (n % j == 0) {

//                 return console.log("not")
//             }
//             console.log("prime ")

//         }
//     }

// }
// prime(10)

// Swap variable, /////////////////////////////////

// var x = 5
// var y = 8
// x = x + y
// console.log(x)
// y = x - y

// var z = y
// console.log(y)

// var p = 5;
// var q = Math.random();

// [p, q] = [q, p]
// console.log([p, q])


// var calam = "ahmedbopop"
// var sochib = "ahmedsw"
// var sohel = "sohel"
// if (calam > sochib || calam > sochib) {
//     console.log("biger")
// } else if (sohel > calam || sohel > sochib) {
//     console.log("camal")
// } else {
//     console.log("sojib")
// }

// var name = Math.max

// var marks = ["sohel", "ljkhflakjhf", "bilal"]

// function findN() {
//     var max = ''

//     for (var i = 0; i < marks.length; i++) {
//         var element = marks[i]
//             // console.log(element)
//         if (element.length > max.length) {
//             max = element
//         }
//     }
//     return max
// }
// var res = findN(marks)
// console.log(res)



// var friends = ["Alu", "Bulu", "culu", "dulu", "fulu"];

// var allNames = "";

// for (var i = 0; i < friends.length; i++) {

//     var name = friends[i];

//     allNames++

// }

// console.log(allNames)function findLongestWord(str) {
// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = " 0";
//     for (var i = 0; i < strSplit.length; i++) {
//         console.log(strSplit[i])
//         if (strSplit[i] > longestWord && strSplit[i] != 0) {
//             longestWord = strSplit[i];
//             console.log(longestWord)
//         }
//     }
//     return longestWord;
// }
// findLongestWord("i am sohel ");

function megaFriend(friends) {

    if (friends > 0) {

        var maxFnd = friends[0];
        for (var i = 0; i < friends.length; i++) {

            var char = friends[i];

            if (friends[i].length > maxFnd.length) {

                maxFnd = char;
            }
        }
        return maxFnd;
    } else {
        console.log("lkjha")
    }

}
var Frined_name = ["sohel", "hojan", "tamanna", "albarinstan"];
console.log(megaFriend(Frined_name))