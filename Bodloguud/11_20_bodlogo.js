// const too = 1234;
// let a = Math.floor(too / 1000);
// let b = Math.floor(too % 1000) / 100;
// let c = Math.floor(Math.floor(too % 1000) % 100) / 10;
// let d = Math.floor((too % 1000) % 100) % 10;
// console.log(d, c, b, a);

// //Bodlogo 1
// //Pinecone гэж 1 удаа хэвлэ.
// const string = "Pinecone";
// let a = 1;
// for (i = 0; i <= a; i++) {
//   console.log(string);
// }

//Bodlogo 2
//Pinecone гэж 10 удаа хэвлэ.
// const st = "Pinecone";
// let a = 10;
// for (i = 0; i <= a; i++) {
//   console.log(st, "loop");
// }

//Bodlogo 3
//Pinecone гэж n удаа хэвлэ.
// const str = "Pinecone";
// let n = 30;
// for (i = 0; i <= n; i++) {
//   console.log(str);
// }

//Bodlogo 4
//20 хүртэлх сондгой тоонуудыг хэвлэ
// for (let i = 0; i < 21; i++) {
//   if (i % 2 !== 0) console.log(i);
// }

//Bodlogo 5
//40 хүртэлх тэгш тоонуудыг хэвлэ.

// for (let i = 0; i < 41; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

//Bodlogo 5
//20 хүртэлх тэгш тоонуудын нийлбэрийг ол.
// let a = 0;
// for (let i = 0; i < 21; i++) {
//   if (i % 2 === 0) {
//     a = a + i;
//     console.log(a);
//   }
// }

//Bodlogo 6
// 40 хүртэлх сондгой тоонуудын нийлбэрийг ол.
// let a = 0;
// for (let i = 0; i < 41; i++) {
//   if (i % 2 !== 0) {
//     a = a + i;
//     console.log(a);
//   }
// }

//Bodlogo 7
//Өгөгдсөн n тооны нийлбэрийг ол.
// let n = 10;
// let a = 0;
// for (i = 0; i < n + 1; i++) {
//   a = a + i;
//   console.log(a);
// }

//Bodlogo 8
//100 гийн тоог n удаа нэм. (Example: 10, Result:1000)
// let a = 0;
// let n = 10;
// for (i = 0; i < n; i++) {
//   a = a + 100;
//   console.log(a);
// }

//Bodlogo 9
//5 хүртэлх тооны үржвэрийг ол.
// let a = 1;
// let n = 5;
// for (i = 1; i <= n; i++) {
//   a = a * i;
//   console.log(a);
// }

//Bodlogo 10
//125 хүртэлх сондгой тооны үржвэрийг ол.
// let a = 1;
// let n = 10;
// for (i = 1; i < n; i++) {
//   if (i % 2 !== 0) {
//     a = a * i;
//     console.log(a);
//   }
// }

//Bodlogo 11
//n тооны factorial- ийг ол.
// let fact = 5;
// let a = 1;
// for (i = 1; i <= fact; i++) {
//   a = a * i;
// }
// console.log(a);

//Bodlogo 12
//['apple', 'banana', 'orange'] массив дотор 'banana' байгаа эсэхийг шалга.

// const fruits = ["apple", "banana", "orange"];
// for (let i = 0; i < fruits.length; i++) {
//   const fruit = fruits[i];
//   if (fruit === "banana") {
//     console.log("banana bna");
//   }
// }

//Bodlogo 13
//['cat', 'dog', 'bird'] массив дотор 'dog' хэддэх индекст байгааг ол.

// const animals = ["cat", "dog", "bird"];
// for (let i = 0; i < animals.length; i++) {
//   const animal = animals[i];
//   if (animal === "dog") {
//     console.log(i);
//   }
// }