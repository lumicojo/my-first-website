const h2 = document.createElement("h2");
h2.textContent = "Thank you for visiting my first website";
document.querySelector("body").appendChild(h2);

const div = document.querySelector('.drill_cursor');

div.addEventListener('click', (event) => {
  console.log('Hi!');
});