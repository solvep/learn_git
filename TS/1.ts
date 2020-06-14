enum CarTransmission {
  Automatic = 200,
  Manual = 300
}

interface Motorcycle {
  vType: "motorcycle"; // discriminant
  make: number; // year
}

interface Car {
  vType: "car"; // discriminant
  transmission: CarTransmission
}

interface Truck {
  vType: "truck"; // discriminant
  capacity: number; // in tons
}

type Vehicle = Motorcycle | Car | Truck;
const EVALUATION_FACTOR = Math.PI; 
function evaluatePrice(vehicle: Vehicle) {
  switch(vehicle.vType){
    case "car" :
      return vehicle.transmission * EVALUATION_FACTOR
    case "truck" : 
      return vehicle.capacity * EVALUATION_FACTOR
    case "motorcycle" : 
      return vehicle.make * EVALUATION_FACTOR
  }
}

const myTruck: Truck = { vType: "truck", capacity: 9.5 };
evaluatePrice(myTruck);
