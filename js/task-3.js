
const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', (event) => {
  const inputValue = event.target.value.trim();

  nameOutput.textContent = inputValue || 'Anonymous';
});


nameInput.style.width = '360px';
nameInput.style.height = '40px';
nameInput.style.fontFamily = '"Montserrat", sans-serif';
nameInput.style.fontWeight = '400';
nameInput.style.fontSize = '16px';
nameInput.style.lineHeight = '1.5';
nameInput.style.letterSpacing = '0.04em';
nameInput.style.color = '#2e2f42';

nameInput.placeholder = 'Please enter your name';
nameInput.style.setProperty('::placeholder', `
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.04em;
  color: #2e2f42;
`);

const heading = document.querySelector('h1');

heading.style.fontFamily = '"Montserrat", sans-serif';
heading.style.fontWeight = '600';
heading.style.fontSize = '24px';
heading.style.lineHeight = '1.33333';
heading.style.letterSpacing = '0.04em';
heading.style.color = '#2e2f42';
