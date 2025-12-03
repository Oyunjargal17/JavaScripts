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
// const duplicate = chars.filter((char) => {
//   if (!temp.includes(char)) {
//     temp.push(char);
//     return false;
//   } else {
//     return true;
//   }
// });
// console.log(duplicate);

//Бодлого1 fruits = ["apple", "banana", "kiwi", "grape"] дотор "kiwi" байгаа эсэхийг шалгаад, үр дүнг hasKiwi хувьсагчид оноогоорой.
// const fruits = ["apple", "banana", "kiwi", "grape"];
// const hasKiwi = fruits.includes("kiwi");
// console.log(hasKiwi);

//fruits = ["apple", "banana", "kiwi", "grape"] массив дотор "orange"
// байгаа эсэхийг шалгаад, үр дүнг hasOrange хувьсагчид оноогоорой.

// const fruits = ["apple", "banana", "kiwi", "grape"];
// const hasOrange = fruits.includes("orange");
// console.log(hasOrange);

// members = ["Tuguldur", "Erdene", "Oyun", "Bat", "Namuun"]; массив дотор "Bat" нэртэй гишүүн байгаа бол, консолд
// "Багийн гишүүн Бат байна." гэж хэвлэх кодыг $includes()$-ийг ашиглан бичээрэй.
// const members = ["Tuguldur", "Erdene", "Oyun", "Bat", "Namuun"];
// if (members.includes("Bat")) {
//   console.log("Багийн гишүүн Бат байна.");
// }

// const shoppingCart = ["Mouse", "Monitor", "Webcam", "Bag"];  массив доторх бүтээгдэхүүнүүдээс
//const availableProducts = ["Laptop", "Mouse", "Keyboard", "Monitor"]; массив дотор байгаа бүтээгдэхүүнүүдийг
//filter() болон includes()-ийг ашиглан шүүж гаргаарай. Үр дүнг inStockItems хувьсагчид оноогоорой.
// const shoppingCart = ["Mouse", "Monitor", "Webcam", "Bag"];
// const availableProducts = ["Laptop", "Mouse", "Keyboard", "Monitor"];
// const inStockItems = shoppingCart.filter((item) =>
//   availableProducts.includes(item)
// );
// console.log(inStockItems);

//const allStudents = ["Anu", "Bataa", "Tsolmon", "Delger", "Enkhtuya"]; массив доторх сурагчдаас
//const passedStudents = ["Anu", "Tsolmon", "Enkhtuya"]; массив дотор байхгүй (өөрөөр хэлбэл, шалгалтад унасан) сурагчдыг
//filter() болон includes() -ийг ашиглан шүүж гаргаарай.
// Үр дүнг failedStudents хувьсагчид оноогоорой.
// const allStudents = ["Anu", "Bataa", "Tsolmon", "Delger", "Enkhtuya"];
// const passedStudents = ["Anu", "Tsolmon", "Enkhtuya"];
// const failedStudents = allStudents.filter(
//   (item) => !passedStudents.includes(item)
// );
// console.log(failedStudents);

//let colors = ["red", "green", "blue"];
// массив руу "yellow" гэсэн өнгийг push()-ийг ашиглан нэмээд,
// colors массивыг хэвлэж үр дүнг шалгаарай.
// let colors = ["red", "green", "blue"];
// colors.push("yellow");
// console.log(colors);

//let colors = ["red", "green", "blue"]; массив руу "purple" болон "pink" гэсэн өнгөнүүдийг нэг дор
// push()-ийг ашиглан нэмээд, colors массивыг хэвлэж үр дүнг шалгаарай.

// let colors = ["red", "green", "blue"];
// colors.push("purple", "pink");
// console.log(colors);

// let numbers = [1, 2, 3, 4, 5];
// let doubled = []; // Энэ массив руу push хийнэ.
//numbers массив доторх тоо тус бүрийг 2-оор үржүүлээд,
// үр дүнг нь doubled массив руу for\ of давталт болон push()-ийг ашиглан нэмээд,
// doubled массивыг хэвлэж үр дүнг шалгаарай.
// let numbers = [1, 2, 3, 4, 5];
// let doubled = []; // Энэ массив руу push хийнэ.
// for (let i = 0; i < numbers.length; i++) {
//   const result = numbers[i] * 2;
//   doubled.push(result);
// }
// console.log(doubled);

// const initialArr = [10, 25, 8, 40, 15];
// const largeNumbers = []; // Энэ массив руу push хийнэ.
//initialArr массив доторх 30-аас их тоонуудыг for\ of давталт, if нөхцөл,
// болон push() -ийг ашиглан largeNumbers массив руу нэмээд,
// largeNumbers массивыг хэвлэж үр дүнг шалгаарай.
// const initialArr = [10, 25, 8, 40, 15, 12, 33, 49, 32];
// const largeNumbers = []; // Энэ массив руу push хийнэ.
// for (let i = 0; i < initialArr.length; i++) {
//   const num = initialArr[i];
//   if (num > 30) {
//     largeNumbers.push(num);
//   }
// }
// console.log(largeNumbers);
// -------------------------------------------------------------
// const initialArr = [10, 25, 8, 40, 15, 12, 33, 49, 32];
// const largeNumbers = []; // Энэ массив руу push хийнэ.
// for (const num of initialArr) {
//   if (num > 30) {
//     largeNumbers.push(num);
//   }
// }
// console.log(largeNumbers);

//const numbers = [1, -5, 10, -3, 8, -20];
//const positiveNumbers = []; // Энэ массив руу push хийнэ.
//numbers массив доторх тоо тус бүрийг давтаж,
// сөрөг тоо (-5, -3, -20) байвал эерэг (absolute) утга болгоод,
// positiveNumbers массив руу push() хийгээрэй. Харин эерэг тоо байвал (1, 10, 8)
// өөрчлөхгүйгээр шууд push() хийнэ.
// const numbers = [1, -5, 10, -3, 8, -20];
// const positiveNumbers = []; // Энэ массив руу push хийнэ.
// for (let num of numbers) {
//   if (num < 0) {
//     num = num * -1;
//     positiveNumbers.push(num);
//   } else {
//     positiveNumbers.push(num);
//   }
// }
// console.log(positiveNumbers);

// --------------------------------------------------
const numbers = [1, -5, 10, -3, 8, -20];
const positiveNumbers = []; // Энэ массив руу push хийнэ.
for (const num of numbers) {
  positiveNumbers.push(Math.abs(num));
}
console.log(positiveNumbers);
