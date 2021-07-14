import 'babel-polyfill';
import { phone } from '../../dist/';

const input = document.getElementById('phone');
const code = document.getElementById('code');
const help = document.querySelector('.help');
const country = document.getElementById('country');
const validateMobilePrefix = document.getElementById('validateMobilePrefix');
const strictDetection = document.getElementById('strictDetection');

const formatPhone = (e) => {
	const inputPhoneNumber = input.value;
	const options = {
		validateMobilePrefix: validateMobilePrefix.checked,
		strictDetection: strictDetection.checked,
	};

	const countryValue = country.value.trim();
	if (countryValue) {
		options.country = countryValue;
	}

	const { phoneNumber, countryIso2, countryIso3, countryCode, isValid } = phone(inputPhoneNumber, options);

	if (!isValid) {
		[
			help,
			input,
		].forEach(node => {
			node.classList.remove('is-success');
			node.classList.add('is-danger');
		});
		code.classList.add('is-hidden');
		code.textContent = '';
		help.textContent = 'This phone number is invalid';
		return;
	}
	[
		help,
		input,
	].forEach(node => {
		node.classList.add('is-success');
		node.classList.remove('is-danger');
	});

	help.textContent = 'This phone number is valid';
	code.classList.remove('is-hidden');
	code.textContent = `
  isValid: ${isValid}
  Formatted Phone number: ${phoneNumber}
  Country code alpha 2: ${countryIso2}
  Country code alpha 3: ${countryIso3}
  Country calling code: ${countryCode}`;
};

input.addEventListener('input', formatPhone);
country.addEventListener('input', formatPhone);
validateMobilePrefix.addEventListener('click', formatPhone);
strictDetection.addEventListener('click', formatPhone);


input.dispatchEvent(new Event('input'));
