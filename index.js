console.log("Hello World!");

//N1
let numb = 100;

if (numb < 50){
    console.log('ნაკლებია 50-ზე')
}
else if (numb > 20){
    console.log ('მეტია 20-ზე')
}
else{
    console.log('შეცდომა')
}

//N1-2
let num = 100 < 50 ? 'ნაკლებია 50-ზე': (100 > 20 ?  'მეტია 20-ზე' : NaN)

console.log(num);



//N2
let names = 'მარიამ';
if (names = 'მარიამ'){
    console.log('true')
}
else {
    console.log('false')
}


//N3
let mariam = 'მარიამ';
switch(mariam){
    case mariam:
        console.log('true')
        break;
    default:
        console.log('false')
}

//N4
let text = 'ნებისმიერი'
console.log(typeof text)

//N5
let number = 10
console.log (String(number))


