const inputArr = Array.from(document.querySelectorAll('input'));

const checkValidity = () => {
	inputArr.forEach((input, i, a) => {});
};
// document
// 	.querySelector('.form__button')
// 	.addEventListener('click', checkValidity);

inputArr.forEach((input) => {
	input.addEventListener('focusout', (e) => {
		if (e.target.attributes.required && !e.target.value) {
			e.target.style.outline = '1px solid red';
		} else if (e.target.value && !e.target.validity.valid) {
			e.target.style.outline = '1px solid red';
		} else {
			e.target.style.outline = '1px solid green';
		}
	});
});
