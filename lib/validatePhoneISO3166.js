'use strict';

/**
 *
 * @param {string} phone - phone number without plus sign, with or without country calling code
 * @param {Object} iso3166 - iso 3166 data
 * @param {String} iso3166.country_code - country calling codes
 * @param {Array} iso3166.phone_number_lengths - all available phone number lengths for this country
 * @param {Array} iso3166.mobile_begin_with - mobile begin with number
 * @param {boolean} allowLandline - true if we skip mobile begin with checking
 * @param {boolean} plusSign - true if the input contains a plus sign
 * @returns {*|boolean}
 */
module.exports = function validatePhoneISO3166(
  phone,
  iso3166,
  allowLandline,
  plusSign
) {
  if (!iso3166.phone_number_lengths) {
    return false;
  }

  // remove country calling code from the phone number
  const phoneWithoutCountry = phone.replace(
    new RegExp('^' + iso3166.country_code),
    ''
  );

  // if the phone number have +, iso3166 detected,
  // but the phone number does not have country calling code
  // then should consider the phone number as invalid
  if (plusSign && iso3166 && phoneWithoutCountry.length === phone.length) {
    return false;
  }

  const phone_number_lengths = iso3166.phone_number_lengths;
  const mobile_begin_with = iso3166.mobile_begin_with;

  const isLengthValid = phone_number_lengths.some(
    (length) => phoneWithoutCountry.length === length
  );
  // some country doesn't have mobile_begin_with
  const isBeginWithValid = mobile_begin_with.length
    ? mobile_begin_with.some((beginWith) =>
        phoneWithoutCountry.match(new RegExp('^' + beginWith))
      )
    : true;

  return isLengthValid && (allowLandline || isBeginWithValid);
};
