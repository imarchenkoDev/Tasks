function checkAge(age) {
  if (age>18) {
    return true;
  } else {
    return confirm('Родители разрешили?')
  }
}
let age = prompt('Сколько Вам лет?', 18);
if ( checkAge(age) ) {
  console.log ( 'доступ получен');
} else {
  console.log ( ' доступ запрещен');
}