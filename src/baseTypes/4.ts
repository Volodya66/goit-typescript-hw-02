/*
  Як переписати його в TypeScript, використовуючи концепцію кортежів, 
  щоб гарантувати, що перший елемент завжди буде рядком, а другий числом?
*/

type cortage = [string, ...number[]];

let person : cortage = ['Max', 21];

export {};