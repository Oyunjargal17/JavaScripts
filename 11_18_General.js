// // //Bodlogo 1
// // //2 тоог оруулж ихийг нь хэвлэх
// // const a1 = 10;
// // const b1 = 8;
// // if (a1 > b1) {
// //   console.log("Bodlogo 1 ih too ni=", a1);
// // } else {
// //   console.log("Bodlogo 1 ih too ni=", b1);
// // }

// // //Bodlogo 2
// // //Тоог тэгш/сондгой шалгах
// // const a2 = 9;
// // if (a2 % 2 === 0) {
// //   console.log("Bodlogo 2 hariu ni= Ene too tegsh");
// // } else {
// //   console.log("Bodlogo 2 hariu ni= Ene too sondgoi");
// // }

// //Bodlogo 3
// //3 ширхэг тоон дундах хамгийн их/хамгийн бага
// // const a = 123;
// // const b = 1423;
// // const c = 89;
// // let max;
// // let min;

// // if (a > b && a > c) {
// //   max = a;
// // } else if (c > a && c > b) {
// //   max = c;
// // } else {
// //   max = b;
// // }

// // if (b < c && b < a) {
// //   min = b;
// // } else if (a < c && a < b) {
// //   min = a;
// // } else {
// //   min = c;
// // }
// // console.log("ih too ni=", max);
// // console.log("baga too ni=", min);

// //Bodlogo 4
// //Стрингийн уртыг хэвлэх
// // const string = "hello world";
// // console.log("Bodlogo 4 hariu ni=", string.length);

// //Bodlogo 6
// // //Стрингийг том үсэг болгож хувиргах
// // const string = "sain bna uu?";
// // console.log(string.toLocaleUpperCase());

// //Bodlogo 7
// //Тоог 3-аар болон 5-аар хуваагддаг эсэхийг шалгах. 3-т хуваагдал Fizz, 5-т хуваагдал Buzz, хоёуланд нь хуваагддаг бол FizzBuzz гэх хэвлэ
// // const a = 15;
// // if (a % 3 === 0 && a % 5 === 0) {
// //   console.log("Ene too 3 bolon 5-d huwaagdana", "FizzBuzz");
// // } else {
// //   if (a % 3 === 0) {
// //     console.log("Ene too 3-t huwaagdana", "Fizz");
// //   }
// //   if (a % 5 === 0) {
// //     console.log("Ene too 5-t huwaagdana", "Buzz");
// //   }
// // }

// //Bodlogo 9
// //Хоёр string-ийг нэгтгэх a = Hello b = World
// // const stringA = "Hello";
// // const stringB = " World";
// // console.log(stringA + stringB);

// //Bodlogo 10
// //2 тооны дундаж
// // const a = 50;
// // const b = 20;
// // console.log("Hoyr toonii dundaj ni=", (a + b) / 2);

// //Bodlogo 11
// //Тоо эерэг эсвэл сөрөг эсэхийг шалгах - "эерэг", "сөрөг" эсвэл "тэг"
// // const a = 99;
// // if (a === 0) {
// //   console.log("Ene bol 0");
// // } else {
// //   if (a % 2 === 0) {
// //     console.log("Ene bol eyreg too");
// //   } else {
// //     console.log("Ene bol sorog too");
// //   }
// // }

// //Bodlogo 12
// //Тоог 10-аас их эсэхийг шалгах
// // const a = 5;
// // if (a > 10) {
// //   console.log("Ene too 10-aas ih");
// // } else {
// //   console.log("Ene bol 10-aas baga too");
// // }

// //Bodlogo 13
// //Хоёр тоо тэнцүү эсэхийг шалгах - "тэнцүү" эсвэл "ялгаатай"
// // const a = 3;
// // const b = 5;
// // if (a === b) {
// //   console.log("Ene hoyr too ==");
// // } else {
// //   console.log("Ene hoyr too ylgaatai");
// // }

// //Bodlogo 14
// //Тоог 100-аас их, 0-аас бага эсэхийг шалгах
// // const a = 67;
// // if (a > 100) {
// //   console.log("Ene too 100-gaas ih");
// // } else {
// //   console.log("Ene too 100-gaas baga");
// // }
// // if (a < 0) {
// //   console.log("Ene too 0-ees baga");
// // } else {
// //   console.log("Ene too 0-ees ih");
// // }

// //Bodlogo 15
// //Тоог 10%, 20% эсвэл 30% өсгөх
// const a = 250;
// huwiarUssun10 = a * 1.1;
// huwiarUssun20 = a * 1.2;
// huwiarUssun30 = a * 1.3;
// console.log("arwan huwiar ussun=", huwiarUssun10);
// console.log("horin huwiar ussun", huwiarUssun20);
// console.log("guchin huwiar ussun", huwiarUssun30);

// //Bodlogo 16
// //Тоог 100-аас хэтэрвэл 100 болгож хэвлэх
// // const a = 89;
// // if (a > 100) {
// //   console.log("Ene too 100-gaas ih tul:", 100);
// // } else {
// //   console.log("Ene too 100-gaas baga", a);
// // }

// //Bodlogo 17
// //Хоёр тэмдэгт ижил эсэхийг шалгах === ашиглах
// // const a = "apple";
// // const b = "applee";
// // if (a === b) {
// //   console.log("Temdegtuud hoorondoo ijil");
// // } else {
// //   console.log("Temdegtuud uur");
// // }

// //Bodlogo 18
// //Хоёр оронтой тооны цифрүүдийг сольж урвуулах
// // const a = 89;
// // let b = Math.floor(a / 10);
// // let c = a % 10;
// // console.log(c, b);

// //Bodlogo 19
// //Тоо сөрөг бол эерэг болгож, эерэг бол хэвээр үлдээх
// // const a = -87;
// // if (a >= 0) {
// //   console.log("Ene bol eyreg too baina", a);
// // } else {
// //   console.log("Ene bol surug too baisan tul eyreg bolgow", a * -1);
// // }

// //Bodlogo 20
// //1970.01.01 -ээс яг одоог хүртэл хэдэн он, сар, өдөр, цаг, минут, секунд, дооль, милисекунд өнгөрсөнг ол
// // const a = new Date("1970.01.01");
// // console.log(a);
// // const b = new Date();
// // console.log(b);
// // let diff = b - a;
// // console.log(diff);
// // let sec = Math.floor(diff / 1000);
// // let min = Math.floor(sec / 60);
// // let tsag = Math.floor(min / 60);
// // let udur = Math.floor(tsag / 24);
// // console.log(udur, "udur", tsag, "tsag", min, "minut", sec, "sec baina.");

// //Bodlogo 21
// //Дугаарын хязгаарлалтаар машин чинь хэд хэд дэх өдөр явахгүйг хэвлэнэ
// const a = 6775;
// b = ((a % 1000) % 100) % 10;
// switch (b) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Thusday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Monday");
//     break;
//   case 7:
//     console.log("Thusday");
//     break;
//   case 8:
//     console.log("Wednesday");
//     break;
//   case 9:
//     console.log("Thursday");
//     break;
//   case 0:
//     console.log("Friday");
//     break;
// }
// console.log("udur ywahgui.");
