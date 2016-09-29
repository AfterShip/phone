'use strict';

var iso3166_data = require('./iso3166_data');

function searchArray(array, key, value) {
	for (var i = 0; i < array.length; i++) {
		if (array[i][key].toUpperCase() === value) {
			return array[i];
		}
	}
	return {};
}

function getISO3166ByCountry(country) {
	// assign default to USA country first
	var iso3166 = {};
	var upper_case_country = country.toUpperCase();

	switch (country.length) {
		case 0:
			iso3166 = iso3166_data[0];
			break;
		case 2:
			iso3166 = searchArray(iso3166_data, 'alpha2', upper_case_country);
			break;
		case 3:
			iso3166 = searchArray(iso3166_data, 'alpha3', upper_case_country);
			break;
		default:
			iso3166 = searchArray(iso3166_data, 'country_name', upper_case_country);
	}

	return iso3166;
}

function getISO3166ByPhone(phone) {
	var iso3166 = {};
	for (var i = 0; i < iso3166_data.length; i++) {
		var iso3166_obj = iso3166_data[i];

		var regex = new RegExp('^' + iso3166_obj.country_code);
		var c_l = iso3166_obj.country_code.length;
		var p_l_arr = iso3166_obj.phone_number_lengths;

		// check if phone macth the country_code & phone length
		if (phone.match(regex) && p_l_arr.indexOf(phone.length - c_l) > -1) {
			var mobile_prefix = iso3166_obj.mobile_begin_with;
			for (var j = 0; j < mobile_prefix.length; j++) {
				// check if phone macth the prefix (country_code + mobile_prefix)
				if (phone.match(new RegExp('^' + iso3166_obj.country_code + mobile_prefix[j]))) {
					return iso3166_obj;
				}
			}
		}
	}
	return iso3166;
}

function validatePhoneISO3166(phone, iso3166) {
	phone = phone.replace(new RegExp('^' + iso3166.country_code), '');

	if (!iso3166.phone_number_lengths) {
		return false;
	}

	var p_l_arr = iso3166.phone_number_lengths;
	if (p_l_arr.indexOf(phone.length) > -1) {
		var mobile_prefix = iso3166.mobile_begin_with;
		for (var i = 0; i < mobile_prefix.length; i++) {
			if (phone.match(new RegExp('^' + mobile_prefix[i]))) {
				return true;
			}
		}
	}
	return false;
}

function buildResult(phone, iso3166) {
	var area_code_support_list = ['USA', 'CAN'];

	var result = {
		phone_number: '+' + phone,
		phone_beautified: '',
		country: iso3166.country_code,
		area_code: '',
		number: '',
		iso3: iso3166.alpha3,
		type: 'm'
	};

	var sliced_phone = '';
	if (area_code_support_list.indexOf(iso3166.alpha3) > -1) {
		// return string, accept empty string, as some phone numbers doesn't have areacode
		phone = phone.replace(new RegExp('^' + iso3166.country_code), '');

		var area_code = '';
		for (var i = 0; i < iso3166.mobile_begin_with.length; i++) {
			if (phone.match(new RegExp('^' + iso3166.mobile_begin_with[i]))) {
				area_code = iso3166.mobile_begin_with[i];
				break;
			}
		}

		var slice_index = area_code.length;
		sliced_phone = phone.slice(slice_index);
		result.phone_beautified = '+' + iso3166.country_code + '(' + area_code + ')' + sliced_phone.match(/.{1,4}/g).join('-');
		result.area_code = area_code;
		result.number = sliced_phone;
		return result;
	}

	sliced_phone = phone.slice(iso3166.country_code.length);
	result.number = phone.slice(iso3166.country_code.length);
	result.phone_beautified = '+' + iso3166.country_code + ' ' + sliced_phone.match(/.{1,4}/g).join('-');
	result.area_code = '';

	return result;
}

/**
 *
 * If no "+" sign, must treat as USA phone
 * @param {String} phone
 * @param {String} country
 * @returns {Object}
 */

module.exports = function (phone, country) {
	var result = {
		error: 'Invalid phone number'
	};

	phone = (!phone || typeof (phone) !== 'string') ? '' : phone.trim();
	country = (!country || typeof (country) !== 'string') ? '' : country.trim();

	var plus_sign = false;

	if (phone.match(/^\+/)) {
		plus_sign = true;
	}

	// remove any non-digit character, included the +
	phone = phone.replace(/\D/g, '');

	var iso3166 = getISO3166ByCountry(country); // if no country, default is USA

	// check if the object is empty
	if (Object.keys(iso3166).length === 0) {
		return result;
	}

	if (country) {
		// Case 1: have country, no plus sign --->
		//  case a
		//    check phone_number_length == phone.length
		//    add back the country code
		//  case b
		//    phone_number_length+phone_country_code.length == phone.length
		//    then go to 4
		// remove leading 0s for all countries except 'GAB', 'CIV', 'COG'
		if (['GAB', 'CIV', 'COG'].indexOf(iso3166.alpha3) === -1) {
			phone = phone.replace(/^0+/, '');
		}

		// if input 89234567890, RUS, remove the 8
		if (iso3166.alpha3 === 'RUS' && phone.length === 11 && phone.match(/^89/) !== null) {
			phone = phone.replace(/^8+/, '');
		}

		if (!plus_sign && iso3166.phone_number_lengths.indexOf(phone.length) > -1) {
			phone = iso3166.country_code + phone;
		}
	} else {
		if (plus_sign) {
			// Case 2: no country, have plus sign --> lookup country_code, length, and get the iso3166 directly
			// also validation is done here. so, the iso3166 is the matched result.
			iso3166 = getISO3166ByPhone(phone);
		} else {
			// Case 3: no country, no plus sign --> treat it as USA
			// 1. check length if == 11, or 10, if 10, add +1, then go to 4
			// no plus sign, no country is given. then it must be USA
			// iso3166 = iso3166_data[0]; already assign by the default value
			if (iso3166.phone_number_lengths.indexOf(phone.length) !== -1) {
				phone = '1' + phone;
			}
		}
	}

	// Case 4: final check
	if (validatePhoneISO3166(phone, iso3166)) {
		return buildResult(phone, iso3166);
	}

	return result;
};
