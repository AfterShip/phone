'use strict';

const iso3166_data = require('./iso3166Data');

module.exports = function getISO3166ByPhone(phone) {
	return iso3166_data
		.filter(iso3166_datum => phone.match(new RegExp('^' + iso3166_datum.country_code)))
		.filter(iso3166_datum => iso3166_datum.phone_number_lengths.some(length => {
			return phone.length === iso3166_datum.country_code.length + length;
		}))
		.find(iso3166_datum => iso3166_datum.mobile_begin_with.some(beginWith => {
			return phone.match(new RegExp('^' + iso3166_datum.country_code + beginWith));
		})) || {};
};
