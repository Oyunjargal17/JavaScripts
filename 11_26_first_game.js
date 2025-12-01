//Гараас тоо оруулахад цаанаас ирж байгаа random тоотой
// харьцуулж тэнцсэн тохиолдолд ялсан тэнцээгүй бол ялагдсан
// гэж хэвлэх жижиг тоглоом хийнэ.
// Мөн таны тэддэхь удаагийн оролдого гэснийг гаргаж ирнэ.
const submitBtn = document.getElementById("submit-btn");
const input = document.getElementById("input");
const randomNumber = Math.floor(Math.random() * 10 + 1);
console.log(randomNumber);
let counter = 0;
function start() {
  let value = 0;
  counter++;

  // console.log(randomNumber);
  // while (counter <= 5) {
  // value = prompt("Ta toogoo oruulna uu?");

  //   const sulZai = value.trim();
  //   if (sulZai === "") {
  //     console.log("Ta hooson utga bolon zai awahgui baih");
  //     continue;
  //   }

  // const values = Number(value);
  // if (isNaN(values)) {
  //   console.log("Ta zowhon too oruulna uu?");
  //   continue;
  // }
  // if (value <= 0) {
  //   console.log("Ta surug utga oruulahgui baina uu?");
  //   continue;
  // }

  // let udaa = counter++;
  // console.log(`tanii ${udaa}-iin oroldlogo:`);
  if (randomNumber == input.value) {
    text.innerHTML = "Баяр хүргэе 👏. Та хожлоо 🎉";
  } else if (randomNumber > input.value) {
    text.innerHTML = "Tanii oruulsan utgaas ih baina!";
  } else if (randomNumber < input.value) {
    text.innerHTML = "Tanii oruulsan utgaas baga baina!";
  }
  input.value = "";
  if (counter == 5) {
    text.innerHTML = "Tanii too oruulah oroldlogo duuslaa";
    submitBtn.disabled = true;
  }
}
// }
