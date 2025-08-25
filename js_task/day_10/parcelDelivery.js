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

//Sort vehicles by descending weight capacity
for(let i=0;i<vehicles.length;i++){
  for(let j=0;j<vehicles.length;j++){
    if(vehicles[i].weightCapacity<vehicles[j].weightCapacity){
      let swap_varialbe = vehicles[i];
      vehicles[i]=vehicles[j];
      vehicles[j]=swap_varialbe;
    }
  }
}

//loop through parcel to get weight
for (let i = 0; i < parcels.length; i++) {
  let vehiclesUsed = {};
  let parcelsWeight = parcels[i].weight;

  //loop through vehicles to get vehicles capacity
  for (let j = vehicles.length - 1; j >= 0; j--) {
    let vehicleCapacity = vehicles[j].weightCapacity;
    let vehiclesCount = 0;

    while (parcelsWeight >= vehicleCapacity) {
      parcelsWeight -= vehicleCapacity;
      vehiclesCount++;
    }

    if (vehiclesCount > 0) {
      vehiclesUsed[vehicles[j].type] = vehiclesCount;
    }
  }

  // display result
  console.log(`location: ${parcels[i].location}`);
  let totalVehicles =0 ;
  for (let type in vehiclesUsed) {
    console.log(`${type} : ${vehiclesUsed[type]}`);
    totalVehicles += vehiclesUsed[type]
  }
  console.log(`Total vehicles:${totalVehicles}`)}