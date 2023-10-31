const firstName = prompt("Zadej křestní jméno bez diakritiky:").trim().toLowerCase();
const lastName = prompt("Zadej příjmení bez diakritiky:").trim().toLowerCase();

const emailName = lastName.slice(0, 5) + firstName.slice(0, 3);
const email = `${emailName}@fit.cvut.cz`;

document.body.innerHTML += `
<p>Vaše emailová adresa je: ${email}</p>
<h1>Vítejte na FIT ČVUT, ${firstName}!</h1>

`
