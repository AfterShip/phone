import 'babel-polyfill';
import Phone from '../../dist/';

const input = document.getElementById('phone');
const code = document.getElementById('code');
const help = document.querySelector('.help');

const formatPhone = (e) => {
	const [formattedPhone, alpha3] = Phone(e.target.value);
	if (!formattedPhone) {
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
  Formatted Phone number: ${formattedPhone}
  Country code: ${alpha3}`;
};

input.addEventListener('input', formatPhone);
input.dispatchEvent(new Event('input'));
