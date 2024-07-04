//Array declaration
let arr = [39,39,59,4,48,48];
let arr2 = ["String","Robiul","Kasif"];
let arr3 = [true,false];
// print array element
console.log("This is my arr1:",arr);
console.log("This is my arr2:",arr2);
console.log("This is my arr3:",arr3);
//Accessing element by index
console.log("IndexOf arr:",arr[2]);
console.log("IndexOf arr:",arr[0]);
console.log("IndexOf arr:",arr[3]);
//isArray function is used to check is array or not
let isArray =Array.isArray(arr);
console.log("The given array is:",isArray);
//Creating an object
let obj = {
    "Name":"Robiul sk",
    "Gender":"Male",
    "Age":20,
}
console.log("This is an object:",obj);
let isArray2 = Array.isArray(obj);
console.log("This is an array:",isArray2);
//Check array length
let lengthofArray = arr.length 
console.log("The length of array is:",lengthofArray);
//Push element in an array
arr.push(200);
arr.push(300);
arr.push(390);
console.log("After pussing an element Array is:",arr);
//pop array element
arr.pop();
arr.pop();
arr.pop();
arr.pop();
console.log("After poping the array element is:",arr);
//unshif array element
arr.unshift(200);
arr.unshift(300);
arr.unshift(400);
arr.unshift(500);
console.log("After unshifting the array element is:",arr);
//Shift array element
arr.shift(500);
arr.shift(400);
arr.shift(300);
arr.shift(200);
arr.shift(100);
console.log("After shifting arry element is:",arr);
//converting an array to string
console.log("After converting array to string:",arr.toString());
console.log("The type of array is:",typeof arr);
let sum = 0 ;
for (i = 0; i < arr.length; i++){
    sum+=arr[i];
}
console.log(arr);
//Sort element from an array
console.log("After sort the array is:",arr.sort());
//Test the valueOf function();
console.log("The output of value of function:",arr.valueOf());
//Array desturing process
myArr = [30,39,35];
[a,b,c] = myArr;
console.log(`Value of a:${a}\nValue of b:${b}\nValue of c:${c}`);