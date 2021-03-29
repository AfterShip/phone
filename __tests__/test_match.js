const {parse} = require('papaparse');
const fs = require('fs');
const phone = require('../index');

const testCases = (parse(fs.readFileSync(`${__dirname}/data.csv`).toString(), {
	header: true
})).data;

for (const testCase of testCases) {
	test(`${testCase.input_phone} / ${testCase.input_country} / ${testCase.validate_prefix}`, function() {
		const {input_phone: phoneNumber, input_country: country, validate_prefix: validateMobilePrefix} = testCase;

		const result = phone(phoneNumber, {
			country,
			validateMobilePrefix: (validateMobilePrefix !== 'true')
		});

		expect(result).toEqual({
			phoneNumber: testCase.output_phone || null,
			countryIso2: testCase.output_country_alpha2 || null,
			countryIso3: testCase.output_country_alpha3 || null
		});
	});
}
