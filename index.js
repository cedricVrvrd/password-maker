const dataLowercase = "abcdefghijklmnopqrstuvwxyz";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$&~ù^%,?;:/!^@{[#]}=+*";
const rangeValue = document.getElementById("password-length");
let password = "";
const passwordOutput = document.getElementById("password-output");

function generatePassword() {
  let data = [];
  if (lowercase.checked) {
    data.push(...dataLowercase);
  }
  if (uppercase.checked) {
    data.push(...dataUppercase);
  }
  if (number.checked) {
    data.push(...dataNumbers);
  }
  if (symbols.checked) {
    data.push(...dataSymbols);
  }
  if (data.length === 0) {
    alert("Veuillez slectionner des criteres");
    return;
  }
  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }
  passwordOutput.value = password;
  passwordOutput.select();
  document.execCommand("copy");
  generateButton.textContent = "Copié";
  setTimeout(() => {
    generateButton.textContent = "Générer Mot de passe";
  }, 2000);
  password = "";
}

generateButton.addEventListener("click", generatePassword);
