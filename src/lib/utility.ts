import countryPhoneData from '../data/country_phone_data';

export type CountryPhoneDataItem = typeof countryPhoneData[number];
export type TSupportedCountryIso2 = CountryPhoneDataItem['alpha2'];
export type TSupportedCountryIso3 = CountryPhoneDataItem['alpha3'];
export type TSupportedCountryCountryCode = CountryPhoneDataItem['country_code'];
export type TSupportedCountryIso = TSupportedCountryIso2 | TSupportedCountryIso3;

/**
 * @param {string=} country - country code alpha 2 or 3
 * @returns {{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with, phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string, string, string, string], phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string], phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string], phone_number_lengths: [number]}|{country_code: string, alpha2: string, country_name: string, alpha3: string, mobile_begin_with: [string, string], phone_number_lengths: [number]}|null}
 */
export function findCountryPhoneDataByCountry(country: TSupportedCountryIso): CountryPhoneDataItem| null{
	// if no country provided, assume it's USA
	if (!country) {
		return countryPhoneData.find(countryPhoneDatum => countryPhoneDatum.alpha3 === 'USA') || null;
	}

	if (country.length === 2) {
		return countryPhoneData.find(countryPhoneDatum => country.toUpperCase() === countryPhoneDatum.alpha2) || null;
	}

	if (country.length === 3) {
		return countryPhoneData.find(countryPhoneDatum => country.toUpperCase() === countryPhoneDatum.alpha3) || null;
	}

	return countryPhoneData.find(countryPhoneDatum => country.toUpperCase() === countryPhoneDatum.country_name.toUpperCase()) || null;
}

export function findExactCountryPhoneData(phoneNumber: string, validateMobilePrefix: boolean, countryPhoneDatum: CountryPhoneDataItem): null | CountryPhoneDataItem {
	// check if the phone number length match any one of the length config
	const phoneNumberLengthMatched = countryPhoneDatum.phone_number_lengths.some(length => {
		// as the phone number must include the country code,
		// but countryPhoneDatum.phone_number_lengths is the length without country code
		// therefore need to add back countryPhoneDatum.country_code.length to length
		return (countryPhoneDatum.country_code.length + length === phoneNumber.length);
	});

	if (!phoneNumberLengthMatched) {
		return null;
	}

	// if no need to validate mobile prefix or the country data does not have mobile begin with
	// pick the current one as the answer directly
	if (!countryPhoneDatum.mobile_begin_with.length || !validateMobilePrefix) {
		return countryPhoneDatum;
	}

	// if the mobile begin with is correct, pick as the correct answer
	if (countryPhoneDatum.mobile_begin_with.some(beginWith => {
		return phoneNumber.match(new RegExp('^' + countryPhoneDatum.country_code + beginWith));
	})) {
		return countryPhoneDatum;
	}

	return null;
}

export function findPossibleCountryPhoneData(phoneNumber: string, validateMobilePrefix: boolean, countryPhoneDatum: CountryPhoneDataItem): null | CountryPhoneDataItem {
	// check if the phone number length match any one of the length config
	const phoneNumberLengthMatched = countryPhoneDatum.phone_number_lengths.some(length => {
		// the phone number must include the country code
		// countryPhoneDatum.phone_number_lengths is the length without country code
		// + 1 is assuming there is an unwanted trunk code prepended to the phone number
		return (countryPhoneDatum.country_code.length + length + 1 === phoneNumber.length);
	});

	if (!phoneNumberLengthMatched) {
		return null;
	}

	// if no need to validate mobile prefix or the country data does not have mobile begin with
	// pick the current one as the answer directly
	if (!countryPhoneDatum.mobile_begin_with.length || !validateMobilePrefix) {
		return countryPhoneDatum;
	}

	// if the mobile begin with is correct, pick as the correct answer
	// match another \d for the unwanted trunk code prepended to the phone number
	if (countryPhoneDatum.mobile_begin_with.some(beginWith => {
		return phoneNumber.match(new RegExp('^' + countryPhoneDatum.country_code  + '\\d?' + beginWith));
	})) {
		return countryPhoneDatum;
	}
	return null;
}

/**
 * get country phone data by phone number
 * the phone number must include country code as the complete phone number includes the plus sign
 * @param phoneNumber
 * @param validateMobilePrefix
 * @returns {{exactCountryPhoneData: (*), possibleCountryPhoneData: (*)}}
 */
export function findCountryPhoneDataByPhoneNumber(phoneNumber: string, validateMobilePrefix: boolean): { exactCountryPhoneData: CountryPhoneDataItem | null, possibleCountryPhoneData: CountryPhoneDataItem | null } {
	let exactCountryPhoneData: CountryPhoneDataItem | null = null;
	let possibleCountryPhoneData: CountryPhoneDataItem | null = null;

	for (const countryPhoneDatum of countryPhoneData) {
		// if the country code is wrong, skip directly
		if (!phoneNumber.match(new RegExp('^' + countryPhoneDatum.country_code))) {
			continue;
		}

		// process only if exact match not found yet
		if (!exactCountryPhoneData) {
			exactCountryPhoneData = findExactCountryPhoneData(phoneNumber, validateMobilePrefix, countryPhoneDatum);
		}

		if (!possibleCountryPhoneData) {
			possibleCountryPhoneData = findPossibleCountryPhoneData(phoneNumber, validateMobilePrefix, countryPhoneDatum);
		}
	}

	return {
		exactCountryPhoneData,
		possibleCountryPhoneData
	}
}


/**
 *
 * @param {string} phone - phone number without plus sign, with or without country calling code
 * @param {Object} countryPhoneDatum - iso 3166 data
 * @param {String} countryPhoneDatum.country_code - country calling codes
 * @param {Array} countryPhoneDatum.phone_number_lengths - all available phone number lengths for this country
 * @param {Array} countryPhoneDatum.mobile_begin_with - mobile begin with number
 * @param {boolean} validateMobilePrefix - true if we skip mobile begin with checking
 * @param {boolean} plusSign - true if the input contains a plus sign
 * @returns {*|boolean}
 */
export function validatePhoneISO3166(phone: string, countryPhoneDatum: CountryPhoneDataItem, validateMobilePrefix: boolean, plusSign: boolean): boolean {
	if (!countryPhoneDatum.phone_number_lengths) {
		return false;
	}

	// remove country calling code from the phone number
	const phoneWithoutCountry = phone.replace(new RegExp('^' + countryPhoneDatum.country_code), '');

	// if the phone number have +, countryPhoneDatum detected,
	// but the phone number does not have country calling code
	// then should consider the phone number as invalid
	if (plusSign && countryPhoneDatum && phoneWithoutCountry.length === phone.length) {
		return false;
	}

	const phone_number_lengths = countryPhoneDatum.phone_number_lengths;
	const mobile_begin_with = countryPhoneDatum.mobile_begin_with;

	const isLengthValid = phone_number_lengths.some(length => phoneWithoutCountry.length === length);
	// some country doesn't have mobile_begin_with
	const isBeginWithValid = mobile_begin_with.length ?
		mobile_begin_with.some(beginWith => phoneWithoutCountry.match(new RegExp('^' + beginWith))):
		true;

	return isLengthValid && (!validateMobilePrefix || isBeginWithValid);
}

// to allow use .includes on narrow types (as const) – better to use a separate method with better type definitions.
export function includes<T extends U, U>(coll: ReadonlyArray<T>, el: U): el is T {
	return coll.includes(el as T);
}