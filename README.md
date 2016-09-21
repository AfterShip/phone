## What is node-phone?
`node-phone` is used to normalize the `mobile` phone number into a E.164 format.

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


##FAQ (1.x branch)

1. Does node-phone do any phone validation?

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



##FAQ (0.0.x branch)

1. Does node-phone do any phone validation?

	Yes: If you provide the 2nd parameter (country), and the phone number do not start with `+` sign.

	`phone` will validate `phone_number_lengths` and `validation_begin_with`

	No: If the phone number start with `+` sign, even you pass the country.

	`phone` will simply remove all non digit and return `+XXXXXXXX` to you.

2. Why some of the number is valid, but return null?
	This npm is used to validate a mobile phone number for sending the SMS.
	So, we try to match all possible rule, such as area code, number prefix, etc. to test if it is a mobile phone number.
	However, some countries, like USA, we can only check if it is a valid `AREA CODE`, there is no mobile phone prefix.

	For UK, we know that mobile phone number is always start with `7`, in this case, this npm will be more helpful.

3. Why do you make this?

	Because we need to normalize the phone number for SMS notification for mobile phone only.

We don't validate if the number is mobile or not.


## Install
```
npm install phone
```



## Usage (1.x branch)
```
var phone = require('phone');
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


## Usage (0.0.x branch)
```
var phone = require('phone');

phone('(817) 569-8900', ''); // return +18175698900
phone('(817) 569-8900', 'USA'); // return +18175698900
phone('(817) 569-8900', 'HKG'); // return null
phone('+1(817) 569-8900', 'HKG'); // return +18175698900
phone('+1(817) 569-8900', ''); // return +18175698900
phone('(817) 569-8900', ''); // return +18175698900
phone('6123-6123', ''); // return null, as default country is USA
phone('6123-6123', 'HKG'); // return +85261236123
```


## Test

```
npm test
```

## Help

We try to google for many results, but none of package can fit our need.
If you know that our rule is wrong, or can add more validation to make this npm more accurate.
Please open an issue and let us know.

## Change Log
* 1.0.8 Apply pull request #53, 54

* 1.0.7 Apply pull request #48

* 1.0.6 Apply pull request #30, #45, #46

* 1.0.5 Bug fix for [#31](https://github.com/AfterShip/node-phone/issues/31), allow [extend more easily](https://github.com/AfterShip/node-phone/issues/32)

* 1.0.4 Support more countries with mobile prefix

* 1.0.0 `NOT compatible` with the `0.0.x branch`

    Major changes:
    1. phone will return array with `formatted phone` and `iso3166 alpha3`.
    2. If not valid, will return `empty array` instead of `null`.
    3. If `country` is passed, phone will do validation on the phone number against the country.
    If they are not match, phone will `return empty array` instead of the `formatted E.164 phone`.
* 0.0.6	Added France mobile prefix `7`, updated USA, Canada area code.
* 0.0.5	Performance tuning, updated Iceland mobile format to 7 digits only.
* 0.0.4	Added US, CA area code to make it more accurate.

## TO DO in version 2.0
- Support detect both land line and mobile
- Support more lookup other than ISO3166-alpha2, alpha3, may also support mobile country code (MCC)


## License
MIT

