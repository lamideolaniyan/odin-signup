const inputArr = Array.from(document.querySelectorAll('input'));
const listItemArr = Array.from(document.querySelectorAll('.form-list__item'));

const checkValidity = (e) => {
	if (e.target.attributes.required) {
		if (!e.target.value) {
			e.target.style.outline = '1px solid red';
			e.target.nextElementSibling.textContent = e.target.validationMessage;
		} else if (e.target.value && !e.target.validity.valid) {
			e.target.style.outline = '1px solid red';
			e.target.nextElementSibling.textContent = e.target.validationMessage;
		} else {
			e.target.style.outline = '1px solid green';
		}
	}
};

inputArr.forEach((input) => {
	input.addEventListener('focusout', (e) => {
		checkValidity(e);
	});
});
