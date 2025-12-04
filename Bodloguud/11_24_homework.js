// //1. Массивын бүх элементийн нийлбэр
// //sumArray(arr) — массивын бүх тоог нийлүүлж буцаа.
// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// const numbers = [10, 20, 30, 40, 50];
// const totalSum = sumArray(numbers);
// console.log(`Massiwiin niilber ni: ${totalSum}`);
// // =============================================================

// //2. Зурвасыг эсрэгээр эргүүлэх
// //reverseString(str) — string-г урвуу болго.
// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// const orginal = "Hello";
// const reversed = reverseString(orginal);
// console.log(`Ehnii zurwas: ${orginal}`);
// console.log(`Urwuu zurwas: ${reversed}`);

// // =============================================================

// //3. Хамгийн их тоо ол (array)
// //maxInArray(arr) — массив дахь хамгийн том тоо.
// function maxInArray(arr) {
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
// const number = [10, 5, 45, 21, 93, 15];
// const maxNumber = maxInArray(number);
// console.log(`Massiwiin hamgiin ih too: ${maxNumber}`);
// // =============================================================

// //4. Үгийг эхний үсгийг том болгох (capitalize)
// //capitalize(word)
// //Жишээ: "hello" → "Hello"

// function capitalize(word) {
//   const firstLetter = word[0].toUpperCase();
//   const remainingLetters = word.substring(1).toLowerCase();
//   return firstLetter + remainingLetters;
// }
// const world1 = "hello";
// const result1 = capitalize(world1);
// console.log(`"${world1}" -> "${result1}"`);

// const word2 = "jAvascRIPt";
// const result2 = capitalize(word2);
// console.log(`"${word2}" -> "${result2}"`);
// // =============================================================

// //5. Өгөгдсөн тооны факториал
// //factorial(n) — 5! гэх мэт.
// function factorial(n) {
//   let result = 1;
//   for (let i = 1; i <= n; i++) {
//     result = result * i;
//   }
//   if (n === 0) {
//     return 1;
//   }
//   return result;
// }
// const num1 = 8;
// const fact1 = factorial(num1);
// console.log(`${num1}!= ${fact1}`);

// const num2 = 0;
// const fact2 = factorial(num2);
// console.log(`${num2}!=${fact2}`);
// // =============================================================

// //6. Палиндром эсэхийг шалгах
// //isPalindrome(str) — урд хойд аль ч талаараа ижил эсэх.
// function isPalindrome(str) {
//   const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const len = cleanedStr.length;
//   for (let i = 0; i < len / 2; i++) {
//     if (cleanedStr[i] !== cleanedStr[len - 1 - i]) {
//       return false;
//     }
//   }
//   return true;
// }

// const word6 = "Madam";
// const result6 = isPalindrome(word6);
// console.log(`"${word6}" polindorm uu? ${result6}`);

// // Жишээ 2 (Хоосон зай, тэмдэгт агуулсан Палиндром):
// const phrase = "A man, a plan, a canal: Panama";
// const result66 = isPalindrome(phrase);
// console.log(`"${phrase}" палиндром уу? ${result66}`); // true

// // Жишээ 3 (Палиндром биш):
// const word3 = "hello";
// const result3 = isPalindrome(word3);
// console.log(`"${word3}" палиндром уу? ${result3}`); // false
// // =============================================================

// // 7. Массивын сүүлийн элементийг авах
// // lastItem(arr) — массивын хамгийн сүүлийн элемент.

// /**
//  * Өгөгдсөн массивын хамгийн сүүлийн элементийг буцаана.
//  * @param {Array} arr - Элемент авах массив.
//  * @returns {*} Хамгийн сүүлийн элемент.
//  */
// function lastItem(arr) {
//   // Массивын урт (length) -аас 1-ийг хассан индексээр элементийг авна.
//   return arr[arr.length - 1];
// }

// // Жишээ 1:
// const numbers7 = [10, 20, 30, 40, 50]; // Урт: 5. Сүүлийн индекс: 5-1 = 4.
// const last1 = lastItem(numbers7);
// console.log(`Эхний массивын сүүлийн элемент: ${last1}`); // 50

// // Жишээ 2:
// const fruits = ["Apple", "Banana", "Cherry"]; // Урт: 3. Сүүлийн индекс: 3-1 = 2.
// const last2 = lastItem(fruits);
// console.log(`Хоёр дахь массивын сүүлийн элемент: ${last2}`); // Cherry
// // =============================================================

// // 8. Давтамж тоолох
// // countOccurrences(arr, item) — Массивд item хэд байгааг тоолоод буцаа.

// /**
//  * Массив доторх item элементийн давтамжийг тоолно.
//  * @param {Array} arr - Шалгах массив.
//  * @param {*} item - Хайж буй элемент.
//  * @returns {number} Давтамжийн тоо.
//  */
// function countOccurrences(arr, item) {
//   let count = 0; // Давтамжийн тоог хадгалах хувьсагч

//   // Массивын элемент бүрээр давтана
//   for (let i = 0; i < arr.length; i++) {
//     // Одоогийн элемент хайж буй item-тай тэнцүү эсэхийг шалгана
//     if (arr[i] === item) {
//       count++; // Тэнцүү бол тоолуурыг нэгээр нэмэгдүүлнэ
//     }
//   }

//   return count;
// }

// // Жишээ 1: Тоо тоолох
// const numbers8 = [1, 5, 2, 8, 5, 3, 5, 9];
// const itemToCount1 = 5;
// const count1 = countOccurrences(numbers8, itemToCount1);
// console.log(`Массив дотор ${itemToCount1} тоо ${count1} удаа давтагдсан.`); // 3

// // Жишээ 2: Үг тоолох
// const fruits1 = ["apple", "banana", "apple", "cherry", "apple"];
// const itemToCount2 = "apple";
// const count2 = countOccurrences(fruits1, itemToCount2);
// console.log(`Массив дотор "${itemToCount2}" үг ${count2} удаа давтагдсан.`); // 3

// // =============================================================
// // 9. Богино үгийг олох
// // shortestWord(str) — өгүүлбэрт байгаа хамгийн богино үгийг буцаа.

// /**
//  * Өгүүлбэрт байгаа хамгийн богино үгийг олно.
//  * @param {string} str - Өгөгдсөн өгүүлбэр.
//  * @returns {string} Хамгийн богино үг.
//  */
// function shortestWord(str) {
//   // 1. Өгүүлбэрийг "хоосон зай"-гаар салгаж, үгсээ массив болгоно.
//   // Ингэхдээ олон хоосон зай, цэг таслал зэргийг үл тооцон зөвхөн үгсийг авахын тулд
//   // Regular Expression-ээр салгах нь илүү найдвартай (split(/\s+/)).
//   const words = str.split(/\s+/).filter((word) => word.length > 0);

//   // 2. Хамгийн богино үгийг хадгалах хувьсагчийг зарлана.
//   // Анхны утганд массивын эхний үгийг авна.
//   if (words.length === 0) {
//     return ""; // Хэрэв өгүүлбэр хоосон байвал хоосон мөр буцаана.
//   }

//   let shortest = words[0];

//   // 3. Үг бүрээр давталт хийж, уртыг харьцуулна.
//   for (let i = 1; i < words.length; i++) {
//     const currentWord = words[i].replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, ""); // Цэг, таслал зэргийг хасч шалгах

//     // Одоогийн үгийн урт одоогоор тогтоогдсон хамгийн богино үгийн уртаас бага бол
//     if (currentWord.length < shortest.length) {
//       shortest = currentWord; // Хамгийн богино үгийг шинэчилнэ.
//     }
//   }

//   // 4. Хамгийн богино үгийг буцаана.
//   return shortest;
// }

// // Жишээ 1:
// const sentence1 = "Манай дэлхий маш өргөн, бас үзэсгэлэнтэй.";
// const result9 = shortestWord(sentence1);
// console.log(`"${sentence1}" - Хамгийн богино үг: ${result9}`); // бас (3 үсэг)

// // Жишээ 2:
// const sentence2 = "Програмчлал нь хөгжилтэй.";
// const result99 = shortestWord(sentence2);
// console.log(`"${sentence2}" - Хамгийн богино үг: ${result99}`); // нь (2 үсэг)

// // =============================================================

// // 10. Массив дахь давхардсан элементийн жагсаалт гаргах
// // findDuplicates(arr) — давхардсан элементийн жагсаалтыг буцаа.

// /**
//  * Массив дахь давхардсан элементүүдийг олж, жагсаалт болгон буцаана.
//  * @param {Array} arr - Шалгах массив.
//  * @returns {Array} Давхардсан элементүүдийн массив.
//  */
// function findDuplicates(arr) {
//   // Элементүүдийг нэг удаа харсан эсэхийг бүртгэх Set (давхардалгүй цуглуулга)
//   const seen = new Set();

//   // Давхардсан элементүүдийг хадгалах Set (давхардалгүйгээр)
//   const duplicates = new Set();

//   // Массивын бүх элементээр давталт хийнэ.
//   for (const item of arr) {
//     // Хэрэв item-ийг "seen" (харсан) Set дотор байвал:
//     if (seen.has(item)) {
//       // Энэ нь давхардсан байна гэсэн үг. Duplicates Set-д нэмнэ.
//       duplicates.add(item);
//     } else {
//       // Өмнө нь хараагүй бол, "seen" Set-д нэмнэ.
//       seen.add(item);
//     }
//   }

//   // Duplicates Set-ийг массив руу хөрвүүлж буцаана.
//   return Array.from(duplicates);
// }

// // Жишээ:
// const numbers10 = [1, 2, 3, 2, 4, 1, 5, 3];
// const duplicatesList = findDuplicates(numbers10);

// console.log(`Эхний массив: [${numbers10}]`);
// console.log(`Давхардсан элементүүд: [${duplicatesList}]`); // [1, 2, 3]

// // Жишээ 2:
// const words = ["a", "b", "c", "a", "d", "c"];
// const dupsWords = findDuplicates(words);
// console.log(`Давхардсан үгс: [${dupsWords}]`); // ["a", "c"]
