// Code your solution in this file!

const returnFirstTwoDrivers = function(array){


  return array.slice(0,2)


}

const returnLastTwoDrivers = function(array){

    return array.slice(-2)

}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(integer){
  const multiplier = function(fare){
      return fare * integer
    }
    return multiplier
}

function fareDoubler(fare){

  return fare * 2

}

function fareTripler(fare){

  return fare * 3
}

function selectDifferentDrivers(array, driverFunction){

  return driverFunction(array)

}
