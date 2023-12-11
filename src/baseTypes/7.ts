/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum Days{
  Monday = 'true',
  Tuesday = 'true',
  Wednesday = 'true',
  Thursday = 'true',
  Friday = 'true',
  Saturday = 'false',
  Sunday ='false'
};

function isWeekend<A, B extends keyof A>(objData:A,key:B): boolean{
  if (objData[key] === 'true') {
    return true;
  } else {
    return false
  };
  
};

console.log(isWeekend(Days, 'Thursday'))
