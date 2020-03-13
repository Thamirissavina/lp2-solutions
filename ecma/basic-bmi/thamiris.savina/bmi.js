const weight = 150;
const height = 2;
const bmi = weight / height **2;

if (bmi < 18.5){
    console.log("Underweight");
} else if(bmi < 25 ){
    console.log("Normal weight");
} else if(bmi < 30){
    console.log("Overweight");
}else{
    console.log("Obesity");
}

