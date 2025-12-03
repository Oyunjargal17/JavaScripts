// Filter бодлого
// 1. Тэгш тоонуудыг шүүн авах [1,2,3,4,5,6] → [2,4,6]
// const arr = [1, 2, 3, 4, 5, 6];
// function oddEven(number) {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const newArr = arr.filter(oddEven);
// =================================================
// const newArr = arr.filter((num) => num % 2 === 0);
// console.log(newArr);

// 2. Сондгой тоонуудыг шүүн авах[1,2,3,4,5] → [1,3,5]
// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.filter((num) => num % 2 !== 0);
// console.log(newArr);

// 3. 10-аас их тоонуудыг шүүн авах[5,12,8,30] → [12,30]
// const arr = [5, 12, 8, 30];
// const newArr = arr.filter((num) => num > 10);
// console.log(newArr);

// 4. 5 үсгээс урт үгсийг шүүх ["hi","hello","winter","cat"] → ["hello","winter"]
// const str = ["hi", "hello", "winter", "cat"];
// const newStr = str.filter((word) => word.length >= 5);
// console.log(newStr);

// 5. “a” үсэг агуулсан үгсийг шүүх["bat","dorj","amar","suren"] → ["bat","amar"]
// const str = ["bat", "dorj", "amar", "suren"];

// "bat" -> b===a, a === a, t===a

// const name = "bat";
// name.includes('a')

// const includedA = str.filter((name) => {
//   if (name.includes("a")) {
//     return true;
//   } else {
//     return false;
//   }
// });
// -----------------------------------------------------------
// const includedA = str.filter((name) => name.includes("a"));
// console.log(includedA);

// 6. 0-ээс их тоонуудыг шүүх[-3,0,5,-1,10] → [5,10]
// const arr = [-3, 0, 5, -1, 10];
// const newArr = arr.filter((num) => num > 0);
// console.log(newArr);

// 7. Тоонууд дундаас зөвхөн 3-аар хуваагдахыг шүүх[3,4,9,10,12] → [3,9,12]
// const arr = [3, 4, 9, 10, 12];
// const newArr = arr.filter((num) => num % 3 === 0);
// console.log(newArr);

// 8. Boolean массив → зөвхөн true байхыг шүүх[true,false,true,false] → [true,true]
// const str = [true, false, true, false];
// const newStr = str.filter((word) => word === true);
// console.log(newStr);

// 9. Эхний үсэг нь “s” үсгээр эхэлдэг үгсийг шүүх["snow","cat","sun","dark"] → ["snow","sun"]
// const str = ["snow", "cat", "sun", "dark"];
// const newStr = str.filter((word) => word[0].includes("s"));
// console.log(newStr);

// 10. Жагсаалтаас давхардсан үгсийг авах (тэнцүү эсэхээр шалгах)["a","b","a","c","b"] → "a", "b" давхардсан учир → ["a","b"]
// const chars = ["a", "b", "a", "c", "b"];
// const temp = [];
// const duplicate = chars.;
// let i = 0;
// function yesNo(letter) {
//   // for(let i=0; i<str.length; i++)
//   // {
//   //     temp.push(letter[i]);
//   //     if(letter[i])
//   // }
//   temp.push(letter[i]);
//   if(temp=)
//   console.log(temp);
// }
// const newArr = str.filter(yesNo);
// // console.log(newArr);
