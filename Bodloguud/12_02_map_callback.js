// array method with callback бодлого
// MAP (10 бодлого)
// 1. Тоон массивыг квадратласан шинэ массив болго.
// const nums = [1, 2, 3, 4, 5];
// function arr(a) {
//   return a * a;
// }
// const newNums = nums.map(arr);
// console.log(newNums);

// 2. Тоонуудыг “тэгш” эсвэл “сондгой” гэсэн стринг болгон хувирга.
// const nums = [1, 3, 5, 8, 10];
// function arr(num) {
//   if (num % 2 === 0) {
//     return "tegsh";
//   } else {
//     return "sondgoi";
//   }
// }
// const newString = nums.map(arr);
// console.log(newString);

// 3. Массивын бүх элементэд “!” нэмээд console-д хэвлэх. ["hi", "ok"] → hi!, ok!
// const nums = ["hi", "ok"];
// function arr(num) {
//   return (num = num + "!");
// }
// const newString = nums.map(arr);
// console.log(newString);

// 4. Наснуудын массиваас 2025 он дээр үндэслэн төрсөн жилүүдийн массив гарга.
// const years = [1990, 1995, 2000, 2005, 2010];
// function nas(year) {
//   return 2025 - year;
// }
// const nowYear = years.map(nas);
// console.log(nowYear);

// 5. Стринг бүрийн эхний үсгийг том болго.
// const strs = ["hello", "world"];
// function upperCases(str) {
//   let result = "";
//   for (let i = 0; i < strs.length; i++) {
//     if (i === 0) {
//         result +=str[i].toUpperCase();
//     }
//     else {
//         result +=str[i];
//     }
//   }
// }
//   const splittedStr = str.split(""); // ["h", "e"]
//   const upperCaseChar = splittedStr[0].toUpperCase(); //H
//   splittedStr[0] = upperCaseChar; //
//   return splittedStr.join("");
// }
// // console.log(firstHeigth);
// const words = ["hello", "world"];
// const newWords = words.map(upperCases);
// console.log(newWords);

// 6. Стринг массивыг тэдгээрийн уртын массив болгон хувирга.
// function upperCases(str) {
//   const splittedStr = str.split(""); // ["h", "e"]

//   return splittedStr;
// }
// const words = ["hello", "world"];
// const newWords = words.map(upperCases);
// console.log(newWords);

// 7. Бүтээгдэхүүний массив дахь бүх үнэд 10% нэмсэн шинэ массив гарга.
// const sales = [1100, 1200, 1300];
// function une(sale) {
//   let nemsen = 0;
//   nemsen += sale * 1.1;
//   return nemsen;
// }
// const nemuuUne = sales.map(une);
// console.log(nemuuUne);

// 8. Тоонуудыг “₮1,200” гэх мэт форматтай мөнгөн дүнгийн стринг болго.
// function amount(str) {
//   const splittedStr = str.split("");
//   return "₮" + splittedStr.join("");
// }
// const words = ["1200"];
// const newWords = words.map(amount);
// console.log(newWords);

// 9. Boolean утгуудыг “ТИЙМ” эсвэл “ҮГҮЙ” стринг болгон хувирга.
// const nums = [1, 3, 5, 8, 10];
// function arr(num) {
//   if (num % 2 === 0) {
//     return "Тийм";
//   } else {
//     return "Үгүй";
//   }
// }
// const word = nums.map(arr);
// console.log(word);

// 10. Массив дотрох тоонуудыг 1-ээр нэмэгдүүлээд шинэ массив буцаа/хэвлэ
// const nums = [1, 3, 5, 8, 10];
// function plusOne(num) {
//   // console.log(num, "num");
//   //  console.log(num + 1, "num++");
//   return num + 1;
// }
// const newPlusNums = nums.map(plusOne);
// console.log(newPlusNums);
