//1. Массивын бүх элементийн нийлбэр
//sumArray(arr) — массивын бүх тоог нийлүүлж буцаа.
// const arr = [10, 20, 30, 40, 50];
// function sumArray(arr) {
//   let a = 0;
//   for (let i = 0; i < arr.length; i++) {
//     a += arr[i];
//   }
//   console.log(a);
// }
// sumArray(arr);
// ======================================================

//2. Зурвасыг эсрэгээр эргүүлэх
//reverseString(str) — string-г урвуу болго.

// function reversedString(str) {
//   for (let i = str.length - 1; i >= 0; i--) {
//     let st = str[i];
//     console.log(st);
//   }
// }
// reversedString("hello world");
// ======================================================

//3. Хамгийн их тоо ол (array)
//maxInArray(arr) — массив дахь хамгийн том тоо.
// const numbers = [35, 75, 99, 101, 58];
// function maxInArray(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const max = maxInArray(numbers);
// console.log(max);
// =====================================================

//4. Үгийг эхний үсгийг том болгох (capitalize)
//capitalize(word)
//Жишээ: "hello" → "Hello"
// const word = "hello";
// function capitalize(word) {
//   let tomUseg = "";
//   for (let i = 0; i < word.length; i++) {
//     if (i === 0) {
//       tomUseg += word[i].toUpperCase();
//     } else {
//       tomUseg += word[i];
//     }
//   }
//   console.log(tomUseg);
// }
// capitalize(word);
// ========================================================

//5. Өгөгдсөн тооны факториал
//factorial(n) — 5! гэх мэт.
// const number = 5;
// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= number; i++) {
//     fact = fact * i;
//   }
//   console.log(fact);
// }
// factorial(number);
// ========================================================

//6. Палиндром эсэхийг шалгах
//isPalindrome(str) — урд хойд аль ч талаараа ижил эсэх.

// const str = "hadgalagdah";

// function isPalindrome(str) {
//   let reversedString = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     const char = str[i];

//     reversedString += char;
//   }

//   return str === reversedString;

// }

// console.log(isPalindrome(str));

//uuruu bichew
// const word = "hadgalagdah";
// function isPalindrome(str) {
//   let urwuu = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     urwuu += str[i];
//     // console.log(urwuu);
//   }
//   return urwuu === str;
// }
// console.log(isPalindrome(word));

//7. Массивын сүүлийн элементийг авах
//lastItem(arr) — массивын хамгийн сүүлийн элемент.

// const numbers=[45,36,78,99,101,67,99,85];
// function lastItem(arr)
// {
//   let lastnumber=0;
//   for(let i=arr.length-1; i>=0; i--)
//   {
    
//     if(i===arr.length-1)
//     {
//       lastnumber=arr[arr.length-1];
//     }
    
//   }
//   console.log(lastnumber);
// }
// lastItem(numbers);

//9. Богино үгийг олох
//shortestWord(str) — өгүүлбэрт байгаа хамгийн богино үгийг буцаа.
// const string="uguulbert baigaa";
// function shortestWord(str)
// {
// for(let i=0; i<=string.length; i++)
// {
//   let sulZai=0;
//   if(sulZai===" ")
//   {
//     let ug= 
//   }
//   console.log(i);
// }
// }
// shortestWord(string);