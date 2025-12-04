// Дасгал 1: Дүнгийн дундаж ба үнэлгээӨгөгдөл: Сурагчийн авсан дүнгүүд массив хэлбэрээр өгөгдсөн.
// Даалгавар:
// for давталт ашиглан дүнгүүдийн нийлбэрийг ол.
// Нийт дүнгүүдийн дунджийг тооцоол.
// Хэрвээ дундаж дүн 80-аас дээш байвал "Тэнцсэн", бага байвал "Тэнцээгүй" гэж хэвлэ.
// const dunguud= [75, 88, 92, 60, 85];
// let a=0;
// let avarge=0;
// for (let i=0; i<dunguud.length; i++ )
// {
//     a=a+dunguud[i];
    
// }
// avarge=a/dunguud.length;
// console.log("angiin dundaj unelgee=",avarge);
// if(avarge>=80){
//     console.log("tentssen");
// }
// else
//     console.log("tentseegui");


// Дасгал 2: Тэгш тоонуудыг шүүж авахӨгөгдөл: Санамсаргүй тоонуудын жагсаалт өгөгдсөн.
// Даалгавар:
// Энэ массиваас зөвхөн тэгш (even) тоонуудыг нь ялгаж, evenNumbers гэсэн шинэ массив руу хийгээд үр дүнг хэвлэнэ үү. (% үлдэгдэл олох оператор ашиглаарай).

// const numbers = [12, 45, 7, 22, 89, 10, 4, 33];
// let evenNumbers = [];
// let a=0;
// for(let i=0; i<numbers.length;i++)
// {
//     if(numbers[i]%2===0)
//     {
//       evenNumbers[a]= numbers[i];
//       a++;
//     }
// }
// console.log(evenNumbers);

// Дасгал 3: Хамгийн өндөр үнийг олох (Logic)Өгөгдөл: Дэлгүүрийн барааны үнүүд өгөгдсөн.
// Даалгавар:
// Бэлэн Math.max() функц ашиглахгүйгээр, зөвхөн давталт болон if нөхцөл ашиглан хамгийн өндөр үнэтэй барааг олж хэвлэ.
// const prices = [3500, 12000, 500, 45000, 2500, 9000];
// let maxprices=prices[0];
// console.log('Ehnii utga:, ${maxprices}');
// for(let i=1; i<prices.length; i++)
// {
//     if(maxprices<prices[i])
//         maxprices=prices[i];
//         console.log(maxprices);
// }
// console.log("---");
// console.log('Khamgiin undur une: ${maxprices}');


// Дасгал 4: Сагсан дахь барааны нийт үнэ (Хүндэвтэр)Өгөгдөл: Танд хоёр массив өгөгдсөн. Нэг нь барааны тоо ширхэг, нөгөө нь барааны нэгж үнэ. (Индексүүд нь харгалзана. Жишээ нь: quantities нь unitPrices үнэтэй барааны тоо).
// Даалгавар:
// Сагсанд байгаа бүх барааны нийт үнийг тооцоолж гаргана уу.
// (Зөвлөмж: Нэг for давталт ашиглаж, i индексээр хоёр массиваас зэрэг утгыг нь авч үржүүлнэ).
// const quantities = [2, 5, 1, 10];
// const unitPrices = [1000, 200, 5000, 100];
// let sum=0;
// for(let i=0;i<quantities.length;i++)
// {

//     let productPrice=quantities[i]*unitPrices[i];
//     sum +=productPrice;
// }
// console.log('Sagsan dahi niit une:', sum);

