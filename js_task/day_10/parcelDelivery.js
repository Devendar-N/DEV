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

let vehiclesUsed = {};
let deliveryDetailes;
let totalVehicles = 0;
for (let i = 0; i < parcels.length; i++) {
  let parcelsWeight = parcels[i].weight;
  let numberOfVehicles;
  for (let j = vehicles.length - 1; j >= 0; j--) {
    vehicleCapacity = vehicles[j].weightCapacity;
    numberOfVehicles = 0;

    while (parcelsWeight >= vehicleCapacity) {
      parcelsWeight -= vehicleCapacity;
      numberOfVehicles++;
    }
    if (numberOfVehicles > 0) {
      vehiclesUsed[vehicles[j].type] = numberOfVehicles;
    }
  console.log(`location: ${parcels[i].location} \nweight:${parcels[i].weight}`);
  let type ;
  for (type in vehiclesUsed) {
    deliveryDetailes = '';
    console.log(`${type} : ${vehiclesUsed[type]}`);
    totalVehicles = totalVehicles + numberOfVehicles;
  }
  console.log(`${type}\nTotal vehicles:${totalVehicles}`)}//opt prblm.........
}