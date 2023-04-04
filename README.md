# Phone &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com) [![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAfterShip%2Fphone.svg?type=shield)](https://app.fossa.com/projects/git%2Bgithub.com%2FAfterShip%2Fphone?ref=badge_shield)

## What is phone?
`phone` is used to normalize mobile phone numbers into E.164 format.

A common problem is that users normally input phone numbers in this way:

```
`(817) 569-8900` or
`817569-8900` or
`1(817) 569-8900` or
`+1(817) 569-8900` or ...
```

We always want:

```
+18175698900
```

## Install
```
npm install phone

// or

yarn add phone
```

## Usage

```javascript
const {phone} = require('phone');

// or

import {phone} from 'phone';
```

### 1. Simple usage

```javascript
phone('+852 6569-8900');
// { isValid: true, phoneNumber: '+85265698900',  countryIso2: 'HK', countryIso3: 'HKG', countryCode: '+852' }
```

### 2. With Country

```javascript
phone('+1(817) 569-8900', {country: ''}); 
// { isValid: true, phoneNumber: '+18175698900', countryIso2: 'US', countryIso3: 'USA', countryCode: '+1'}

phone('(817) 569-8900', {country: 'USA'});
// { isValid: true, phoneNumber: '+18175698900', countryIso2: 'US', countryIso3: 'USA', countryCode: '+1'}

phone('(817) 569-8900', {country: 'HKG'});
// { isValid: false }
// not a valid HKG mobile phone number

phone('+1(817) 569-8900', {country: 'HKG'});
// { isValid: false }
// not a valid HKG mobile phone number

phone('6123-6123', {country: 'HKG'});
// { isValid: true, phoneNumber: '+85261236123', countryIso2: 'HK', countryIso3: 'HKG', countryCode: '+852' }
```

### 3. Without country code and no phone prefix

If both country code and country phone prefix are not provided, the phone number will be treated as USA or Canada by default.

```javascript
phone('(817) 569-8900');
// { isValid: true, phoneNumber: '+18175698900', countryIso2: 'US', countryIso3: 'USA', countryCode: '+1' }

phone('(817) 569-8900', {country: ''});
// { isValid: true, phoneNumber: '+18175698900', countryIso2: 'US', countryIso3: 'USA', countryCode: '+1' }

phone('780-569-8900', {country: null});
// { isValid: true, phoneNumber: '+17805698900', countryIso2: 'CA', countryIso3: 'CAN', countryCode: '+1' }
// 780 is a Canada phone prefix

phone('6123-6123', {country: null});
// { isValid: false }
// as default country is USA / CAN and the phone number does not fit such countries' rules
```

### 4. With country code / phone prefix, but no `+` sign

Even you input a valid phone number with a valid prefix, if there is no plus sign, it will not work as expected:

```javascript
phone('85291234567');
// or
phone('85291234567', {country: null});

// { isValid: false }
```

`852` is a valid Hong Kong phone prefix, and `91234567` is a valid Hong Kong mobile phone number.
However, there is no plus sign provided, the module will assume the phone number is a USA or Canada phone number, 
hence no result will be found.   

If you know you have provided country phone prefix, make sure you also provide a plus sign:

```javascript
phone('+85291234567');
// or
phone('+85291234567', {country: null});

// { isValid: true, phoneNumber: '+85291234567', countryIso2: 'HK', countryIso3: 'HKG', countryCode: '+852' }
```

or, if you know the country, and only want to reformat the phone number to E.164 format:

```javascript
phone('91234567',  {country: 'HKG'})
// { isValid: true, phoneNumber: '+85291234567', countryIso2: 'HK', countryIso3: 'HKG', countryCode: '+852' }
```

### 5. Skipping phone number initial digit checking

If you want to skip phone number initial digit checking, set `validateMobilePrefix` to false:

```javascript
phone('+(852) 2356-4902');
// { isValid: false }
// '2' is a Hong Kong landline phone number prefix, not a valid mobile phone number prefix

phone('+(852) 2356-4902', {validateMobilePrefix: true});
// { isValid: false }
// same as above, default value of validateMobilePrefix = true

phone('+(852) 2356-4902', {validateMobilePrefix: false});
// { isValid: true, phoneNumber: '+85223564902', countryIso2: 'HK', countryIso3: 'HKG', countryCode: '+852' }
// skipping mobile prefix checking
```

With `validateMobilePrefix` set to `false`, the initial digit checking logic will be disabled completely, even you enter a phone number start with a non-exist digit:

```javascript
phone('+(852) 0356-4902', {validateMobilePrefix: false});
// { isValid: true, phoneNumber: '+85203564902', countryIso2: 'HK', countryIso3: 'HKG', countryCode: '+852' }
// even the phone number start with `0` is not a valid landline phone number
```
Note that the module does not have the capability to determine if the prefix is a valid `landline` prefix number.

### 6. Trunk Code Detection Logic

For some phone numbers, such as this sample UK phone number:

```
+44 07911 123456
```

There is a trunk code `0` after the country code `+44` so that it is unable to match any correct country.

Hence the module will try to remove 1 digit after the country code,

and try to detect:

```
+44 7911 123456
```

and it would become a valid UK phone number now.

```javascript
phone('+4407911 123456')
// { isValid: true, phoneNumber: '+447911123456', countryIso2: 'GB', countryIso3: 'GBR', countryCode: '+44' }
```

If you want to disable this behavior, 
please set `strictDetection` to `true`:

```javascript
phone('+4407911 123456', {strictDetection: true})
// { isValid: false }
```

## API

```typescript
const {phone} = require('phone');

// or

import {phone} from 'phone';

phone(phoneNumber: string, { country, validateMobilePrefix, strictDetection }?: {
    country?: string;
    validateMobilePrefix?: boolean;
    strictDetection?: boolean;
})
```

#### Input

Parameter | Type | Required | Default | Description
--- | --- | --- | --- | ---
phoneNumber | String | Yes | - | The phone number text you want to process
country | String | No | null | Provided country code in iso-3166 alpha 2 or 3 format
validateMobilePrefix | Boolean | No | true | Set to false if you want to skip phone number initial digit checking
strictDetection | Boolean | No | false | Set to true if you want to disable trunk code detection logic. 

#### Returns

```typescript
type PhoneResult = PhoneInvalidResult | PhoneValidResult;

interface PhoneValidResult {
	isValid: true;
	phoneNumber: string;
	countryIso2: string;
	countryIso3: string;
	countryCode: string;
}

interface PhoneInvalidResult {
	isValid: false;
	phoneNumber: null;
	countryIso2: null;
	countryIso3: null;
	countryCode: null;
}
```

Parameter | Type | Description
--- | --- | ---
isValid | Boolean | To indicate if the result valid
phoneNumber | String or null | Normalized phone number in E.164 format
countryIso2 | String or null | Detected phone number country code in iso-3166 alpha 2 format
countryIso3 | String or null | Detected phone number country code in iso-3166 alpha 3 format
countryCode | String or null | Detected phone number country calling code with `+` sign

[comment]: <> (## Demo)

[comment]: <> ([Try it on CodeSandbox]&#40;https://codesandbox.io/s/phone-browser-example-react-o5vt5?file=/src/App.js&#41;)

## Test

```
yarn test
```

## Interactive Web Example 

```
yarn start:example
```

or 

```
yarn dev
```

And then visit http://localhost:8080

## Build

```
yarn build
```

[comment]: <> (## Supported Environment)

[comment]: <> (We currently transpile script to work on target environments for which the browser's global usage is >1%, and Node.js 6.10+.)

[comment]: <> (You can check browser usage statistics on the [browserlist]&#40;http://browserl.ist/?q=%3E1%25&#41;.)

[comment]: <> (You may need polyfills for some older browsers; for more details, please read the `example/README` file.)


## FAQ

1. Does `phone` do any logical validation?

	Yes. If you provide `country`, and the phone number does not start with `+` sign,

	the module will validate `phone_number_lengths` and `mobile_begin_with`

2. Why is `phone` returning an invalid result for a valid phone number?

	By default, the function will validate a mobile phone number only, to validate a landline phone number, please set `validateMobilePrefix` to `false`.

	If you find the result is still incorrect, please submit a ticket to improve our validation rules.

3. Why is `phone` returning an object with `isValid = false` instead of returning a null directly?

    It reserves the flexibility to extend the response interface for invalid result in future.

## Migrate from v2

The interface of v3 has been changed for better usability, maintainability and flexibility, this shows all the changes from v2:

#### Function Interface

Version | Interface
--- | ---
v2 | phone(phoneNumber, country, allowLandline) 
v3 | phone(phoneNumber,{country: String, validateMobilePrefix: Boolean, strictDetection: Boolean})

#### Function Response

Version | Result | Interface
--- | --- | ---
v2 | - | [phoneNumber, country]
v3 | Valid | {isValid: true, phoneNumber: string, countryIso2: string, countryIso3: string, countryCode: string}
v3 | Invalid | {isValid: false, phoneNumber: null, countryIso2: null, countryIso3: null, countryCode: null}

#### allowLandline vs validateMobilePrefix

`allowLandline` in v2 is essentially equals to `validateMobilePrefix` in v3, however, the value is opposite.

Because `allowLandline = true` in v2 means "Skip the mobile phone number prefix validation", and there is NO capability to verify if the input phone number is a valid landline phone number.

To avoid the misleading information, the parameter name has been changed to `validateMobilePrefix`, and the input value is opposite, while `validateMobilePrefix = false` means "Skip the mobile phone number prefix validation".


## Help

We've tried to make sure that this package works for as many cases as possible, if you notice that we have an incorrect rule for a country or other case, please open an issue to let us know.

For creating new pull requests regarding add or modify phone number formats, please include the reference information such as PDFs, websites, etc. Thank you very much. 

**The library supports mobile phone number format only.** We are unable to provide landline phone number support as we do not have landline phone number format data, hence we do not accept PRs for landline phone numbers.

## License

This project is licensed under the [MIT license](https://github.com/AfterShip/phone/blob/master/LICENSE).


[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2FAfterShip%2Fphone.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2FAfterShip%2Fphone?ref=badge_large)
