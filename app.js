let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = amount =>{   
    let amountInDollar = amount * oneEuroIs.USD;
    return amountInDollar;
}

const fromDollarToYen =  amount =>{
    let oneDollarIs = amount/oneEuroIs.USD;
    let oneYenIs = oneEuroIs.JPY;
    let amountInYen = oneDollarIs * oneYenIs;
    return amountInYen;
}

const fromYenToPound = amount =>{
    let oneYenIs = amount/oneEuroIs.JPY;
    let onePoundIs = oneEuroIs.GBP;
    let amountInPounds = oneYenIs * onePoundIs;
    return amountInPounds;
}
// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};