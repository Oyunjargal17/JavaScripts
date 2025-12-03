// filter+reduce+map бодлого
// 1. Тэгш тоонуудын квадратын нийлбэр
// [1,2,3,4,5,6] → 2²+4²+6² = 56
// const arr = [1, 2, 3, 4, 5, 6];
// const oddEven = arr.filter((numOddEven) => {
//   if (numOddEven % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(oddEven);
// const cube = oddEven.map((numCube) => {
//   return numCube * numCube;
// });
// console.log(cube);

// 2. 5-аас их тоонуудыг 3-аар үржүүлж нийлбэр
// [2,6,4,10] → 63 + 103 = 48
// const arr = [2, 6, 4, 10];
// const maxFive = arr.filter((num) => {
//   if (num > 5) {
//     return true;
//   } else {
//     return false;
//   }
// });
// console.log(maxFive);
// const multiplication = maxFive.map((num) => {
//   return num * 3;
// });
// console.log(multiplication);
// let sum = multiplication.reduce((accum, currentValue) => {
//   return accum + currentValue;
// }, 0);
// console.log(sum);

// 3. 3-аар хуваагдах тоонуудын квадратын нийлбэр
// [3,4,6,7,9] → 3²+6²+9² = 126
// const arr = [3, 4, 6, 7, 9];
// const divided = arr.filter((num) => num % 3 === 0);
// console.log(divided);
// const cube = divided.map((num) => num * num);
// console.log(cube);
// const sum = cube.reduce((acum, currentValue) => acum + currentValue);
// console.log(sum);

// 4. 10-аас бага тоонуудын кубын нийлбэр
// [2,5,12,7] → 2³+5³+7³ = 476
// const arr = [2, 5, 12, 7];
// const minTen = arr.filter((num) => num < 10);
// console.log(minTen);
// const cube = minTen.map((num) => num * num * num);
// console.log(cube);
// const sum = cube.reduce((accum, currentValue) => accum + currentValue);
// console.log(sum);

// 5. 0-с их тоонуудыг 2 дахин үржүүлж нийлбэр
// [-2,3,0,5,-1] → (32 + 52) = 16
// const arr = [-2, 3, 0, 5, -1];
// const multiplication = arr.filter((num) => num > 0);
// console.log(multiplication);
// const cube = multiplication.map((num) => num * 2);
// console.log(cube);
// const sum = cube.reduce((accum, currentValue) => accum + currentValue);
// console.log(sum);

// 6. 2-аар хуваагдах тоонуудын дундаж
// [2,5,8,10] → (2+8+10)/3 = 6.666…
// const arr = [2, 5, 8, 10];
// const avarge = arr.filter((num) => num % 2 === 0);
// console.log(avarge);
// const sum = avarge.reduce((accum, currentValue) => accum + currentValue);
// console.log(sum);
// const avargeResult = sum / avarge.length;
// console.log(avargeResult);

// 7. 3-аар хуваагдах тоонуудын дундаж
// [3,4,6,7,9] → (3+6+9)/3 = 6
// const arr = [3, 4, 6, 7, 9];
// const avarge = arr.filter((num) => num % 3 === 0);
// console.log(avarge);
// const sum = avarge.reduce((accum, currentValue) => accum + currentValue);
// console.log(sum);
// const avargeResult = sum / avarge.length;
// console.log(avargeResult);

// 8. 5-аас их тоонуудыг модуль 2 үр дүнгээр шүүх, нийлбэр олох
// [2,6,4,10,7] → 6+4+10 = 20
// const arr = [2, 6, 4, 10, 7];
// const maxFive = arr.filter((num) => num > 5);
// console.log(maxFive);
// const divided = maxFive.filter((num) => num % 2 === 0);
// console.log(divided);
// const sum = divided.reduce((accum, currentValue) => accum + currentValue);
// console.log(sum);

// 9. 3-аас бага тоонуудын үржвэр
// [1,2,3,4,5] → 1*2 = 2
// const arr = [1, 2, 3, 4, 5];
// const min = arr.filter((num) => num < 3);
// console.log(min);
// const multiplication = min.reduce(
//   (accum, currentValue) => accum * currentValue
// );
// console.log(multiplication);

// 10. 5-аас бага тоонуудын квадратын нийлбэр
// [1,2,3,6,7] → 1²+2²+3² = 14
// const arr = [1, 2, 3, 6, 7];
// const minFive = arr.filter((num) => num < 5);
// console.log(minFive);
// const multiplication = minFive.map((num) => num * num);
// console.log(multiplication);
// const sum = multiplication.reduce(
//   (accum, currentValue) => accum + currentValue
// );
// console.log(sum);

// 11. 10-аас их тоонуудын квадратын нийлбэр
// [5,12,8,20,3] → 12² + 20² = 544
// const arr = [5, 12, 8, 20, 3];
// const max = arr.filter((num) => num > 10);
// console.log(max);
// const multiplication = max.map((num) => num * num);
// console.log(multiplication);
// const sum = multiplication.reduce((accum, current) => accum + current);
// console.log(sum);

// 12. Тэгш тоонуудын кубын нийлбэр
// [1,2,3,4,5,6] → 2³+4³+6³ = 288
// const arr = [1, 2, 3, 4, 5, 6];
// const oddEven = arr.filter((num) => num % 2 === 0);
// console.log(oddEven);
// const cube = oddEven.map((num) => num * num * num);
// console.log(cube);
// const sum = cube.reduce((accum, current) => accum + current);
// console.log(sum);

// 13. 3-аар хуваагдах тоонуудын кубын нийлбэр
// [3,4,6,7,9] → 3³+6³+9³ = 972
// const arr = [3, 4, 6, 7, 9];
// const divided = arr.filter((num) => num % 3 === 0);
// console.log(divided);
// const cube = divided.map((num) => num * num * num);
// console.log(cube);
// const sum = cube.reduce((accum, current) => accum + current);
// console.log(sum);

// 14. 0-с их тоонуудын квадратын нийлбэр
// [-5,0,4,7,-1] → 4²+7² = 65
// const arr = [-5, 0, 4, 7, -1];
// const max = arr.filter((num) => num > 0);
// console.log(max);
// const cube = max.map((num) => num * num);
// console.log(cube);
// const sum = cube.reduce((accum, current) => accum + current);
// console.log(sum);

// 15. 10-аас их тоонуудыг 2 дахин үржүүлж нийлбэр
// [8,12,15,5] → 122 + 152 = 54
// const arr = [8, 12, 15, 5];
// const max = arr.filter((num) => num > 10);
// console.log(max);
// const multiplication = max.map((num) => num * num);
// console.log(multiplication);
// const sum = multiplication.reduce((accum, current) => accum + current);
// console.log(sum);

// 16. 5-аас их тоонуудын модуль 3 үр дүнг нийлүүлэх
// [2,6,4,10,7] → 6%3 + 10%3 = 0+1 = 1
// const arr = [2, 6, 4, 10, 7];
// const max = arr.filter((num) => num > 5);
// console.log(max);
// const divided = max.map((num) => num % 3);
// console.log(divided);
// const sum = divided.reduce((accum, current) => accum + current);
// console.log(sum);

// 17. 5-аас бага тоонуудын модуль 2 үр дүнг нийлүүлэх
// [1,2,3,6,7] → 1%2 + 2%2 + 3%2 = 1+0+1 = 2
// const arr = [1, 2, 3, 6, 7];
// const min = arr.filter((num) => num < 5);
// console.log(min);
// const divided = min.map((num) => num % 2);
// console.log(divided);
// const sum = divided.reduce((accum, current) => accum + current);
// console.log(sum);

// 18. 3-аар хуваагдах тоонуудын квадратын нийлбэрийг мод 10
// [3,4,6,7,9] → (3²+6²+9²)%10 = 126%10 = 6
// const arr = [3, 4, 6, 7, 9];
// const divided = arr.filter((num) => num % 3 === 0);
// console.log(divided);
// const multiplication = divided.map((num) => num * num);
// console.log(multiplication);
// const sum = multiplication.reduce((accum, current) => accum + current);
// console.log(sum);
// const dividedTen = sum % 10;
// console.log(dividedTen);

// 19. 10-аас их тоонуудын квадратын нийлбэрийг мод 7
// [5,12,8,20,3] → (12² + 20²)%7 = 544%7 = 5
// const arr = [5, 12, 8, 20, 3];
// const max = arr.filter((num) => num > 10);
// console.log(max);
// const multiplication = max.map((num) => num * num);
// console.log(multiplication);
// const sum = multiplication.reduce((accum, current) => accum + current);
// console.log(sum);
// const dividedSeven = sum % 7;
// console.log(dividedSeven);

// 20. String массив: 5 үсгээс урт үгсийг filter → map → reduce ашиглан нийт урт
// ["hi","hello","hey","world","javascript"] → hello+world+javascript = 5+5+10=20
// const str = ["hi", "hello", "hey", "world", "javascript"];
// const max = str.filter((word) => word.length >= 5);
// console.log(max);
// const current = max.map((word) => word.length);
// console.log(current);
// const sum = current.reduce((accum, curr) => accum + curr);
// console.log(sum);
