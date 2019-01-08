# Phone &middot; [![Build Status](https://travis-ci.org/AfterShip/phone.svg?branch=v2)](https://travis-ci.org/AfterShip/phone) [![codecov](https://codecov.io/gh/AfterShip/phone/branch/master/graph/badge.svg)](https://codecov.io/gh/AfterShip/phone) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

## What is phone?
`phone` is used to normalize the `mobile` phone number into a E.164 format.

The common problem is user normally input the phone number in this way:

```
`(817) 569-8900` or
`817569-8900` or
`1(817) 569-8900` or
`+1(817) 569-8900` or ...
```

What we want is always:

```
+18175698900
```

## Install
```
npm install phone
```


## Usage
```javascript
import phone from 'phone';
phone('+852 6569-8900'); // return ['+85265698900', 'HKG']
phone('(817) 569-8900'); // return ['+18175698900, 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900, 'USA']
phone('(817) 569-8900', 'USA'); // return ['+18175698900', 'USA']
phone('(817) 569-8900', 'HKG'); // return []
phone('+1(817) 569-8900', 'HKG'); // return [], as it is not a valid HKG mobile phone number
phone('+1(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('(817) 569-8900', ''); // return ['+18175698900', 'USA']
phone('6123-6123', ''); // return [], as default country is USA
phone('6123-6123', 'HKG'); // return ['+85261236123', 'HKG']
```

## Test

```
npm test
```

## Old browsers & browser support

We currently transpile script to base on target env which that browser global usage '>1%' and "node: 6.11.5".

You can check on the [browserlist](http://browserl.ist/?q=%3E1%25)
You also need polyfill for some old browser more details please read the `README` inside the `example` folder


## FAQ

1. Does `phone` do any phone validation?

	Yes: If you provide the 2nd parameter (country), and the phone number do not start with `+` sign.

	`phone` will validate `phone_number_lengths` and `mobile_begin_with`

2. Why some of the number is valid, but return null?
	This npm is used to validate a mobile phone number for sending the SMS.
	So, we try to match all possible rule, such as area code, number prefix, etc. to test if it is a mobile phone number.
	However, some countries, like USA, we can only check if it is a valid `AREA CODE`, there is no mobile phone prefix.

	For UK, we know that mobile phone number is always start with `7`, in this case, this npm will be more helpful.

3. Why do you make this?

	Because we need to normalize the phone number for SMS notification for mobile phone only.

We don't validate if the number is mobile or not.


## Help

We try to google for many results, but none of package can fit our need.
If you know that our rule is wrong, or can add more validation to make this npm more accurate.
Please open an issue and let us know.

## License
MIT
