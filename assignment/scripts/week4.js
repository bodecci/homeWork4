
let parkedCars = [];//array of cars to be allowed in the garage
const maxCars = 7;//number of cars allowed in the garage
let position = 0;//variable to track position of car in the garage

function parkCar(carName){
  // push this new car into the parkedCars array
  if(parkedCars.length < maxCars){
    console.log('You can park here ');
    parkedCars.push(carName);
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
  //this is to check to see if the car is parked in the garage
    for(let i=0; i<parkedCars.length; i++){
      if(parkedCars[i] === karName){
        console.log('Your Car is parked here! at position', i);
        position = i;
        return true;
      }// end if
    }//end for loop searching thru parkedCars[]
        //console.log('Your car is not parked here: ');//I did not use else there
        //because once the iteration finishes and the car is not found, that means
        //it is not parked in the garage.
        return false;
}//end isParkedHere function


isParkedHere('danfo');
isParkedHere('molue');
isParkedHere('volks');

function takeForASpin(karsName){
  if(isParkedHere(karsName)){
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
