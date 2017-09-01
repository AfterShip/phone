'use strict';

module.exports = function validatePhoneISO3166(phone, iso3166) {
	if (!iso3166.phone_number_lengths) {
		return false;
	}

	const phoneWithoutCountry = phone.replace(new RegExp('^' + iso3166.country_code), '');

	return iso3166.phone_number_lengths.some(function (phone_number_length) {
		if (phoneWithoutCountry.length === phone_number_length) {
			return iso3166.mobile_begin_with.some(function (mobile_begin_with) {
				return phoneWithoutCountry.match(new RegExp('^' + mobile_begin_with));
			});
		}

		return false;
	});
};
