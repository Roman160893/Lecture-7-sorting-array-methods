// Функція яка повертає масив випадклвих цілих чисел
function getRandomArray(length, min, max) {
   const randomArray = new Array(length);
   for (let i = 0; i < randomArray.length; i++) {
      randomArray[i] = Math.floor(min + Math.random() * (max - min + 1))
   }
   return randomArray;
}
console.log("Функція яка повертає масив випадклвих цілих чисел:")
console.log(getRandomArray(10, 1, 100));

//фуункція яка вираховує моду всіх переданих в неї аргументів
function getModa(...numbers) {
   let arrayNumber = numbers;
   let result = arrayNumber.reduce((acc, curr) => {
      if (acc[curr]) {
         acc[curr] += 1
      } else {
         acc[curr] = 1
      }
      return acc;
   }, {});
   console.log(Object.keys(result).find((el) => {
      return result[el] === Math.max(...Object.values(result))
   }));
}
console.log("Функція яка вираховує моду всіх переданих в неї аргументів:")
getModa(2, 2, 3, 3, 2, 6, 3, 5, 4, 5, 2, 2);

//функція яка рахує середнє арифметичне всіх переданих в неї аргументів
function getAverage(...numbers) {
   let integers = numbers.filter(index => Number.isInteger(index));
   let result = 0;
   for (let i = 0; i < integers.length; i++) {
      result = result + integers[i];
   }
   return result / integers.length;
}
console.log("Функція яка рахує середнє арифметичне всіх переданих в неї аргументів:")
console.log(getAverage(5, 3, 4, 5));

//функція яка фільтрує парні числа передані як аргументи функції
function filterEvenNumbers(...numbers) {
   let evenNumber = numbers.filter(function (item) {
      return item % 2 !== 0;
   })
   return evenNumber;
}
console.log("Функція яка фільтрує парні числа передані як аргументи функції:")
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//функція яка порахує кількість чисел більших 0
function countPositiveNumbers(...numbers) {
   let positiveNumbers = numbers.filter(function (item) {
      return item > 0;
   })
   return positiveNumbers.length;
}
console.log("Функція яка порахує кількість чисел більших 0:")
console.log(countPositiveNumbers(2, 5, - 6, -5, 6, 3, 4, -7));

//функція яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5
function getDividedByFive(...numbers) {
   let dividedByFive = numbers.filter(function (item) {
      return item % 5 === 0
   })
   return dividedByFive;
}
console.log("Функція яка відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5:")
console.log(getDividedByFive(1, 3, 5, 10, 15, 20, 21, 22, 20, 45, 46))

