'use strict';

const countryPhoneData = require('./data/country_phone_data');
const {findCountryPhoneDataByCountry, findCountryPhoneDataByPhoneNumber, validatePhoneISO3166} = require('./lib/utility');

/**
 *
 * @param {string} phone - phone number
 * @param {string} country - country code in ISO3166 alpha 3
 * @param {Boolean=} allowLandline - allow detecting landline phone number
 * @returns {Object}
 */

/**
 * If no "+" sign treat as USA or CAN phone number
 * @param {string} phoneNumber - phone number
 * @param {string=} countryIso3 - country code in ISO3166 alpha 2 or 3
 * @param {boolean=} validateMobilePrefix - true to validate phone number prefix
 * @param {boolean=} strictDetection - true to disable remove truck code and detection logic
 * @returns {{phoneNumber: string|null, countryIso2: string|null, countryIso3: string|null}}
 */

module.exports = function (phoneNumber, {country = '', validateMobilePrefix = true, strictDetection = false} = {}) {
	const result = {
		phoneNumber: null,
		countryIso2: null,
		countryIso3: null
	};

	let processedPhoneNumber = (typeof phoneNumber !== 'string') ? '' : phoneNumber.trim();
	const processedCountry = (typeof country !== 'string') ? '' : country.trim();
	const hasPlusSign = Boolean(processedPhoneNumber.match(/^\+/));

	// remove any non-digit character, included the +
	processedPhoneNumber = processedPhoneNumber.replace(/\D/g, '');

	let foundCountryPhoneData = findCountryPhoneDataByCountry(processedCountry);

	if (!foundCountryPhoneData) {
		return result;
	}

	let defaultCountry = false;

	// if country provided, only reformat the phone number
	if (processedCountry) {
		// remove leading 0s for all countries except 'CIV', 'COG'
		if (!['CIV', 'COG'].includes(foundCountryPhoneData.alpha3)) {
			processedPhoneNumber = processedPhoneNumber.replace(/^0+/, '');
		}

		// if input 89234567890, RUS, remove the 8
		if (foundCountryPhoneData.alpha3 === 'RUS' && processedPhoneNumber.length === 11 && processedPhoneNumber.match(/^89/) !== null) {
			processedPhoneNumber = processedPhoneNumber.replace(/^8+/, '');
		}

		// if there's no plus sign and the phone number length is one of the valid length under country phone data
		// then assume there's no country code, hence add back the country code
		if (!hasPlusSign && foundCountryPhoneData.phone_number_lengths.includes(processedPhoneNumber.length)) {
			processedPhoneNumber = `${foundCountryPhoneData.country_code}${processedPhoneNumber}`;
		}
	} else if (hasPlusSign) {
		// if there is a plus sign but no country provided
		// try to find the country phone data by the phone number
		const {exactCountryPhoneData, possibleCountryPhoneData} = findCountryPhoneDataByPhoneNumber(processedPhoneNumber, validateMobilePrefix);

		if (exactCountryPhoneData) {
			foundCountryPhoneData = exactCountryPhoneData;
		} else {
			// for some countries, the phone number usually includes one trunk prefix for local use
			// The UK mobile phone number ‘07911 123456’ in international format is ‘+44 7911 123456’, so without the first zero.
			// 8 (AAA) BBB-BB-BB, 0AA-BBBBBBB
			// the numbers should be omitted in international calls
			if (possibleCountryPhoneData) {
				foundCountryPhoneData = possibleCountryPhoneData;
				processedPhoneNumber = foundCountryPhoneData.country_code + processedPhoneNumber.replace(new RegExp(`^${foundCountryPhoneData.country_code}\\d`),'');
			} else {
				foundCountryPhoneData = {};
			}
		}
	} else if (foundCountryPhoneData.phone_number_lengths.indexOf(processedPhoneNumber.length) !== -1) {
		// B: no country, no plus sign --> treat it as USA
		// 1. check length if == 11, or 10, if 10, add +1, then go go D
		// no plus sign, no country is given. then it must be USA
		// iso3166 = iso3166_data[0]; already assign by the default value
		processedPhoneNumber = `1${processedPhoneNumber}`;
		defaultCountry = true;
	}

	let validateResult = validatePhoneISO3166(processedPhoneNumber, foundCountryPhoneData, validateMobilePrefix, hasPlusSign);

	if (validateResult) {
		return {
			phoneNumber: `+${processedPhoneNumber}`,
			countryIso2: foundCountryPhoneData.alpha2,
			countryIso3: foundCountryPhoneData.alpha3
		};
	}

	if (defaultCountry) {
		// also try to validate against CAN for default country, as CAN is also start with +1
		foundCountryPhoneData = findCountryPhoneDataByCountry('CAN');
		validateResult = validatePhoneISO3166(processedPhoneNumber, foundCountryPhoneData, validateMobilePrefix, hasPlusSign);
		if (validateResult) {
			return {
				phoneNumber: `+${processedPhoneNumber}`,
				countryIso2: foundCountryPhoneData.alpha2,
				countryIso3: foundCountryPhoneData.alpha3
			};
		}
	}

	return result;
};

module.exports.countryPhoneData = countryPhoneData;
