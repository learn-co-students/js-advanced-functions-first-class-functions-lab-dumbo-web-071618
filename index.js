// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']

const returnFirstTwoDrivers = (function (array) {
  return array.slice(0,2)
})

const returnLastTwoDrivers = (function (array) {
  return array.slice(-2)
})

// const selectingDrivers = (function() {
//   const newarr = []
//   newarr.push(returnFirstTwoDrivers)
//   newarr.push(returnLastTwoDrivers)
//   return newarr
// })

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// const createFareMultiplier = function (int) {
//   return function (fare) {
//     return (fare * int)
//   }
// }

const createFareMultiplier = (function (int) {
  return function (fare) {
    return (fare * int)
  }
})

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

// const selectDifferentDrivers = (function (drivers, f) {
//   if(f === "returnFirstTwoDrivers"){
//     return returnFirstTwoDrivers(drivers)
//   }
//   else {
//     return returnLastTwoDrivers(drivers)
//   }
// })

const selectDifferentDrivers = (function (drivers, cb){
  return cb(drivers)
})
