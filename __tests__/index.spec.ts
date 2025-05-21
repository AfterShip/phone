import phone from '../src/index';

describe('Parameter types', () => {
	test('using default parameter if not provided', () => {
		const result = phone('+1 (817) 569-8900', {});

		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});

	test('2nd parameter is undefined', () => {
		const result = phone('+1 (817) 569-8900');

		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});

	test('phone is not a string', () => {
		const result = phone(18175698900 as unknown as string);

		expect(result).toEqual({
			isValid: false,
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
			isValid: true,
			phoneNumber: '+18175698900',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});
});

describe('Russian Phone Numbers', () => {
	test('Valid 11-digit number starting with 8', () => {
		const result = phone('89123456789', { country: 'RUS' });
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+79123456789',
			countryIso2: 'RU',
			countryIso3: 'RUS',
			countryCode: '+7'
		});
	});

	test('Valid 10-digit number (country implied)', () => {
		const result = phone('9123456789', { country: 'RUS' });
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+79123456789',
			countryIso2: 'RU',
			countryIso3: 'RUS',
			countryCode: '+7'
		});
	});

	test('Number starting with +7 and then 8 (invalid)', () => {
		const result = phone('+789123456789', { country: 'RUS' });
		expect(result).toEqual({
			isValid: false,
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});
});

describe('Plus Sign Validation', () => {
	test('Valid UK number with plus sign', () => {
		const result = phone('+447911123456');
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+447911123456',
			countryIso2: 'GB',
			countryIso3: 'GBR',
			countryCode: '+44'
		});
	});

	test('Valid US number with plus sign', () => {
		const result = phone('+12025550123');
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+12025550123',
			countryIso2: 'US',
			countryIso3: 'USA',
			countryCode: '+1'
		});
	});

	test('UK number too short after CC', () => {
		const result = phone('+44123456789');
		expect(result).toEqual({
			isValid: false,
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});

	test('Valid PR number with plus sign', () => {
		const result = phone('+1787123456'); // Assuming PR numbers are 10 digits after +1
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+1787123456',
			countryIso2: 'PR',
			countryIso3: 'PRI',
			countryCode: '+1'
		});
	});

	test('Invalid country code', () => {
		const result = phone('+999123456789');
		expect(result).toEqual({
			isValid: false,
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});
});

describe('Leading Zero Stripping', () => {
	test('GB number with leading zero and country specified', () => {
		const result = phone('07911123456', { country: 'GB' });
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+447911123456',
			countryIso2: 'GB',
			countryIso3: 'GBR',
			countryCode: '+44'
		});
	});

	test('GB number with plus sign and leading zero in national part', () => {
		const result = phone('+4407911123456', { country: 'GB' });
		expect(result).toEqual({
			isValid: true, //This depends on how library handles +440... might be invalid by some strict standards
			phoneNumber: '+447911123456',
			countryIso2: 'GB',
			countryIso3: 'GBR',
			countryCode: '+44'
		});
	});
});

describe('StrictDetection Option', () => {
	test('UK number with trunk code, strictDetection: false', () => {
		const result = phone('+4407911123456', { country: 'GB', strictDetection: false });
		expect(result).toEqual({
			isValid: true,
			phoneNumber: '+447911123456',
			countryIso2: 'GB',
			countryIso3: 'GBR',
			countryCode: '+44'
		});
	});

	test('UK number with trunk code, strictDetection: true', () => {
		const result = phone('+4407911123456', { country: 'GB', strictDetection: true });
		expect(result).toEqual({
			isValid: false, // Because the '0' after '+44' is unexpected with strict detection
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});
});

describe('Non-String Phone Number', () => {
	test('phone is undefined', () => {
		const result = phone(undefined as unknown as string);
		expect(result).toEqual({
			isValid: false,
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});

	test('phone is null', () => {
		const result = phone(null as unknown as string);
		expect(result).toEqual({
			isValid: false,
			phoneNumber: null,
			countryIso2: null,
			countryIso3: null,
			countryCode: null
		});
	});
});
