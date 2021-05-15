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
			country,
			validateMobilePrefix,
			strictDetection
		});

		expect(result).toEqual({
			phoneNumber: testCase.output_phone || null,
			countryIso2: testCase.output_country_alpha2 || null,
			countryIso3: testCase.output_country_alpha3 || null
		});
	});
}
