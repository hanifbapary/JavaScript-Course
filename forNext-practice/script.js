"use strict"
// //*problem
// //* We work for a bulding a smart home thermometer. Our most task is this: "Given an array of temperaturs of one day, Calculate the temperature amplitude, Keep in mind that somtime there might be a sansor error" 
// //* Amplitude means difference between highest and lowest temp

// //* pass 2 array as a argument 

// const temperature=[3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperature2=[12,0,10,18,40,"error", 23];

// const allTemp=temperature.concat(temperature2)

// const calcTempAmplitude=function(temp1, temp2){
//    const temp=temp1.concat(temp2)
//    let maxval= temp[0]
//    let minval=temp[0]
//    for(let i = 0; i < temp.length ; i++){
//       const curTemp=temp[i]
//       if(typeof curTemp !== 'number') continue
//       if(curTemp > maxval) maxval = curTemp
//       if(curTemp < minval) minval = curTemp
//    }  

//    return maxval - minval
// }

// const amplitude=calcTempAmplitude(temperature,temperature2);
// console.log(amplitude)


//* Fix a bug very Good bug
//* bug 
// function measerKelvin(){
//    const measerment={
//       type:"temp",
//       unit: "celcius",
//       value:Number(prompt("Deggre celcius"))
//    }
//    console.table(measerment)

//    const kelvin= measerment.value + 273;
//    return kelvin;
// }
// console.log(measerKelvin())

//* Challange 
// const data1=[17, 21, 23];
// const data2=[12, 5, -5, 0, 4 ];
// function printForecast(arr){
//    let str = "";
//    for(let i = 0; i < arr.length ; i++){
//       str = str + `${arr[i]}°C in ${i + 1} days...`
//    }
//    return str
// }
// console.log("...." + printForecast(data1))


//* Dom Menupulation classes practice
