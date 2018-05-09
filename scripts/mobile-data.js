import fs from 'fs';
import {countries} from 'country-data';
import phoneData from '../lib/iso3166Data';

const data = phoneData.map(
	({alpha3, mobile_begin_with, phone_number_lengths}) => ({
		alpha3,
		mobileBeginWith: mobile_begin_with,
		phoneNumberLengths: phone_number_lengths,
	}),
);

const all = countries.all
	.filter(({status}) => status === 'assigned')
	.map(({countryCallingCodes, alpha3}) => ({
		[alpha3]: {
			countryCallingCodes,
		},
	}))
	.reduce((acc, current) => Object.assign({}, acc, current), {});

const results = data.map(phone => Object.assign({}, phone, all[phone.alpha3]));

const codeGen = (alpha3, phone) =>
	`export const ${alpha3} = ${JSON.stringify(phone, null, '\t')};`;

const code = results
	.map(({alpha3, mobileBeginWith, phoneNumberLengths, countryCallingCodes}) =>
		codeGen(alpha3, {
			mobileBeginWith,
			phoneNumberLengths,
			countryCallingCodes,
		}),
	)
	.reduce((acc, line) => acc + line + '\n', '');

fs.writeFile('./data/mobile-data.js', code, err => {
	if (err) throw err;
	// eslint-disable-next-line
	console.log('The file has been saved!');
});
