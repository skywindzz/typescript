const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

//if you are going to make an empty two dimensional array
//carsByMake: string[][] = [];

const carsByMake = [['f150'], ['corolla'], ['camero']];

/* 

1.TS can do type inference when we extra values out of array

2.prevent incompatable value, wheras if you are trying to put string into number array then you'll get a warning

3.we can get help with map, forEach or reduce
carMakers.map((car:string): string => {
  return car.toUpperCase();

})
*/
