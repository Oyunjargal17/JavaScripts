// Bodlogo 1
// 10 аас 1 рүү буурах дарааллаар хэвлэ.
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 9; i >= 0; i--) {
//   const b = a[i];
//   console.log(b);
// }

// Bodlogo 2
// Өгөгдсөн n тооны хүрдийг харуул.
// Example:
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30

// const n = 3;
// for (let i = 1; i < 11; i++) {
//   //   console.log(i);
//   let a = i * n;
//   console.log(i, "*", n, "=", a);
// }

//Bodlogo 3
//2 ийн n зэргийг ол. (Example: 5. Result:32)
// const n = 5;
// let a = 1;
// for (let i = 0; i < n; i++) {
//   a = a * 2;
//   console.log(a);
// }

// Bodlogo 4
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)
//Huwilbar 1
// const a = 234;
// const b = a % 10;
// console.log(b);
// let c = a - b;
// console.log(c);

// let d = (c / 10) % 10;
// console.log(d);

// let e = a - d * 10 - b;
// console.log(e);

// let f = e / 100;
// console.log(f);

// let sum = f + d + b;
// console.log("niilber ni=", sum);

//Huwilbar 2
// const c = Math.floor(a / 10) % 10;
// console.log(c);

// const d = Math.floor(a / 100);
// console.log(d);

// const sum = b + c + d;
// console.log("nuulber ni=", sum);

//Bagsh hiij uguw
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)
// let n = 123456;
// let digit;
// let sum = 0;
// while (n > 0) {
//   digit = n % 10;
//   n = (n - digit) / 10;
//   sum += digit;
// }
// console.log(sum, "while loop");
// firstDigit = n % 10;
// n = (n - firstDigit) / 10;
// console.log(firstDigit, "firstDigit");
// console.log(n, "n");
// secondDigit = n % 10;
// n = (n - secondDigit) / 10;
// console.log(n, "n");
// thirdDigit = n % 10;
// n = (n - thirdDigit) / 10;
// console.log(n, "n");

// let count = 0;
// for (let i = 0; n > 0; i++) {
//   digit = n % 10;
//   console.log(digit);
//   n = (n - digit) / 10;
//   console.log(n);
//   sum += digit;
//   console.log(sum);
//   count++;
//   console.log(count);
// }
// console.log(sum, "for loop");
// console.log(count, "for loop, count");
// =========================================================
//2 toonii niilber oldog function bich
// let a = 3;
// let b = 5;
// function sum() {
//   let niilber = a + b;
//   console.log(niilber);
// }

//Bagsh bichej uguw
// function add(a, b) {
//   return a + b;
// }
// const sum = add(10, 7);
// console.log(sum);
// ==========================================================
//Bodlogo 5
//987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6

// let n = 9876543210;
// let count = 0;
// let sum = 0;
// for (let i = 0; n > 0; i++) {
//   digit = n % 10;
//   n = (n - digit) / 10;
//   sum += digit;
//   count++;
// }
// console.log(count, "for loop, count");

// ==========================================================
//6. Массивын урт
//getLength(arr) — массивын урт буцаа.
// 6. Массивын урт
// getLength(arr) — массивын урт буцаа.

/**
 * Өгөгдсөн массивын уртыг буцаана.
 * @param {Array} arr - Уртыг нь олох массив.
 * @returns {number} Массивын урт.
 */
function getLength(arr) {
  // Массивын уртыг .length property ашиглан буцаана
  return arr.length;
}

// Жишээ:
const data = [10, "a", true, 42];
const lengthResult = getLength(data);

console.log(`Массивын урт: ${lengthResult}`); // 4

// 6. Массивын урт (функцгүйгээр)

// 1. Массивыг зарлах
const myArr = ["a", 10, true, "end"];

// 2. Тухайн массивын .length property-ийг шууд хувьсагчид хадгалах
const arrayLength = myArr.length;

// 3. Үр дүнг хэвлэх
console.log(`Массивын урт нь: ${arrayLength}`);
// Үр дүн: Массивын урт нь: 4
// ==========================================================

// 7. Үсгийг том болгох
// toUpper(str) — өгөгдсөн үгийг том үсгээр буцаа.

/**
 * Өгөгдсөн тэмдэгт мөрийг бүхэлд нь том үсгээр буцаана.
 * @param {string} str - Том болгох тэмдэгт мөр.
 * @returns {string} Том үсгээр болгосон тэмдэгт мөр.
 */
function toUpper(str) {
  // str тэмдэгт мөрийн .toUpperCase() методыг ашиглан буцаана.
  return str.toUpperCase();
}

// Жишээ 1:
const word1 = "hello world";
const result1 = toUpper(word1);
console.log(`Эхний үр дүн: ${result1}`); // HELLO WORLD

// Жишээ 2:
const word2 = "JavA";
const result2 = toUpper(word2);
console.log(`Хоёр дахь үр дүн: ${result2}`); // JAVA

//Функцгүйгээр (Хялбар арга)
//Хэрэв та функцгүйгээр, шууд том үсэгт хөрвүүлэхийг хүсвэл:

const myWord = "javascript";
const upperCaseResult = myWord.toUpperCase();

console.log(`Том үсгээр: ${upperCaseResult}`); // JAVASCRIPT

// ========================================================

// 8. Тоо эерэг эсэх
// isPositive(n) — 0-с их бол true буцаа.

/**
 * Өгөгдсөн тоо 0-ээс их бол true буцаана.
 * @param {number} n - Шалгах тоо.
 * @returns {boolean} Эерэг бол true, үгүй бол false.
 */
function isPositive(n) {
  // n > 0 нөхцөлийн үр дүнг (true эсвэл false) шууд буцаана.
  return n > 0;
}

// Жишээ 1: Эерэг тоо
const result8 = isPositive(15);
console.log(`15 эерэг үү? ${result8}`); // true

// Жишээ 2: Сөрөг тоо
const result88 = isPositive(-7);
console.log(`-7 эерэг үү? ${result88}`); // false

// Жишээ 3: 0-ийг шалгах
const result888 = isPositive(0);
console.log(`0 эерэг үү? ${result888}`); // false

// ==================================================
// 9. Массивын эхний элементийг авах
// firstItem(arr) — массивын эхний элементийг буцаа.

/**
 * Массивын эхний элементийг (индекс 0) буцаана.
 * @param {Array} arr - Элемент авах массив.
 * @returns {*} Эхний элемент.
 */
function firstItem(arr) {
  // Массивын эхний элементийг 0-р индексээр авна.
  return arr[0];
}

// Жишээ 1:
const numbers = [10, 20, 30, 40];
const first1 = firstItem(numbers);
console.log(`Эхний массивын эхний элемент: ${first1}`); // 10

// Жишээ 2:
const names = ["Anu", "Bat", "Tsetseg"];
const first2 = firstItem(names);
console.log(`Хоёр дахь массивын эхний элемент: ${first2}`); // Anu
