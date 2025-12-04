// =======================MAP=================================
// 1. [1,2,3,4,5] массивын тэгш тоонуудыг 2 дахин өсгөж, сондгойг хэвээр үлдээх.
// const arr = [1, 2, 3, 4, 5];
// function doubleRice(a) {
//   if (a % 2 === 0) {
//     return a * 2;
//   } else {
//     return a;
//   }
// }
// const newArr = arr.map(doubleRice);
// console.log(newArr);

// 2. ["bat","dorj","suren"] массивын 3 үсгээс урт үгсийг том үсэгтэй болгох.
// const strs = ["bat", "dorj", "suren", "bataa", "dulmaa", "alimaa", "od", "och"];
// function longUpperCase(str) {
//   if (str.length > 3) {
//     return str.toUpperCase();
//     // console.log(result);
//   } else {
//     return str;
//   }
// }
// const newStrs = strs.map(longUpperCase);
// console.log(newStrs);

// 3. [1,2,3,4,5] массивын тэгш тоонуудыг квадрат болгох, сондгойг 0 болгох.
// const arr = [1, 2, 3, 4, 5];
// function arrOddEven(a) {
//   if (a % 2 === 0) {
//     return a * a;
//   } else {
//     return a * 0;
//   }
// }
// const newArr = arr.map(arrOddEven);
// console.log(newArr);

// 4. [10,15,20,25] массивын тоонуудыг 10-аар хасаж, 0-с бага бол 0 болгох.
// const arr = [10, 15, 20, 25];
// function minusMake(a) {
//   a = a - 10;
//   if (a > 0) {
//     return a;
//   } else {
//     return 0;
//   }
// }
// const newArr = arr.map(minusMake);
// console.log(newArr);

// 5. [1,2,3,4,5] массивын модуль 2 үр дүнг авах (0 эсвэл 1-ийн массив гаргах).
// const arr = [1, 2, 3, 4, 5];
// function results(a) {
//   if (a % 2 === 0) {
//     return 0;
//   } else {
//     return 1;
//   }
// }
// const newArr = arr.map(results);
// console.log(newArr);

// 6. ["hi","hello","hey"] массивын үгийн эхний болон сүүлийн үсгийг нийлүүлж шинэ массив үүсгэх.
// const arr = ["hi", "hello", "hey"];
// function addWord(word) {
//   let firstLetter = word[0];
//   let lastLetter = word[word.length - 1];
//   return firstLetter + lastLetter;
// }
// const newArr = arr.map(addWord);
// console.log(newArr);

// 7. [1,2,3,4] массивын тоонуудыг үнэгүй тэгш тоо → 1, бусад → 0 болгон хувиргах.
// const arr = [1, 2, 3, 4];
// function oddEven(a) {
//   if (a % 2 === 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }
// const newArr = arr.map(oddEven);
// console.log(newArr);

// 8. [100,200,300] массивын бүх элементийг 3-аар хуваахад гарсан үлдэгдлийг авах.
// const arr = [100, 200, 300];
// function divided(a) {
//   return a % 3;
// }
// const newArr = arr.map(divided);
// console.log(newArr);

// 9. [1,2,3,4,5,6] массивын 2 дахин үржүүлж, 10-аас их бол 10 болгох.
// const arr = [1, 2, 3, 4, 5, 6];
// function multiplyBy(a) {
//   a = a * 2;
//   if (a > 10) {
//     return (a = 10);
//   } else {
//     return a;
//   }
// }
// const newArr = arr.map(multiplyBy);
// console.log(newArr);

// 10. ["bat","dorj","suren","amaraa"] массивын 5 үсгээс урт үгсийг "LONG", бусдыг "SHORT" болгон хувиргах.
// const strs = ["bat", "dorj", "suren", "amaraa"];
// function longShort(word) {
//   if (word.length > 5) {
//     return "LONG";
//   } else {
//     return "SHORT";
//   }
// }
// const newStrs = strs.map(longShort);
// console.log(newStrs);

// ========================FOREACH================================
// 1. [1,2,3,4,5,6] массивын бүх элементийг тэгш эсвэл сондгой гэдгийг console-д хэвлэх.
// const arr = [1, 2, 3, 4, 5, 6];
// function oddEven(a) {
//   if (a % 2 === 0) {
//     console.log(a, "= Even");
//   } else {
//     console.log(a, "= Odd");
//   }
// }
// arr.forEach(oddEven);

// 2. [10,15,20,25,30] массивын тэгш тоонуудын нийлбэрийг олох.
// const arr = [10, 15, 20, 25, 30];
// let totalEvenSum = 0;
// function evenSum(number) {
//   if (number % 2 === 0) {
//     totalEvenSum += number;
//   }
// }
// arr.forEach(evenSum);
// console.log("Tegsh toonuudiin niilber:", totalEvenSum);

// 3. [1,2,3,4,5] массивын 2-аар хуваагдаж байгаа эсэхийг шалгаж, boolean массив руу push хийх.
// const arr = [1, 2, 3, 4, 5];
// const booleanArr = [];
// function oddEven(number) {
//   if (number % 2 === 0) {
//     booleanArr.push(true);
//     // console.log("true");
//   } else {
//     booleanArr.push(false);
//     // console.log("false");
//   }
// }
// arr.forEach(oddEven);
// console.log(booleanArr);

// 4. [3,6,9,12] массивын 3-аар хуваагдах тоог count хийх.
// const arr = [3, 6, 9, 12];
// let count = 0;
// function divided(number) {
//   if (number % 3 === 0) {
//     count++;
//   }
// }
// arr.forEach(divided);
// console.log(count);

// 5. ["hi","hello","hey","hola"] массивын 5 үсгээс урт үгийг console-д хэвлэх.
// const strs = ["hi", "hello", "hey", "hola"];
// function longShort(word) {
//   if (word.length >= 5) {
//     console.log(word);
//   }
// }
// strs.forEach(longShort);

// 6. [1,2,3,4,5] массивын бүх элементийг 2 дахин үржүүлж, 5-аас их бол "BIG", бусад бол "SMALL" гэж console-д хэвлэх.
// const arr = [1, 2, 3, 4, 5];
// function doubleRice(number) {
//   number = number * 2;
//   if (number > 5) {
//     console.log("BIG");
//   } else {
//     console.log("SMALL");
//   }
// }
// arr.forEach(doubleRice);

// 7. [100,50,200,25] массивын 50-аас их утгуудыг шинэ массив руу push хийх.
// const arr = [100, 50, 200, 25];
// const newArr = [];
// function maxPush(number) {
//   if (number > 50) {
//     newArr.push(number);
//   }
// }
// arr.forEach(maxPush);
// console.log(newArr);

// 8. [1,2,3,4,5,6] массивын бүх элементийг тэгш тоо → "even", сондгой → "odd" гэж console-д хэвлэх.
// const arr = [1, 2, 3, 4, 5, 6];
// function oddEven(number) {
//   if (number % 2 === 0) {
//     console.log(number, "=even");
//   } else {
//     console.log(number, "=odd");
//   }
// }
// arr.forEach(oddEven);

// 9. [2,3,5,7,11] массивын prime эсэхийг шалгаж console-д хэвлэх. (1-ээс их ба өөр зүйлд хуваагддаггүй)
// const arr = [2, 3, 5, 7, 11, 30];
// function isPrime(number) {
//   if (number <= 1) {
//     return false;
//   }
//   for (let i = 2; i <= Math.sqrt(number); i++) {
//     if (number % 2 === 0) return false;
//   }
//   return true;
// }
// function checkAndPrint(number) {
//   if (isPrime(number)) {
//     console.log(number, "is prime");
//   } else {
//     console.log(number, "is not prime");
//   }
// }
// arr.forEach(checkAndPrint);

// 10. [1,2,3,4,5,6,7,8,9] массивын 3-ын үржвэрийг console-д хэвлэх.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function multiplication(number) {
  if (number % 3 === 0) {
    console.log(number);
  }
}
arr.forEach(multiplication);
