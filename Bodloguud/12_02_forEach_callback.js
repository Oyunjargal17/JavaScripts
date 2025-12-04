// 1. Массивын бүх элементийг хэвлэх [1,2,3] → 1 2 3 гэж console.log хийх
// const a = [1, 2, 3];
// function myFunction(a) {
//   console.log(a);
// }
// a.forEach(myFunction);

// 2. Нийлбэр олох (sum)forEach ашиглан [1,2,3,4] → 10
// const a = [1, 2, 3, 4];
// let b = 0;
// function sum(a) {
//   b = b + a;
// }
// a.forEach(sum);
// console.log(b);

// 3. Хэрвээ тоо 5-аас их бол тусад нь push хийх[1,6,3,8] → [6,8]
// const num = [1, 6, 3, 8];
// let hoosonArray = [];
// num.forEach(function maxPush(a) {
//   if (a > 5) {
//     hoosonArray.push(a);
//   }
// });
// console.log(hoosonArray);
// -------------------------------------------
// const num = [1, 6, 3, 8];
// let hoosonArray = [];
// function maxPush(a) {
//   if (a > 5) {
//     hoosonArray.push(a);
//   }
// }
// num.forEach(maxPush);
// console.log(hoosonArray);

// 4. Тоонуудыг шалгаад тэгш эсвэл сондгой гэж хэвлэх [1,2,3] → 1 → odd 2 → even 3 → odd
// const nums = [1, 2, 3];
// function oddEven(nums) {
//   if (nums % 2 === 0) {
//     console.log(nums, "->", "Even");
//   } else {
//     console.log(nums, "->", "odd");
//   }
// }
// nums.forEach(oddEven);

// 5. Шинэ массив руу 2 дахин үржүүлж push хийх [1,2,3] → [2,4,6]
// const nums = [1, 2, 3];
// let hoosonArray = [];
// function double(nums) {
//   let a = nums * 2;
//   hoosonArray.push(a);
//   //   console.log(nums, "->", a);
// }
// nums.forEach(double);
// console.log(hoosonArray);

// 6. Нэр бүрийн ард “-student” нэмээд хэвлэх ["Bold", "Suren"] → Bold-student, Suren-student
// const str = ["Bold", "Suren"];
// function add(str) {
//   let a = str + "-student";
//   console.log(a);
// }
// str.forEach(add);

// 7. Массивт хэдэн элемент байгааг forEach ашиглан count хийх ["a","b","c"] → 3
// const arr = ["a", "b", "c"];
// let a = 0;
// function count() {
//   a++;
// }
// arr.forEach(count);
// console.log(a);
// -----------------------------------------------
// const arr = ["a", "b", "c"];
// function count(letter) {
//   letter = arr.length;
//   console.log(letter);
// }
// arr.forEach(count);

// 8. “a” үсэг агуулсан үгсийг ялгаж хэвлэх ["bat","dorj","amar"] → bat, amar
// const str = ["bat", "dorj", "amar"];
// function aUseg(word) {
//   let foundA = false;
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === "a") {
//       foundA = true;
//       break;
//     }
//   }
//   if (foundA) {
//     console.log(word);
//   }
// }
// str.forEach(aUseg);

// 9. Тоонуудын сөрөг утгыг console.log хийх [3,-2,5,-10] → -2, -10
// const arr = [3, -2, 5, -10];
// function negative(num) {
//   if (num < 0) {
//     console.log(num);
//   }
// }
// arr.forEach(negative);

// 10. Array доторх бүх text-ийн эхний үсгийг авах ["dog","cat"] → d, c
// const strs = ["dog", "cat"];
// const firstLetters = [];
// function getFirstLetter(word) {
//   firstLetters.push(word[0]);
// }
// strs.forEach(getFirstLetter);
// console.log(firstLetters);
