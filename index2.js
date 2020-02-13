const { nextISSTimesForMyLocation } = require('./iss_promised');


nextISSTimesForMyLocation()
  .then((passTimes) => {
    for (const pass of passTimes) {
      let date = new Date(pass.risetime * 1000);
      console.log(`Next pass at ${date.toString()} for ${pass.duration} seconds!`)
    }
  })
  .catch(error => {
    console.log(`It didn't work: ${error.message}`);
  });