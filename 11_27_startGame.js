//Гараас тоо оруулахад цаанаас ирж байгаа random тоотой
// харьцуулж тэнцсэн тохиолдолд ялсан тэнцээгүй бол ялагдсан
// гэж хэвлэх жижиг тоглоом хийнэ.
// Мөн таны тэддэхь удаагийн оролдого гэснийг гаргаж ирнэ.
const randomNumber = Math.floor(Math.random() * 10);
console.log(`Нууц тоо: ${randomNumber}`);
let isDone = true;
let counter = 0;

while (isDone) {
  counter++;
  const value = prompt("Та тоогоо оруулна уу?");
  let values = Number(value);
  console.log(`Tanii ${counter} udaagiin oroldlogo`);
  if (randomNumber === values) {
    console.log("Баяр хүргэе 👏. Та хожлоо 🎉");
    isDone = false;
  } else if (randomNumber > values) {
    console.log("Таны оруулсан тоо нууц тооноос бага байна");
    isDone = true;
  } else {
    console.log("Таны оруулсан утга нууц тооноос их байна");
    isDone = true;
  }
}
