//1
// function findA(words) {
//   let cont = 0;
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] == "a") {
//       cont += 1;
//     }
//   }
//   return cont;
// }
// console.log(findA("Salom Bolalar"));

//2
// function createJuftSon(n) {
//   let result = [];
//   for (let i = 1; i <= n; i += 3) {
//     result.push(i);
//   }
//   return result;
// }
// console.log(createJuftSon(10));

//3
// function removeSpace(params) {
//   let result = params.replaceAll(" ", "");
//   return result;
// }
// console.log(removeSpace("S a l o m b o l a l a r"));

//4
// function removeElement(param) {
//   let result = "";
//   for (let i = 0; i < param.length; i++) {
//     if (i != 0) {
//       result += param[i];
//     }
//   }
//   return result;
// }
// console.log(removeElement("Salom Bolalar"));

//5
// let nums = [3, 7, 4, 2, 5];

// function smallIndex(param) {
//   let sum = param[0];

//   for (let i = 1; i < param.length; i++) {
//     if (param[i] < sum) {
//       sum = param[i];
//     }
//   }

//   return sum;
// }

// console.log(smallIndex(nums));

//6
// function kichikHarf(param) {
//   return param.toLowerCase();
// }

// console.log(kichikHarf("Salom Bolalar"));

//7
// function yigindi(param) {
//   let sum = 0;

//   for (let i = 0; i < param.length; i++) {
//     sum += param[i];
//   }

//   return sum;
// }

// console.log(yigindi([3, 7, 2, 8, 5]));

//8
// function belgiSoni(param) {
//   let count = 0;

//   for (let i = 0; i < param.length; i++) {
//     if (param[i] == "b") {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(belgiSoni("bb Salom bolalar"));

//9
// let nums = [1,2,3,4,5];

// function kvadratlar(param) {
//   let kvadratlar = [];

//   for (let i = 0; i < param.length; i++) {
//     let kvadrat = param[i] * param[i];
//     kvadratlar.push(kvadrat);
//   }

//   return kvadratlar;
// }

// console.log(kvadratlar(nums));

//10
// function oxiriniOchir(string) {
//   let natija = string.substring(0, string.length - 1);

//   return natija;
// }

// console.log(oxiriniOchir("bb Salom bolalar"));
