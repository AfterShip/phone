'use strict';

module.exports = function validatePhoneISO3166(phone, iso3166, allowLandline) {
	if (!iso3166.phone_number_lengths) {
		return false;
	}

	const phoneWithoutCountry = phone.replace(new RegExp('^' + iso3166.country_code), '');
	const {phone_number_lengths, mobile_begin_with} = iso3166;

	const isLengthValid = phone_number_lengths.some(length => phoneWithoutCountry.length === length);
	// some country doesn't have mobile_begin_with
	const isBeginWithValid = mobile_begin_with.length ?
	mobile_begin_with.some(beginWith => phoneWithoutCountry.match(new RegExp('^' + beginWith))):
	true;

	return isLengthValid && (allowLandline || isBeginWithValid);
};
