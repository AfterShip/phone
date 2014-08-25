var iso3166_data = require('./iso3166.json').filter(function(element) {
	// Strip out unknown phone_number_lengths countries
	return element.phone_number_lengths.length !== 0;
});

function getISO3166(country) {
	// assign default to USA country first
	var iso3166 = {},
		i;

	if (typeof country === "number") {
		for (i in iso3166_data) {
			if (iso3166_data[i].mcc_codes.indexOf("" + country) !== -1) {
				iso3166 = iso3166_data[i];
				break;
			}
		}
	} else {
		switch (country.length) {
			case 0:
				for (i in iso3166_data) {
					if ("USA" === iso3166_data[i].alpha3) {
						iso3166 = iso3166_data[i];
						break;
					}
				}
				break;
			case 2:
				for (i in iso3166_data) {
					if (country.toUpperCase() === iso3166_data[i].alpha2) {
						iso3166 = iso3166_data[i];
						break;
					}
				}
				break;
			case 3:
				for (i in iso3166_data) {
					if (country.toUpperCase() === iso3166_data[i].alpha3) {
						iso3166 = iso3166_data[i];
						break;
					}
				}
				break;
			default:
				for (i in iso3166_data) {
					if (country.toLowerCase() === iso3166_data[i].country_name.toLowerCase()) {
						iso3166 = iso3166_data[i];
						break;
					}
				}
		}
	}
	console.log(country, iso3166.alpha3);
	return iso3166;
}

function get_iso3166_by_phone(phone) {
	var regex;
	for (var i in iso3166_data) {
		regex = new RegExp('^' + iso3166_data[i].country_code);

		for (var j in iso3166_data[i].phone_number_lengths) {
			if (phone.match(regex) && phone.length === iso3166_data[i].country_code.length + iso3166_data[i].phone_number_lengths[j]) {
				// it match.. but may have more than one result.
				// e.g. USA and Canada. need to check mobile_begin_with

				for (var k in iso3166_data[i].mobile_begin_with) {
					if (phone.match(new RegExp('^' + iso3166_data[i].country_code + iso3166_data[i].mobile_begin_with[k]))) {
						return iso3166_data[i]
					}
				}
			}
		}
	}

	return {};
}


function validate_phone_iso3166(phone, iso3166) {
	phone = phone.replace(new RegExp('^' + iso3166.country_code), '');
	for (var i in iso3166.phone_number_lengths) {
		if (phone.length === iso3166.phone_number_lengths[i]) {
			for (var j in iso3166.mobile_begin_with) {
				if (phone.match(new RegExp('^' + iso3166.mobile_begin_with[j]))) {
					return true;
				}
			}
		}
	}

	return false;
}

/**
 *
 * 1. If no "+" sign, must treat as USA phone
 * @param phone
 * @param country
 * @returns []
 */

module.exports = function(phone, country, info) {
	var result = [];

	if (["alpha2", "alpha3", "country_code", "country_name", "mcc"].indexOf(country) !== -1) {
		info = country;
		country = undefined;
	} else if (info === undefined) {
		info = "alpha3";
	}

	phone = (typeof(phone) !== 'string') ? '' : phone.trim();
	if (typeof(country) !== 'number') {
		country = (typeof(country) !== 'string') ? '' : country.trim();
	}

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
			//iso3166 = iso3166_data[0]; already assign by the default value
			if (iso3166.phone_number_lengths.indexOf(phone.length) !== -1) {
				phone = '1' + phone;
			}
		}


	}

	if (validate_phone_iso3166(phone, iso3166)) {
		var phoneInfo;

		if (info === "mcc") {
			if (iso3166.mcc_codes.length > 0) {
				phoneInfo = iso3166.mcc_codes[0];
			}
		} else {
			phoneInfo = iso3166[info];
		}

		return ['+' + phone, phoneInfo];
	}

	return result;
};
