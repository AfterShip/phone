require('dotenv').config();

import { IStackDriverError, ITwilioPhoneNumberInstance, Iiso3166 } from './interface';
import * as _find from 'lodash/find';

const errors: IStackDriverError[] = require('./errors.json');
const iso3166s: Iiso3166[] = require('../../lib/iso3166Data');
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;
const client = require('twilio')(accountSid, authToken);

const error_numbers = errors.map(({ jsonPayload: {data} }) => {
                            return client
                                    .lookups
                                    .phoneNumbers(data)
                                    .fetch()
                                    .catch(err => console.log(err.message));
                        });

~async function() {
    const lookups = await Promise.all(error_numbers);
    const filteredLookups: ITwilioPhoneNumberInstance[] = lookups.filter(v => v);
    const deduplatedLookups = [...new Set(
        filteredLookups.map(({ phoneNumber, countryCode }) => `${countryCode}:${phoneNumber}`),
    )].map(str => {
       const [countryCode, phoneNumber] = str.split(':');
       return {countryCode, phoneNumber};
    });

    const sumByAlpha2 = deduplatedLookups.reduce((sum, { countryCode, phoneNumber }) => {
        const [{
            alpha2,
            country_code,
            mobile_begin_with,
            phone_number_lengths,
        }] = iso3166s.filter(({ alpha2 }) => alpha2 === countryCode);
        const localPhoneNumber = phoneNumber.replace('+' + country_code, '');
        const isBeginWithRight = mobile_begin_with.some(num => new RegExp(`^${num}`).test(localPhoneNumber));
        const new_mobile_begin_with = isBeginWithRight ? mobile_begin_with: mobile_begin_with.concat(localPhoneNumber[0]);
        const new_phone_number_lengths = [...new Set(phone_number_lengths.concat(localPhoneNumber.length))];
        
        if (sum[alpha2]) {
            const sum_alpha2 = sum[alpha2];
            return {
                ...sum,
                [alpha2]: {
                    country_code,
                    mobile_begin_with: [...new Set([
                        ...new_mobile_begin_with, 
                        ...sum_alpha2.mobile_begin_with
                    ])],
                    phone_number_lengths: [...new Set([
                        ...new_phone_number_lengths,
                        ...sum_alpha2.phone_number_lengths,
                    ])]
                }
            };
        } else {
            return {
                ...sum,
                [alpha2]: {
                    country_code,
                    mobile_begin_with: new_mobile_begin_with,
                    phone_number_lengths: new_phone_number_lengths
                }
            }
        }
    }, {});

    console.log( Object.keys(sumByAlpha2).map(alpha2 => ({ alpha2, ...sumByAlpha2[alpha2] })));
}();
