//JavaScript loop
//While loop
console.log(`<---*Concept of while loop*--->`);
let n = 1;
while( n != 10){
    console.log(`The value of n is:${n}`);
    n++;
}

//Do While loop
console.log(`<---*Concept of do while loop*--->`);
let num = 1;
do {
    console.log(`The value of n is:${num}`);
    num++;

}while(num != 10);
//for loop
console.log(`<---*Concept of for loop*--->`);
for(i  = 0; i <= 10; i++){
    console.log(`The value of i is:${i}`);
}
// for in loop
console.log(`<---*Concept of for in loop*--->`);
let arr = [2,3,5,6,6,6,6,5,5];
for(let i in arr){
    console.log(`Value of arr using for in loop:${arr[i]}`);
}
// for off loop
console.log(`<---*Concept of for of loop*--->`);
const arr2 = [39,39,59,93];
for(const element of arr2){
    console.log(`Value of arr2 using for of loop:${element}`)
}
//forEach loop
console.log(`<--*Concept of for each loop*-->`);
let arr3 = [30,94,59,39,39];
arr3.forEach((element)=>console.log(`The value of arr3 is:${element}`));
//Break & Continue
//Break Statement
console.log(`Example of break statemetn:`)
for( i = 0 ; i <= 40 ; i++){
    if(i === 30){
        break;
    }
    console.log(`The value of i is:${i}`);
}
//Continue statement
console.log(`Example of Continue statement:`);
for ( i = 1; i <= 20 ; i++){
    if( i === 10){
        //console.log(`Skiped value is:${i}`);
        continue;
    }
    console.log(`The value of i is:${i}`);
}