var st = "i am a sohel"
var cou = 0;
for (let i = 0; i < st.length; i++) {
    var char = st[i];
    // if (char == " " && st[i - 1] != " ") {
    //     cou++
    // }

    if (char == 'a') {
        cou++
    }

    // if (st.charAt(i) != '') {
    //     cou++
    // }

}
console.log(cou)