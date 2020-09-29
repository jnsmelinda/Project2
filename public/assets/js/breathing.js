// Very simple JS for updating the text when a radio button is clicked
const INPUTS = document.querySelectorAll('#breaths input');
const updateValue = e => document.querySelector('#result2').innerHTML = e.target.value;

INPUTS.forEach(el => el.addEventListener('click', e => updateValue(e)));
