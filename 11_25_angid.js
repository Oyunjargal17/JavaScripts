//3. Хамгийн их тоо ол (array)
//maxInArray(arr) — массив дахь хамгийн том тоо.

// const numbers = [100, 21, 37, 4];
// function maxInArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > sum) {
//       sum = arr[i];
//     }
//   }
//   return sum;
// }

// const sum = maxInArray(numbers);
// console.log(sum);
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

// function factorial(n) {
//   let fact = 1;
//   for (let i = 1; i <= n; i++) {
//     fact = fact * i;
//   }
//   console.log(fact);
// }
// factorial(5);
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
const str = "madam";
const firstChar = str[0];

// console.log(firstChar);

function isPalindrome(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    let urwuu=char;
    const char += str[i];
    
    console.log(char);
  }
  return char === str;
}
console.log(isPalindrome(str));

// const value = prompt("too oruul");
// console.log(value);
