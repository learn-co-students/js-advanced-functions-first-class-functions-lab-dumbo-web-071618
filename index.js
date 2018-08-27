const returnFirstTwoDrivers = function(arr)    {
    return [arr[0], arr[1]]
}

const returnLastTwoDrivers = function(arr)    {
    return [arr[arr.length - 2], arr[arr.length - 1]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function (admission)  {return admission * fare}
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrayOfDrivers, fn)   {
    return fn(arrayOfDrivers)
}