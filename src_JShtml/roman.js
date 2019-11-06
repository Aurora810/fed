function roman(value) {
    if (isNaN(value))
        return "Error!";
    let digits = String(+value).split(""),
        key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
            "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
            "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        romani = "",
        i = 3;
    while (i--)
        romani = (key[+digits.pop() + (i * 10)] || "") + romani;
    return Array(+digits.join("") + 1).join("M") + romani;
}

function getInfo() {
    let result = document.getElementById("done");
    let value = document.getElementById("value").value;
    if (value >= 1 && value <= 3999) {
        result.value =roman(value) ;
    }
    else {
        result.value = "Error!";
    }
}

