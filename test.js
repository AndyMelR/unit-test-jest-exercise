// import the function sum from the app.js file
const { sum } = require('./app.js');

// start your first test
test('adds 14 + 9 to equal 23', () => {
    //inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // we expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("One dollar to be 105.58 yen", function(){
    const { fromDollarToYen } = require('./app.js')

    const yen = fromDollarToYen(0.833)
    const expected = 0.833 * 127.9;
   
     expect(fromDollarToYen(1)).toBeCloseTo((106.58),2);

})

test("One yen to be 6.25 pounds", function(){
    const { fromYenToPound } = require('./app.js')

    const pound = fromYenToPound(7.82)
    const expected = 7.82 * 0.8;
   
     expect(fromYenToPound(1000)).toBeCloseTo((6.25),2);

})