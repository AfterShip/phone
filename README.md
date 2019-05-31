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


## Usage
```javascript
const phone  = require('phone');

phone('+852 6569-8900'); // return ['+85265698900', 'HKG']
phone('+1(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('(817) 569-8900', 'USA'); // return ['+18175698900', 'USA']
phone('(817) 569-8900', 'HKG'); // return []
phone('+1(817) 569-8900', 'HKG'); // return [], as it is not a valid HKG mobile phone number
phone('6123-6123', 'HKG'); // return ['+85261236123', 'HKG']
```

If both country code and country phone prefix are not provided, will treat as USA or Canada by default 

```javascript
phone('(817) 569-8900'); // return ['+18175698900, 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900, 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('780-569-8900', ''); // return ['+17805698900, 'CAN'], 780 is a Canada phone prefix
phone('6123-6123', ''); // return [], as default country is USA / CAN and it does not match any result
```

## Test

```
npm test
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

	This package is used to validate a mobile phone number for sending the SMS.

	Therefore, we try to match all possible rules for specifically checking whether a number is mobile, such as area code, number prefix, etc.

	However, some countries, like the USA, don't have mobile identifiers, so we can only check if the input has a valid area code.

	For example, we know that UK mobile phone numbers always start with `7`. In this case, `phone` can verify that the number is actually mobile.


## Help

We've tried to make sure that this package works for as many cases as possible, if you notice that we have an incorrect rule for a country or other case, please open an issue to let us know.

For creating new pull requests regarding add or modify phone number formats, please include the reference information such as PDFs, websites, etc. Thank you very much. 

## License

This project is licensed under the [MIT license](https://github.com/AfterShip/phone/blob/master/LICENSE).
