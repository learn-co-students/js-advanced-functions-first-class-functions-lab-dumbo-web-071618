// Code your solution in this file!
// Declare a variable with const that is assigned an anonymous function.
const returnFirstTwoDrivers = function(drivers) {// The assigned function
// should accept an array of drivers as an argument
  // return the first two drivers in the array.
  return [drivers[0], drivers[1]];
};
// Declare a variable with const that is assigned an anonymous function.
const returnLastTwoDrivers = function(drivers) {// The assigned function should
// accept an array of drivers as an argument
  // return the last two drivers in the array.
  return [drivers[drivers.length - 2], drivers[drivers.length - 1]]
};
// This is an array containing two elements: the two functions that we
// previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
// This is a higher-order function that takes in one argument, an integer, and
// returns a function that will multiply a fare for a ride accordingly.
const createFareMultiplier = function(integer) {
  return function(fare) {
    return fare * integer;
  }
};
// Invoke createFareMultiplier() in such a way that the new fareDoubler()
// function accepts a fare as its lone argument and doubles it.
const fareDoubler = createFareMultiplier(2);
// Invoke createFareMultiplier() in such a way that the new fareTripler()
// function accepts a fare as its lone argument and triples it.
const fareTripler = createFareMultiplier(3);
// This function takes two arguments, an array of drivers and either the
// returnFirstTwoDrivers() or returnLastTwoDrivers() function.
const selectDifferentDrivers = function(arrayOfDrivers, func) {
  // Based on these two arguments, selectDifferentDrivers() will return either
  // the first two drivers or the last two drivers.
  return func(arrayOfDrivers);
};
