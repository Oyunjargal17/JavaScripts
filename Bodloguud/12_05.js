//============================filter+map==========================================

// //1.  People array-аас 18 ба түүнээс дээш настай хүмүүсийн нэрийг шүүж гарга.
// const peoples = [
//   { name: "John", age: 17 },
//   { name: "Jane", age: 20 },
//   { name: "Jack", age: 18 },
// ];
// const newPeople = peoples.filter((obj) => obj.age >= 18);
// console.log(newPeople);
// // Үр дүн: ['Jane', 'Jack']

// //2. Зөвхөн эерэг тоонуудаар массив үүсгэ.
// const nums = [-5, 3, -1, 7, 0];
// const newNums = nums.filter((num) => num > 0);
// console.log(newNums);
// // Output: [3, 7]

// //3.  3 аас дээш тооны урттай элементүүдээр массив үүсгэ.
// const words = ["hi", "hello", "yo", "world"];
// const maxThree = words.filter((word) => word.length > 3);
// console.log(maxThree);
// // Output: ['hello', 'world']

// // 4. Доорх array аас сондгой тоонуудыг 2 дахин ихэсгэсэн массив үүсгэ.
// const numbers = [1, 2, 3, 4, 5];
// const oddEven = numbers.filter((num) => num % 2 !== 0);
// console.log(oddEven);
// const multiple = oddEven.map((num) => num * 2);
// console.log(multiple);
// Output: [2, 6, 10]

// //5. Pass хийсэн сурагдын firstname ийг нь upperCase болгосон array үүсгэ
// const students = [
//   { firstName: "John", lastName: "Doe", passed: true },
//   { firstName: "Jane", lastName: "Smith", passed: false },
//   { firstName: "Alice", lastName: "Jones", passed: true },
// ];

// const filterStudents = students.filter((student) => student.passed === true); //[]
// const newStudents = filterStudents.map((student) => {
//   const fullName = `${student.firstName} ${student.lastName}`;
//   return fullName.toUpperCase();
// });
// console.log(newStudents);
// Output: ['JOHN DOE', 'ALICE JONES']

// //6. хамгийн өндөр оноотой 3 дүнгээр нь массив үүсгэ.

const students = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 72 },
  { name: "D", score: 99 },
  { name: "E", score: 91 },
];
const maxScore = students.filter((student) => {});
let top3Student = [{ name: "", score: 0 }];
for (let i = 0; i < students.length; i++) {
  const student = students[i];
  //   console.log(student);
  if (top3Student[0].score < student.score) {
    top3Student[1] = top3Student[0];
    top3Student[0] = student;
    console.log(top3Student);
  } else {
    top3Student[2] = top3Student[1];
    top3Student[1] = student;
  }
  console.log(top3Student);
}
// // Output: ['D', 'B', 'E']

//=========================reduce=======================================

// //7. cart дахь бүх бараануудын үнийн дүнгийн нийлбэрийг ол
// const cart = [
//   { name: "Book", price: 10, quantity: 2 },
//   { name: "Pen", price: 2, quantity: 5 },
//   { name: "Notebook", price: 5, quantity: 3 },
// ];
// const newCart = cart.map((crt) => {
//   return crt.price * crt.quantity;
// });
// console.log(newCart);
// const newPrice = newCart.reduce((accum, curr) => accum + curr);
// console.log(newPrice);
// // Output: 10*2 + 2*5 + 5*3 = 20 + 10 + 15 = 45

// //8. Өгөгдсөн string төрлийн массив дотроос хамгийн урт үгийг ол.

// const words = ["hello", "world", "typescript", "js"];
// const newWords = words.map((word) => {
//   const letters = word.split("");
//   //   console.log(letters);
// });

// const max = words.reduce((acc, word) => {
//   if (acc.length > word.length) {
//     return (acc = acc);
//   } else {
//     return (acc = word);
//   }
// }, " ");
// console.log(max);
// Output: 'typescript'

// 9. Доорх массивын бүх элементүүдийн үсгийн нийлбэрийг ол

// const words = ["hi", "hello", "hey"];
// const newWords = words.map((word) => {
//   const letters = word.split("");
//   console.log(letters);
// });
// const sum = words.reduce((accum, word) => {
//   return (accum += word.length);
// }, 0);
// console.log(sum);
// // Output: 10

// //10. Хамгийн үнэтэй бүтээгдэхүүнийг харуул
// const products = [
//   { name: "Phone", price: 700 },
//   { name: "Phone", price: 1600 },
//   { name: "Phone", price: 1000 },
//   { name: "Monitor", price: 300 },
//   { name: "Laptop", price: 900 },
// ];
// const expensive = products.reduce((accum, product) => {
//   if (accum.price > product.price) {
//     return accum;
//   } else {
//     return product;
//   }
// }, products[0]);
// console.log(expensive);
// // Output: { name: "Phone", price: 1600 }

// //11. Бүх бүтээгдэхүүний нийлбэр үнийн дүнг ол

// const items = [
//   { name: "Chair", price: 80 },
//   { name: "Desk", price: 120 },
//   { name: "Lamp", price: 150 },
// ];
// const sum = items.reduce((accum, item) => {
//   return accum + item.price;
// }, 0);
// console.log(sum);

// // Output total: 270
