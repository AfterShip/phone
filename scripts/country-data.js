const {countries} = require('country-data');
const fs = require('fs');

const formattedCountries = countries.all
	.filter(({status}) => status === 'assigned')
	.map(({alpha2, alpha3, name}) => ({
		alpha2,
		alpha3,
		name,
	}));

const codeGen = (alpha3, country) =>
	`export const ${alpha3} = ${JSON.stringify(country)};`;

const code = formattedCountries
	.map(country => codeGen(country.alpha3, country))
	.reduce((acc, line) => acc + line + '\n', '');

fs.writeFile('./data/iso3166.js', code, err => {
	if (err) throw err;
	// eslint-disable-next-line
	console.log('The file has been saved!');
});
