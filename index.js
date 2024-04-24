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
    value === "" ||
    value === null ||
    Number.isNaN(Number(value)) ||
    Number.isInteger(Number(value)) === false ||
    Number(value) < 2
  );
}
//рядок не порожній і не число
function isErrorString(value) {
  return (
    value === "" || value === null || Number.isNaN(Number(value)) === false
  );
}

//1-питаємо в користувача кількість членів родини   кількість =3
//2- перевіряємо і якщо значення помилкове ставимо 2 особи

//3-три рази будемо запитувати
//3.1 запитувати роль до того поки не введе без помилок
//3.2запитувати ім'я до того поки неи введе без помилок
//3.3 записуєте данні в обєкт

function getFamily() {
  const family = {};
  const userInputManyPeople = prompt("enter many people", 2);
  const countManyPeople = isErrorManyPeople(userInputManyPeople)? 2 : Number(userInputManyPeople);
  let FamilyMember = "";
  let nameFamilyMember = "";
  for (let i = 0; i < countManyPeople; i++) {
    while (true) {
      FamilyMember = prompt('Famile member:' + (i+1));
      if (isErrorString(FamilyMember)) {
        continue;
      }
      break;
    }
    while (true) {
      nameFamilyMember = prompt(" name Famile member"+ (i+1));
      if (isErrorString(nameFamilyMember)) {
        continue;
      }
      break;
    }
    family[FamilyMember] = nameFamilyMember;
  }
  return family;
}

console.log(getFamily());
