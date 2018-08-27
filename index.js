const myFunc = function(drivers) {
    return [drivers[0], drivers[1]];
  }

const returnFirstTwoDrivers = function(drivers) { return myFunc(drivers) }


const returnLastTwoDrivers = function (drivers) {
  const myFunc = function() {
    return [drivers[drivers.length-2], drivers[drivers.length-1]]};
return myFunc();
  }

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
  return function(n) {
    return n * int;
  }
}

const fareDoubler =
createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(drivers, cb) {
  if (cb == returnFirstTwoDrivers) {
  return   returnFirstTwoDrivers(drivers)
  } else {
    return returnLastTwoDrivers(drivers)
    }
}
