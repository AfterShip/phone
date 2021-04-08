const phone = require('../index');

describe('Parameter types', () => {
	test('using default parameter if not provided', () => {
		const result = phone('+1 (817) 569-8900', {});

		expect(result).toEqual({
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA'
		});
	});

	test('2nd parameter is undefined', () => {
		const result = phone('+1 (817) 569-8900');

		expect(result).toEqual({
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA'
		});
	});

	test('phone is not a string', () => {
		const result = phone(18175698900);

		expect(result).toEqual({
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null
		});
	});

	test('country is not a string', () => {
		const result = phone('+18175698900', {
			country: 123
		});

		expect(result).toEqual({
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA'
		});
	});
});
