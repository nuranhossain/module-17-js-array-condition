var me = 85;
var tom = 66;
var jane = 95;
var peter = 56;
var john = 40;

if(peter >= 80){
    console.log('A grade');
}
else if (peter >= 60){
    console.log('B grade');
}
else if (peter >= 50){
    console.log('C grade');
}
else if (peter >= 40){
    console.log('D grade');
}
else{
    console.log('Fail')
}

var marks = 66;

if(marks >=90 && marks <=100){
    console.log('A+');
}
else if (marks >=80 && marks <=100){
    console.log('A');
}
else if (marks >=70 && marks <=100){
    console.log('A-');
}
else if (marks >=60 && marks <=100){
    console.log('B');
} 
else if (marks >=50 && marks <=100){
    console.log('C');
} 
else if (marks >=40 && marks <=100){
    console.log('D');
} 


var num1 = 9;
var num2 = 8;
var num3 = 9;

if (num1 == num2 || num1 == num3 || num2 == num3){
    console.log('Isosceles')
}else{
    console.log('Not Isosceles')
}


// largest number 

var numbuer1 = 13;
var numbuer2 = 555;
var numbuer3 = 755;

if(numbuer1 > numbuer2 && numbuer1 > numbuer3){
    console.log(numbuer1 + ' largest number');
}else if (numbuer2 > numbuer1 && numbuer2 > numbuer3){
    console.log(numbuer2 + ' largest number');
}else{
    console.log(numbuer3 + ' Largetst Number');
}