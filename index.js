// Написати функцію, яка буде повертати об'єкт родина.
// Ключ - член родини
// Значення - ім'я
// В родині повинно бути як мінімум 2 особи, можна запитати в користувача скільки особ в його родині.
// І всі данні (і ключ і значення) вносяться через prompt

// const family = {
//   'mather':'Olena',
//   'cat': 'Ray',
// }
function isErrorManyPeople(value) {
  return (
    value === "" || value === null || value === Number.isNaN(Number(value)) 
  );
}
function isErrorfamilyMember(value){
  return(
    value === "" || value === null || value>=2
  )
}
function isErrornameFamilyMember(value){
  return(
    value === "" || value === null 
  )
}

function getFamily() {
  const familyComposition = {};
  const isHowManyPeople = prompt("кількість осіб в родині");
  const familyMember = prompt("член родини");
  const nameFamilyMember = prompt("ім'я члена родини");

  for (let i = 2; i <= isHowManyPeople; i++) {
    if (isErrorManyPeople(isHowManyPeople) || isErrorfamilyMember(familyMember)) || isErrornameFamilyMember(nameFamilyMember) {
      continue;
    }
    
    familyComposition[`$ {'fafamilyMembermily'}`] = "${nameFamilyMember}";}
    return familyComposition;
  }





console.log(getFamily());
