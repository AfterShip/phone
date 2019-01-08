'use strict';

const iso3166_data = require('./iso3166Data');

module.exports = function getISO3166ByPhone(phone) {
	const filtered_by_country_code = iso3166_data
		.filter(iso3166_datum => phone.match(new RegExp('^' + iso3166_datum.country_code)));
	const exact_result = filtered_by_country_code.filter(iso3166_datum => iso3166_datum.phone_number_lengths.some(length => {
			return phone.length === iso3166_datum.country_code.length + length;
		})).find(iso3166_datum => {
			// some country doesn't have mobile_begin_with
			if (iso3166_datum.mobile_begin_with.length) {
				return iso3166_datum.mobile_begin_with.some(beginWith => {
					return phone.match(new RegExp('^' + iso3166_datum.country_code + beginWith));
				});
			}
			return true;
		});
	const possible_result = filtered_by_country_code.filter(iso3166_datum => iso3166_datum.phone_number_lengths.some(length => {
		return phone.length === iso3166_datum.country_code.length + length + 1;
	})).find(iso3166_datum => {
		// some country doesn't have mobile_begin_with
		if (iso3166_datum.mobile_begin_with.length) {
			return iso3166_datum.mobile_begin_with.some(beginWith => {
				// delete trunk prefix
				return phone.match(new RegExp('^' + iso3166_datum.country_code  + '\\d?' + beginWith));
			});
		}
		return true;
	});
	return [
		exact_result,
		possible_result,
	];
};
