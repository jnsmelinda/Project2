// Very simple JS for updating the text when a radio button is clicked
const INPUTS2 = document.querySelectorAll('#breaths input');
const updateValue = e2 => document.querySelector('#result2').innerHTML = e2.target.value;

INPUTS.forEach(el2 => el2.addEventListener('click', e2 => updateValue(e2)));
