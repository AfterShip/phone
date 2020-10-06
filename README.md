# Phone &middot; [![Build Status](https://travis-ci.org/AfterShip/phone.svg?branch=v2)](https://travis-ci.org/AfterShip/phone) [![codecov](https://codecov.io/gh/AfterShip/phone/branch/master/graph/badge.svg)](https://codecov.io/gh/AfterShip/phone) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)

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
```

or

```
yarn add phone
```

## Demo

[Try it on CodeSandbox](https://codesandbox.io/s/phone-browser-example-react-o5vt5?file=/src/App.js)

## Usage
```javascript
const phone = require('phone');

phone('+852 6569-8900'); // return ['+85265698900', 'HKG']
phone('+1(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('(817) 569-8900', 'USA'); // return ['+18175698900', 'USA']
phone('(817) 569-8900', 'HKG'); // return []
phone('+1(817) 569-8900', 'HKG'); // return [], as it is not a valid HKG mobile phone number
phone('6123-6123', 'HKG'); // return ['+85261236123', 'HKG']
```

## Without country code and no phone prefix

If both country code and country phone prefix are not provided, will treat as USA or Canada by default 

```javascript
phone('(817) 569-8900'); // return ['+18175698900, 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900, 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('780-569-8900', ''); // return ['+17805698900, 'CAN'], 780 is a Canada phone prefix
phone('6123-6123', ''); // return [], as default country is USA / CAN and it does not match any result
```

Even you input a valid phone number with a valid prefix, if there is no plus sign, it will not work as expected:

```javascript
phone('85291234567', '')
```

`852` is a valid Hong Kong phone prefix, and `91234567` is a valid Hong Kong mobile phone number.
However, there is no plus sign provided, the module will assume the phone number is a USA or Canada phone number, 
hence no result will be found.   

If you know you have provided country phone prefix, make sure you also provide a plus sign:

```javascript
phone('+85291234567', '')

// return [ '+85291234567', 'HKG' ]
```

or, if you know the country, and only want to reformat the phone number to E.164 format:

```javascript
phone('91234567', 'HKG')

// return [ '+85291234567', 'HKG' ]
```



## Skipping phone number initial digit checking

If you want to skip phone number initial digit checking, set `allowLandline` to true:

```javascript
phone('+(852) 2356-4902', '', true);
```

And the initial digit checking will be disabled completely, even you enter a phone number start with a non-exist digit:

```javascript
phone('+(852) 0356-4902', '', true); // return [ '+85203564902', 'HKG' ], even the phone number start with `0` is not a valid landline phone number
```

## API

```javascript
const phone = require('phone');
```

### `phone(phone: String, [country: string, allowLandline: Boolean]): Array`

#### Input

Parameter | Type | Required | Description
--- | --- | --- | ---
phone | String | Yes | The phone number text you want to process
country | String | No | Provided country code in iso-3166 alpha 2 or 3 format
allowLandLine | Boolean | No | Set to true if you want to skip phone number initial digit checking

#### Returns

The return would always be an Array

Array index | Type | Description
--- | --- | ---
0 | String | Normalized phone number in E.164 format
1 | String | Detected phone number country code in iso-3166 alpha 3 format

If the phone number cannot be reformatted due to any reason (e.g. unable to match any country), the result would be an empty array.

The function response is in Array format for some historical reason and expected to be updated to a proper object response in the next major version bump. (Will not change on version 2.x)

## Test

```
yarn test
```

## Build

```
yarn build
```

## Old browsers & browser support

We currently transpile script to work on target environments for which the browser's global usage is >1%, and Node.js 6.10+.

You can check browser usage statistics on the [browserlist](http://browserl.ist/?q=%3E1%25).

You may need polyfills for some older browsers; for more details, please read the `example/README` file.


## FAQ

1. Does `phone` do any logical validation?

	Yes. If you provide the 2nd parameter (country), and the phone number does not start with `+` sign.

	`phone` will validate `phone_number_lengths` and `mobile_begin_with`

2. Why is `phone` returning null for a valid phone number?

	By default, the function will validate a mobile phone number only, to validate a landline phone number, please set 3rd parameter `allowLandline` to true.

	If you find the result is still incorrect, please submit a ticket to improve our validation rules.

3. How does `allowLandline` work?
	
	Mobile phone number detection is achieved by comparing the beginning digits of a phone number to a list of possible mobile prefixes for a country. In some countries, some or all of these prefixes are the same for both mobile phones and landlines; when `allowLandline` is set to `false` you should not assume that all possible landline phone numbers will be reliably filtered out.


## Help

We've tried to make sure that this package works for as many cases as possible, if you notice that we have an incorrect rule for a country or other case, please open an issue to let us know.

For creating new pull requests regarding add or modify phone number formats, please include the reference information such as PDFs, websites, etc. Thank you very much. 

## License

This project is licensed under the [MIT license](https://github.com/AfterShip/phone/blob/master/LICENSE).
