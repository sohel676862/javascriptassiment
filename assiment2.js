//////////////kilometerToMeter//////////////
function kilometerToMeter(kilomitter) {

    var mitter = ' ';
    if (kilomitter > 0) {
        mitter = kilomitter * 1000;

    } else {
        console.log("giva an number")
    }
    return mitter
}


console.log(kilometerToMeter(10))


function budgetCalculator(watch, phone, leptop) {
    var total = " ";
    if (watch, phone, leptop > 0) {

        var watch_price = 50;
        var total_watch = watch * watch_price;
        var phone_price = 100
        var total_phone = phone * phone_price;
        var leptop_price = 500
        var total_leptop = leptop * leptop_price;
        total = total_watch + total_phone + total_leptop
        return total;
    } else {
        console.log("give the mobe price")
    }
    return total;
}

console.log(budgetCalculator(5, 7, 10))

//////////hotelCost///////////////
function hotelCost(day) {

    var total_cost = 0;

    if (day > 0) {
        if (day <= 10) {
            total_cost = day * 100

        } else if (day <= 20) {
            var firstPart = 10 * 100;
            var remaining = day - 10;
            var secondPart = remaining * 80;
            total_cost = firstPart + secondPart


        } else {
            var firstPart = 10 * 100;
            var secondPart = 10 * 80;
            var remaining = day - 20
            var thirdPart = remaining * 50
            total_cost = firstPart + secondPart + thirdPart
        }
    } else {
        console.log("please give the day")
    }
    return total_cost;
}
var hotel_cost = (hotelCost(11))
console.log(hotel_cost)



////////////megaFriend////////////

function megaFriend(Frined_name) {
    var longestWord = ''

    if (typeof Frined_name == 'object') {
        for (var i = 0; i < Frined_name.length; i++) {
            var element = Frined_name[i]
                // console.log(element)
            if (element.length > longestWord.length) {
                longestWord = element
            }
        }
    } else {
        longestWord = "jlkhasfl"
    }

    return longestWord;


}

var Frined_name = ["tonni", "sohel ahmed", "ali", "niso"];
var res = megaFriend(Frined_name)
console.log(res)