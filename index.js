const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (array) => {
  // return (function(array) {
  //   return [array[0],array[1]]
  // })(array)

  const fcn = (array) => ([array[0],array[1]])
  return fcn(array)

  // const fcn = function(array){
  //   return [array[0],array[1]]
  // }
  // return fcn(array)
}

const returnLastTwoDrivers = array => {
  let last = array.length - 1
  const fcn = array => [array[last - 1],array[last]]
  return fcn(array)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (multiplier) => {
  return (fare) => {
    return multiplier * fare
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers,cb) => {
  return cb(drivers)
}
