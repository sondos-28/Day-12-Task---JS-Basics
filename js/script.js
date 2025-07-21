
//****** data types ******//

var Num = 21;
var str = "Sondos Abo-Eleid";
var bool = true;
var undef;
var nu = null;
var test = NaN;

console.log(typeof(Num));
console.log(typeof(str));
console.log(typeof(bool));
console.log(typeof(undef));
console.log(typeof(nu));
console.log(typeof(test));


//****** تعديل علي النص ******//

var MyName = "Sondos Abo-Eleid";

console.log(MyName.toUpperCase());
console.log(MyName.toLowerCase());
console.log(MyName.length);
console.log(MyName.indexOf("A"));
console.log(MyName.charAt(8));
console.log(MyName.charCodeAt("S"));
console.log(MyName.slice(0,7));


//****** يكتب الرقم الاكبر ثم الاصغر (if)******//

var num1=32;
var num2=23;

if (num1>num2) {
    console.log(num1,num2);
}else{
    console.log(num2,num1);
}


//***** يدخل المستخدم رقم ويقوله اليوم (switch)*****//

var dayNumber = Number(window.prompt("Enter num:"));
switch (dayNumber) {
    case 1:
        console.log("Saturday");
        break;

    case 2:
        console.log("Sunday");
        break; 
        
    case 3:
        console.log("monday");
        break;
    
    case 4:
        console.log("tuesday");
        break;

    case 5:
        console.log("Wednesday");
        break;
       
    case 6:
        console.log("thursday");
        break; 
        
    case 7:
        console.log("Friday");
        break;    
    default:
        console.log("error");
        
}


//********** جدول ضرب **********//

for (var i=1; i<=12; i++){
    for (var j=1; j<=12; j++){
        console.log(i, '*', j, '=', i*j);
    }
}


//**** تصاعدي من 100 الى 1000 بمقدار زياده 100 *****//

var x=100;
while (x<=1000) {
    console.log(x);
    x +=100;
}


//**** تنازلى من 1000 الى 100 بمقدار نقصان 100 *****//

var z=1000;
do { 
    console.log(z);
    z -=100;
} while (z>=100);


//*******عمليات حسابية بالدوال*******//

var Number1=10 ;
var Number2=2 ;

function add(Number1,Number2) {
    var addsum = Number1+Number2;
    return addsum;
}
console.log(add(Number1,Number2));

var sub= (Number1, Number2) => Number1 - Number2;
console.log(sub(Number1,Number2));

var ex= function (Number1,Number2) {
    var exsum = Number1**Number2;
    return exsum;
}
console.log(ex(Number1,Number2));

var multi= (Number1, Number2) => Number1 * Number2;
console.log(multi(Number1,Number2));

function division(Number1,Number2) {
    var divisionsum = Number1/Number2;
    return divisionsum;
}
console.log(division(Number1,Number2));

var modulus= (Number1, Number2) => Number1 % Number2;
console.log(modulus(Number1,Number2));


//****** object ******//

var manager={
    fname :"tarek",
    age :55,
    gender :"male",
    son : {
        sondos: {
            age:20,
            gender:"female",
        }
    }
}

console.log(manager.son.sondos.age);

