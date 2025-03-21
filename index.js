// Functions for selecting drivers (already passing)
const returnFirstTwoDrivers = (drivers) => drivers.slice(0, 2);
const returnLastTwoDrivers = (drivers) => drivers.slice(-2);
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Higher-order function to create a fare multiplier
const createFareMultiplier = (multiplier) => {
  return (fare) => fare * multiplier;
};

// Functions to double and triple fares using createFareMultiplier
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

// Function to select drivers based on the passed function
const selectDifferentDrivers = (arrayOfDrivers, fn) => {
  return fn(arrayOfDrivers);
};
