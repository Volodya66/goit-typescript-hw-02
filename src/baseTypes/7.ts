/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// enum Days{
//   Monday = 'true',
//   Tuesday = 'true',
//   Wednesday = 'true',
//   Thursday = 'true',
//   Friday = 'true',
//   Saturday = 'false',
//   Sunday ='false'
// };

enum DaysOfWeek{
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

function isWeekend(day: DaysOfWeek): boolean{
return day === DaysOfWeek.Saturday || day === DaysOfWeek.Sunday;
  
};

console.log(isWeekend(DaysOfWeek.Saturday))

