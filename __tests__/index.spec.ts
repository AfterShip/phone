import phone from '../src/index';

describe('Parameter types', () => {
	test('using default parameter if not provided', () => {
		const result = phone('+1 (817) 569-8900', {});

		expect(result).toEqual({
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});

	test('2nd parameter is undefined', () => {
		const result = phone('+1 (817) 569-8900');

		expect(result).toEqual({
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});

	test('phone is not a string', () => {
		const result = phone(18175698900 as unknown as string);

		expect(result).toEqual({
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});

	test('country is not a string', () => {
		const result = phone('+18175698900', {
			country: 123 as unknown as string
		});

		expect(result).toEqual({
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});
});
