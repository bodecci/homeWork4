
let parkedCars = [];//array of cars to be allowed in the garage
const maxCars = 7;//number of cars allowed in the garage

function parkCar(carName){
  // push this new car into the parkedCars array
  if(parkedCars.length < maxCars){
    parkedCars.push(carName);
    console.log('You can park here ');
    return true;
  }//end of space to park
  else{
    console.log('no space to park your:', carName);
    return false;
  }//end no space to park
}//end of parkCar

parkCar('audi');
parkCar('volvo');
parkCar('van');
parkCar('molue');
parkCar('audi');
parkCar('benz');
parkCar('benx');
parkCar('danfo');
parkCar('volks');
parkCar('audi');

function isParkedHere(karName){
  if(parkedCars.includes(karName)){
    let position = parkedCars.indexOf(karName);
    console.log('Your Car is parked here at position: ', position);
    return true;
  }
  else{
    console.log('Your Car is not parked here!');
    return false;
  }
}

isParkedHere('danfo');
isParkedHere('danfo');
isParkedHere('molue');
isParkedHere('volks');



function takeForASpin(karsName){
  if(isParkedHere(karsName)){
    let position = parkedCars.indexOf(karsName);
    let carRemoved = parkedCars.splice(position,1);
    console.log('Car removed is: ', carRemoved);
  }//end of if
  else {
    console.log('No car was removed!');
    return false;
  }//end of else
}//end of takeForASpin function

takeForASpin('danfo');
takeForASpin('audi');
