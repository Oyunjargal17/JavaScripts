// const myDiv = document.getElementById("my-div");
// console.log(myDiv);
// myDiv.innerHTML = '<h1 id="my-div">DOM</h1>'; //greate

// myDiv.innerHTML = ""; //delete
// ============================================================

//1. DOM элементийг авах
//2. Эхний бүтээгдэхүүнийг innerHTML-ээр нэмэх
//3. Үлдсэн бүтээгдэхүүнүүдийг нэмэх

// const list = [
//   "Tarag (Yogurt)",
//   "Suu (Milk)",
//   "Tahianii mah (Chiken)",
//   "Jims (Fruits)",
// ];
// let listElement = `
//  <h1>Awah zuilsiin jagsaalt</h1>
// `;
// let ul = `<ul>`;
// for (let i = 0; i < list.length; i++) {
//   const item = list[i];
//   const element = ` <li>${item}</li>`;
//   ul += element;
// }

// ul += `</ul>`;
// listElement += ul;
// console.log(listElement);
// document.body.innerHTML = listElement;

// ============================================================

const input = document.getElementById("input");
// console.log(input);
const text = document.getElementById("text");
function submit() {
  const inputValue = input.value;
  //   if(isNaN(inputValue))
  //   {
  //     alert('only number')
  //   }

  if (inputValue <= 10 && inputValue > 0) {
    text.innerHTML = "valid";
    // console.log("valid");
  } else {
    text.innerHTML = "inValid";
    // console.log("Buruu bna");
  }
}
submit();
