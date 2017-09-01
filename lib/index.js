/* eslint-disable */

'use strict';

const iso3166_data = require('./iso3166_data');
const getISO3166 = require('./getISO3166');
const get_iso3166_by_phone = require('./getISO3166ByPhone');
const validate_phone_iso3166 = require('./validatePhoneISO3166');


/**
 *
 * 1. If no "+" sign, must treat as USA phone
 * @param phone
 * @param country
 * @returns []
 */

module.exports = function (phone, country) {
	var result = [];

	phone = (phone === null || typeof(phone) !== 'string') ? '' : phone.trim();
	country = (country === null || typeof(country) !== 'string') ? '' : country.trim();

	var plus_sign = false;

	if (phone.match(/^\+/)) {
		plus_sign = true;
	}

	// remove any non-digit character, included the +
	phone = phone.replace(/\D/g, '');

	var iso3166 = getISO3166(country); // if no country, default is USA


	if (Object.keys(iso3166).length === 0) {
		return result;
	}

	if (country) {
		// remove leading 0s for all countries except 'GAB', 'CIV', 'COG'
		if (['GAB', 'CIV', 'COG'].indexOf(iso3166.alpha3) === -1) {
			phone = phone.replace(/^0+/, '');
		}

		// if input 89234567890, RUS, remove the 8
		if (iso3166.alpha3 === 'RUS' && phone.length === 11 && phone.match(/^89/) !== null) {
			phone = phone.replace(/^8+/, '');
		}


		if (plus_sign) {
			// D is here.
		} else {
			// C: have country, no plus sign --->
			//	case 1
			//		check phone_number_length == phone.length
			//		add back the country code
			//	case 2
			//		phone_number_length+phone_country_code.length == phone.length
			//		then go to D
			if (iso3166.phone_number_lengths.indexOf(phone.length) !== -1) {
				phone = iso3166.country_code + phone;
			}
		}
	} else {
		if (plus_sign) {
			// A: no country, have plus sign --> lookup country_code, length, and get the iso3166 directly
			// also validation is done here. so, the iso3166 is the matched result.
			iso3166 = get_iso3166_by_phone(phone);
		} else {
			// B: no country, no plus sign --> treat it as USA
			// 1. check length if == 11, or 10, if 10, add +1, then go go D
			// no plus sign, no country is given. then it must be USA
			// iso3166 = iso3166_data[0]; already assign by the default value
			if (iso3166.phone_number_lengths.indexOf(phone.length) !== -1) {
				phone = '1' + phone;
			}
		}
	}

	if (validate_phone_iso3166(phone, iso3166)) {
		return ['+' + phone, iso3166.alpha3];
	}
	return result;
};

module.exports.iso3166_data = iso3166_data;
