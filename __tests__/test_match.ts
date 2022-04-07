import fs from 'fs';
import { parse } from 'papaparse';
import phone from '../src/index';

interface TestCaseItem {
	input_phone: string;
	input_country: string;
	not_validate_prefix: string;
	output_phone: string;
	output_country_alpha2: string;
	output_country_alpha3: string;
	output_country_code: string;
	output_is_valid: string;
	desc1: string;
	desc2: string;
	test_desc: string;
	strict_detection: string;
}

const testCases = (parse(fs.readFileSync(`${__dirname}/data.csv`).toString(), {
	header: true
})).data as TestCaseItem[];

for (const testCase of testCases) {
	test(`${testCase.input_phone} / ${testCase.input_country} / ${testCase.not_validate_prefix}`, function() {
		const {input_phone: phoneNumber, input_country: country, not_validate_prefix: notValidatePrefix, strict_detection: strictDetectionString} = testCase;
		const validateMobilePrefix = !notValidatePrefix;

		let strictDetection = undefined;

		if (strictDetectionString === 'true') {
			strictDetection = true;
		} else if (strictDetectionString === 'false') {
			strictDetection = false;
		}

		const result = phone(phoneNumber, {
			country: country as "USA",
			validateMobilePrefix,
			strictDetection
		});

		if (testCase.output_is_valid === 'true') {
			expect(result).toEqual({
				isValid: true,
				phoneNumber: testCase.output_phone,
				countryIso2: testCase.output_country_alpha2,
				countryIso3: testCase.output_country_alpha3,
				countryCode: testCase.output_country_code
			});
		} else {
			expect(result).toEqual({
				isValid: false,
				phoneNumber: null,
				countryIso2: null,
				countryIso3: null,
				countryCode: null
			});
		}
	});
}
