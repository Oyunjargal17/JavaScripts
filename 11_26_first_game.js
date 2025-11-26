//гараас тоо аваад, 1-ээс их бол их байна, бага бол бага байна, 1 бол та хожлоо, 0 бол буруу утга байна
//та дахин оруулна уу гэдэг жижиг тоглоом зохио
const value = prompt('Ta toogoo oruulna uu?');
const randomValue=1;
const hur = Number(value);
if( value===randomValue)
{
    console.log("Bayr hurgey! Ta hojloo", "👏");
}
else if(value>randomValue)
{
    console.log("Ikh baina!");

}
else if(value<randomValue)
{
    console.log("Baga baina!");
}


// console.log(Math.floor(Math.random()*10)+1);