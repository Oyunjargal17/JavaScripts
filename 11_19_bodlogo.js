// const cars = ["bmw", "toyoto", "tsahilgaan mashin", "benz", "benz"];
// console.log(cars);

//Bodlogo 1
//Өөрийн дуртай 5 жимсний жагсаалт үүсгээд, хамгийн эхний болон хамгийн сүүлийн жимсийг хэвлэ.

// const jims = ["alim", "ners", "guzeelzgene", "uhriin nud", "gadil"];
// console.log(jims.at(0), jims.at(4));

//Bodlogo 2
//['apple', 'banana'] массивын төгсгөлд 'mango' нэм.
// const jims = ["apple", "banana"];
// jims.push("mango");
// console.log(jims);

//Bodlogo 3
//[1, 2, 3, 4] массиваас сүүлийн элементийг pop() ашиглан устга.
// const elements = [1, 2, 3, 4];
// elements.pop(3);
// console.log(elements);

//Bodlogo 4
//[10, 20, 30] массивын эхэнд 5 нэм.

// const a = [10, 20, 30];
// a.unshift(5);
// console.log(a);

//Bodlogo 5
//[100, 200, 300] массиваас эхний элементийг shift() ашиглан устга.
// const a = [100, 200, 300];
// a.shift(0);
// console.log(a);

//Bodlogo 6
//[1, 2, 3] ба [4, 5, 6] массивуудыг нэгтгэж шинэ массив үүсгэ.

// const a = [1, 2, 3];
// const b = [4, 5, 6];
// let ab = a.concat(b);
// console.log(ab);

//Bodlogo 9
//['I', 'love', 'JavaScript'] массивыг join() ашиглан нэг мөр болгон холбож хэвлэ

// const a = ["I", "love", "JavaScript"];
// let all = a.join();
// console.log(all);

//Bodlogo 10
//[10, 20, 30, 40, 50] массиваас эхний 3 элементийг slice() ашиглан аваад шинэ массив үүсгэ.

// const numbers = [10, 20, 30, 40, 50];
// const newNumbers = numbers.slice(0, 3);
// console.log(newNumbers);

//Bodlogo 11
//[1, 2, 3, 4] массиваас хоёр дахь элементийг splice() ашиглан устга.

// const a = [1, 2, 3, 4];
// const b = a.splice(1, 1);
// console.log(a);

//Bodlogo 12
//[1, 2, 3, 4, 5] массивыг reverse() ашиглан урвуугаар эргүүл.

// const a = [1, 2, 3, 4, 5];
// const b = a.reverse();
// console.log(b);

//Bodlogo 13
//['banana', 'apple', 'cherry'] массивыг sort() ашиглан үсгийн дарааллаар эрэмбэл.
// const jims = ["banana", "apple", "cherry"];
// const jims1 = jims.sort();
// console.log(jims1);

//Bodlogo 14
//Өгөгдсөн хувьсагч массив мөн эсэхийг Array.isArray() ашиглан шалга.
// const nums = [1, 2];
// console.log(Array.isArray(nums));

//Bodlogo 15
//['red', 'blue', 'green'] массивын нийт уртыг хэвлэ.
// const a = ["red", "blue", "green"];
// console.log(a.length);

//Bodlogo 16
//[10, 20, 30] массивын дундах элемент (20)-ийг 25 болгож солино уу.

// const a = [10, 20, 30];
// a.splice(1, 1, "25");
// console.log(a);

//Bodlogo 17
//['HTML', 'CSS'] ба ['JavaScript', 'React'] массивуудыг нэгтгээд нийт хэдэн элементтэй болохыг хэвлэ.
// const a = ["HTML", "CSS"];
// const b = ["JavaScript", "React"];
// const ab = a.concat(b);
// console.log(ab.length);

//Bodlogo 18
//[1, 2, 3, 4, 5] массиваас сүүлийн 2 элементийг splice() ашиглан устга.
// const a = [1, 2, 3, 4, 5];
// a.splice(3, 2);
// console.log(a);

//Bodlogo 19
//[5, 10, 15, 20] массиваас гурав дахь элементийг splice() ашиглан хас.
// const a = [5, 10, 15, 20];
// a.splice(2, 1);
// console.log(a);

//Bodlogo 20;
// //[100, 200, 300] массиваас 200 байгаа эсэхийг шалгаад, байвал “байна”, байхгүй бол “байхгүй” гэж хэвлэ.
// const a = [100, 200, 300];
// const b = a.includes(200);
// if (b) {
//   console.log("baina");
// } else {
//   console.log("baihgui");
// }
