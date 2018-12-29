require('dotenv').config();

const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

~function() {
    if (!accountSid || !authToken) {
        throw new Error('Please set environment TWILIO_SID & TWILIO_TOKEN first!');
    }
}();

import { IStackDriverError, ITwilioPhoneNumberInstance, Iiso3166 } from './interface';
import * as _find from 'lodash/find';
import * as fs from 'fs';
import * as path from 'path';

const errors: IStackDriverError[] = require('./stackdriver/errors.json');
const error_phone_array: string[] = require('./stackdriver/error_list.json');
const iso3166s: Iiso3166[] = require('../../lib/iso3166Data');
const client = require('twilio')(accountSid, authToken);

~async function() {
    const error_numbers = [...new Set(
        errors.map(({ jsonPayload: {data} }) => data)
                .concat(error_phone_array)
                .map(data => {
                    const formatted_number = data.replace(/[\s|-]+/g, '');
                    return formatted_number;
                }),
    )];
    const errorStream = fs.createWriteStream(path.resolve(__dirname, './logs/error.log'));
    const twilioPromises = error_numbers.map(num => {
        return client
                .lookups
                .phoneNumbers(num)
                .fetch()
                .catch(err => {
                    errorStream.write(`${num}:\n ${JSON.stringify(err, null, 4)}\n`);
                });
    });

    const lookups = await Promise.all(twilioPromises).then(v => {
        errorStream.end();
        return v;
    });
    const filteredLookups: ITwilioPhoneNumberInstance[] = lookups.filter(v => v);
    const deduplatedLookups = [...new Set(
        filteredLookups.map(({ phoneNumber, countryCode }) => `${countryCode}:${phoneNumber}`),
    )].map(str => {
       const [countryCode, phoneNumber] = str.split(':');
       return {countryCode, phoneNumber};
    });

    const sumByAlpha2 = deduplatedLookups.reduce((sum, { countryCode, phoneNumber }) => {
        const [matched_item] = iso3166s.filter(({ alpha2 }) => alpha2 === countryCode);
        const {
            alpha2,
            country_code,
            mobile_begin_with,
            phone_number_lengths,
        } = matched_item;
        const localPhoneNumber = phoneNumber.replace('+' + country_code, '');
        const isBeginWithRight = mobile_begin_with.length === 0 || mobile_begin_with.some(num => new RegExp(`^${num}`).test(localPhoneNumber));
        const new_mobile_begin_with = isBeginWithRight ? mobile_begin_with: mobile_begin_with.concat(localPhoneNumber.slice(0, mobile_begin_with[0].length));
        const new_phone_number_lengths = [...new Set(phone_number_lengths.concat(localPhoneNumber.length))];
        
        const sum_alpha2 = sum[alpha2];
        return {
            ...sum,
            [alpha2]: {
                ...matched_item,
                mobile_begin_with: sum_alpha2 ? 
                    [...new Set([
                        ...new_mobile_begin_with, 
                        ...sum_alpha2.mobile_begin_with
                    ])] : 
                    new_mobile_begin_with,
                phone_number_lengths: sum_alpha2 ?
                    [...new Set([
                        ...new_phone_number_lengths,
                        ...sum_alpha2.phone_number_lengths,
                    ])] : 
                    new_phone_number_lengths
            }
        };
    }, {});

    const resultStream = fs.createWriteStream(path.resolve(__dirname, './logs/result.log'));
    resultStream.write(JSON.stringify(sumByAlpha2, null, 4));
    resultStream.end();
}();
