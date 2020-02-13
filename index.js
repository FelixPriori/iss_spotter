
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  // Next pass at Fri Jun 01 2021 13:01:35 GMT-0700 (Pacific Daylight Time) for 465 seconds!
  for (const pass of passTimes) {
    let date = new Date(pass.risetime * 1000);
    console.log(`Next pass at ${date.toString()} for ${pass.duration} seconds!`)
  }
});