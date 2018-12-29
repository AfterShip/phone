export interface IStackDriverError {
    jsonPayload: {
        data: string;
        message: "The phone number is not valid.";
    };
}

export interface ITwilioPhoneNumberInstance {
    countryCode: string;
    phoneNumber: string;
}

export interface Iiso3166 {
    alpha2: string;
    country_code: string;
    mobile_begin_with: string[];
    phone_number_lengths: number[];
}
