// Reduce Бодлого
// 1. Тоонуудын нийлбэрийг ол[1,2,3,4,5] → 15
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((accum, currentValue) => {
//   console.log(accum, currentValue);
//   return accum + currentValue;
// }, 0);
// console.log("result:", result);

// 2. Тоонуудын үржвэрийг ол[2,3,4] → 24
// const numbers = [2, 3, 4];
// const result = numbers.reduce((accum, currentValue) => {
//   console.log(accum, currentValue);
//   return accum * currentValue;
// }, 1);

// console.log("result:", result);

// 3. Массив дахь хамгийн их тоог ол[10,30,5,22] → 30
// const numbers = [10, 30, 5, 22];
// const result = numbers.reduce((accum, currentValue) => {
//   console.log(accum, currentValue);
//   if (accum > currentValue) {
//     return accum;
//   } else {
//     return (accum = currentValue);
//   }
// }, 0);
// console.log("result:", result);

// 4. Массив дахь хамгийн бага тоог ол[10,3,20,7] → 3
// const numbers = [10, 3, 20, 7];
// const result = numbers.reduce((accum, currentValue) => {
//   console.log(accum, currentValue);
//   if (accum < currentValue) {
//     return accum;
//   } else {
//     return (accum = currentValue);
//   }
// });
// console.log("result:", result);

// 5. Текстүүдийг нэг мөр болгон нийлүүлэх["hi","hello","hey"] → "hihellohey"
// const str = ["hi", "hello", "hey"];
// const result = str.reduce((accum, currentValue) => {
//   console.log(accum, currentValue);
//   return accum + currentValue;
// }, "");
// console.log("result:", result);

// 6. String массивын нийт үсгийн тоог ол["hi","hello","hey"] → 2 + 5 + 3 = 10
// const str = ["hi", "hello", "hey"];
// const result = str.reduce((accum, currentValue) => {
//   console.log(accum, currentValue);
//   return accum + currentValue.length;
// }, 0);
// console.log("result:", result);
