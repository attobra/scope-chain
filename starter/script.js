'use strict';

function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    const output = `${firstName}, You are ${age} born in ${birthYear} `;
    console.log(output);

    if (birthYear >= 1991 && birthYear <= 1996) {
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
    }
  }

  printAge();
  return age;
}

const firstName = 'Jonas';
calcAge(1991);
