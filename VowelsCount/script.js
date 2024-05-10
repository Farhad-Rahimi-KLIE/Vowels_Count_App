function Vowels() {
  let String = prompt("Please Enter Vowels Numbers...");
  const reg = /[aeiou]/gi;
  let test = String.match(reg);
  document.write(test);
}
Vowels();
