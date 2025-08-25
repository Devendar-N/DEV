/*const vehicles = [
  { type: 'cycle', weightCapacity: 1},
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];
const parcels = [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];
a. Calculate the minimum number of vehicles required to deliver the parcel for each location
b. Make the most of the weight that each vehicle can carry. There shouldn't be any wasted space in the vehicle*/
const vehicles = [
  { type: 'cycle', weightCapacity: 1 },
  { type: 'bike', weightCapacity: 5 },
  { type: 'auto', weightCapacity: 20 },
  { type: 'ace', weightCapacity: 50 },
  { type: 'tempo', weightCapacity: 100 }
];
const parcels = [
  { location: 'velachery', weight: 30 },
  { location: 'madipakkam', weight: 17 },
  { location: 'sholinganallur', weight: 240 }
];
function processParcelDeliver(availableVehicles, availableParcels) {
  if (Object.keys(vehicles).length === 0 || Object.keys(parcels).length === 0) {
    console.error("Empty input!. please check your input.");
  }
  else if (typeof vehicles !== 'object' || typeof parcels !== 'object') {
    console.error("Invalid input");
  }
  else {
    //Sort vehicles by descending weight capacity
    for (let i = 0; i < availableVehicles.length; i++) {
      for (let j = 0; j < availableVehicles.length; j++) {
        if (availableVehicles[i].weightCapacity < availableVehicles[j].weightCapacity) {
          let swap_varialbe = availableVehicles[i];
          availableVehicles[i] = availableVehicles[j];
          availableVehicles[j] = swap_varialbe;
        }
      }
    }

    //loop through parcel to get weight
    for (let i = 0; i < availableParcels.length; i++) {
      let vehiclesUsed = {};
      let parcelsWeight = availableParcels[i].weight;

      //loop through vehicles to get vehicles capacity
      for (let j = availableVehicles.length - 1; j >= 0; j--) {
        let vehicleCapacity = availableVehicles[j].weightCapacity;
        let vehiclesCount = 0;

        while (parcelsWeight >= vehicleCapacity) {
          parcelsWeight -= vehicleCapacity;
          vehiclesCount++;
        }

        if (vehiclesCount > 0) {
          vehiclesUsed[availableVehicles[j].type] = vehiclesCount;
        }
      }

      // display result
      console.log(`\nlocation: ${availableParcels[i].location}`);
      let totalVehicles = 0;
      for (let type in vehiclesUsed) {
        console.log(`${type} : ${vehiclesUsed[type]}`);
        totalVehicles += vehiclesUsed[type]
      }
      console.log(`Total vehicles:${totalVehicles}`)
    }
  }
}
processParcelDeliver(vehicles, parcels)