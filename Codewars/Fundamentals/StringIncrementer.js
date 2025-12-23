function inc(str) {
    // Step 1: find where the numeric suffix starts
    let numberStart = str.length;
    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] >= "0" && str[i] <= "9") {
            // still part of the number, continue looping
        } else {
            numberStart = i + 1;
            break;
        }
    }

    // Step 2: split prefix and number
    let prefix = str.slice(0, numberStart);
    let number = str.slice(numberStart);

    // Step 3: increment number
    let newNumber;
    if (number === "") {
        newNumber = "1"; // no numeric suffix
    } else {
        newNumber = (parseInt(number) + 1).toString().padStart(number.length, "0");
    }

    // Step 4: combine and return
    return prefix + newNumber;
}

console.log(inc("foo"));