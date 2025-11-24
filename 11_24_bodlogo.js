// Bodlogo 1
// 10 аас 1 рүү буурах дарааллаар хэвлэ.
// const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 9; i >= 0; i--) {
//   const b = a[i];
//   console.log(b);
// }

// Bodlogo 2
// Өгөгдсөн n тооны хүрдийг харуул.
// Example:
// 3*1=3
// 3*2=6
// 3*3=9
// 3*4=12
// 3*5=15
// 3*6=18
// 3*7=21
// 3*8=24
// 3*9=27
// 3*10=30

// const n = 3;
// for (let i = 1; i < 11; i++) {
//   //   console.log(i);
//   let a = i * n;
//   console.log(i, "*", n, "=", a);
// }

//Bodlogo 3
//2 ийн n зэргийг ол. (Example: 5. Result:32)
// const n = 5;
// let a = 1;
// for (let i = 0; i < n; i++) {
//   a = a * 2;
//   console.log(a);
// }

// Bodlogo 4
// Өгөгдсөн 3 оронтой тооны цифрүүдийн нийлбэрийг ол. (Example: 234. Result:9)
//Huwilbar 1
// const a = 234;
// const b = a % 10;
// console.log(b);
// let c = a - b;
// console.log(c);

// let d = (c / 10) % 10;
// console.log(d);

// let e = a - d * 10 - b;
// console.log(e);

// let f = e / 100;
// console.log(f);

// let sum = f + d + b;
// console.log("niilber ni=", sum);

//Huwilbar 2
// const c = Math.floor(a / 10) % 10;
// console.log(c);

// const d = Math.floor(a / 100);
// console.log(d);

// const sum = b + c + d;
// console.log("nuulber ni=", sum);

//Bagsh hiij uguw

let n = 234;
let digit;
let sum = 0;
// firstDigit = n % 10;
// n = (n - firstDigit) / 10;
// console.log(firstDigit, "firstDigit");
// console.log(n, "n");
// secondDigit = n % 10;
// n = (n - secondDigit) / 10;
// console.log(n, "n");
// thirdDigit = n % 10;
// n = (n - thirdDigit) / 10;
// console.log(n, "n");

let count = 0;
for (let i = 0; n > 0; i++) {
  digit = n % 10;
  console.log(digit);
  n = (n - digit) / 10;
  console.log(n);
  sum += digit;
  console.log(sum);
  //   count++;
  //   console.log(count);
}
console.log(sum, "for loop");
// console.log(count, "for loop, count");

//Bodlogo 5
//987654 дээрх тоо хэдэн оронтой тоо гэдгийг тоол. Result:6

//2 toonii niilber oldog function bich
// let a = 3;
// let b = 5;
// function sum() {
//   let niilber = a + b;
//   console.log(niilber);
// }

//Bagsh bichej uguw
// function add(a, b) {
//   return a + b;
// }
// const sum = add(10, 7);
// console.log(sum);
