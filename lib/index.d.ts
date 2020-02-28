interface Country {
    alpha2: string;
    alpha3: string;
    country_code: string;
    country_name: string;
    mobile_begin_with: string[];
    phone_number_lengths: number[];
}

type PhoneResult = [string, string] | [];

type PhoneModule = {
    (phone: string, country?: string, allowLandLine?: boolean): PhoneResult;

    readonly iso3166_data: Country[]
};

export = PhoneModule;
