import countryPhoneData from './data/country_phone_data';
import {
	findCountryPhoneDataByCountry,
	findCountryPhoneDataByPhoneNumber,
	validatePhoneISO3166,
	CountryPhoneDataItem,
} from './lib/utility';

interface PhoneInvalidResult {
	isValid: false;
}
  
interface PhoneValidResult {
	isValid: true;
	phoneNumber: string;
	countryIso2: string;
	countryIso3: string;
	countryCode: string;
}
  
type PhoneResponse = PhoneInvalidResult | PhoneValidResult; 

/**
 * @typedef {Object} Option
 * @property {string=} country - country code in ISO3166 alpha 2 or 3
 * @property {boolean=} validateMobilePrefix - true to validate phone number prefix
 * @property {boolean=} strictDetection - true to disable remove truck code and detection logic
 *
 * @param {string} phoneNumber - phone number
 * @param {Option} option
 * @returns {{phoneNumber: string|null, countryIso2: string|null, countryIso3: string|null}}
 */
export default function phone(phoneNumber: string, {
	country = '',
	validateMobilePrefix = true,
	strictDetection = false
}: {
	country?: string;
	validateMobilePrefix?: boolean;
	strictDetection?: boolean;
} = {}): PhoneResponse {
	const invalidResult = {
		isValid: false as const
	};

	let processedPhoneNumber = (typeof phoneNumber !== 'string') ? '' : phoneNumber.trim();
	const processedCountry = (typeof country !== 'string') ? '' : country.trim();
	const hasPlusSign = Boolean(processedPhoneNumber.match(/^\+/));

	// remove any non-digit character, included the +
	processedPhoneNumber = processedPhoneNumber.replace(/\D/g, '');

	let foundCountryPhoneData = findCountryPhoneDataByCountry(processedCountry);

	if (!foundCountryPhoneData) {
		return invalidResult;
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
		const { exactCountryPhoneData, possibleCountryPhoneData } = findCountryPhoneDataByPhoneNumber(processedPhoneNumber, validateMobilePrefix);

		if (exactCountryPhoneData) {
			foundCountryPhoneData = exactCountryPhoneData;
		} else if (possibleCountryPhoneData && !strictDetection) {
			// for some countries, the phone number usually includes one trunk prefix for local use
			// The UK mobile phone number ‘07911 123456’ in international format is ‘+44 7911 123456’, so without the first zero.
			// 8 (AAA) BBB-BB-BB, 0AA-BBBBBBB
			// the numbers should be omitted in international calls

			foundCountryPhoneData = possibleCountryPhoneData;
			processedPhoneNumber = foundCountryPhoneData.country_code + processedPhoneNumber.replace(new RegExp(`^${foundCountryPhoneData.country_code}\\d`), '');
		} else {
			foundCountryPhoneData = null;
		}
	} else if (foundCountryPhoneData.phone_number_lengths.indexOf(processedPhoneNumber.length) !== -1) {
		// B: no country, no plus sign --> treat it as USA
		// 1. check length if == 11, or 10, if 10, add +1, then go go D
		// no plus sign, no country is given. then it must be USA
		// iso3166 = iso3166_data[0]; already assign by the default value
		processedPhoneNumber = `1${processedPhoneNumber}`;
		defaultCountry = true;
	}

	if (!foundCountryPhoneData) {
		return invalidResult;
	}

	let validateResult = validatePhoneISO3166(processedPhoneNumber, foundCountryPhoneData, validateMobilePrefix, hasPlusSign);

	if (validateResult) {
		return {
			isValid: true as const,
			phoneNumber: `+${processedPhoneNumber}`,
			countryIso2: foundCountryPhoneData.alpha2,
			countryIso3: foundCountryPhoneData.alpha3,
			countryCode: `+${foundCountryPhoneData.country_code}`
		};
	}

	if (defaultCountry) {
		// also try to validate against CAN for default country, as CAN is also start with +1
		foundCountryPhoneData = findCountryPhoneDataByCountry('CAN') as CountryPhoneDataItem;
		validateResult = validatePhoneISO3166(processedPhoneNumber, foundCountryPhoneData, validateMobilePrefix, hasPlusSign);
		if (validateResult) {
			return {
				isValid: true as const,
				phoneNumber: `+${processedPhoneNumber}`,
				countryIso2: foundCountryPhoneData.alpha2,
				countryIso3: foundCountryPhoneData.alpha3,
				countryCode: `+${foundCountryPhoneData.country_code}`
			};
		}
	}

	return invalidResult;
};

export {
	phone,
	countryPhoneData,
};
