## What is node-phone?

`node-phone` is used to normalize the `mobile` phone number into a [E.164 formatting](https://en.wikipedia.org/wiki/E.164)

The common problem is user normally input the phone number in this way:

```
`(817) 569-8900` or
`817569-8900` or
`1(817) 569-8900` or
`+1(817) 569-8900` or ...
```

The module will return the phone number in the following format:

```
+18175698900
```



## Install

```
npm install phone --save
```



## Usage

```
var phone = require('phone');
var result = phone('(817) 569-8900');

// result
{
	phone_number: '+18175698900',
	phone_beautified: '+1(817)5698-900', // in +C(AAA)NNN-NNN, +country code first, then (area_code), then every 4 digits separate by "-"
	country: '1',
	area_code: '817',
	number: '5698900',
	iso3: 'USA',
	type: 'm' // m for mobile, l for land line, 'u' for unknown
}
```



------

```
var result = phone('+852 6569-8900');

// result
{
	phone_number: '+85265698900',
	phone_beautified: '+852 6569-8900',
	country: '852',
	area_code: '',
	number: '65698900',
  	iso3: 'HKG',
  	type: 'm'
}
```



------

```
var result = phone('invalid phone number');

// result
{
	error: 'Invalid phone number'
}
```



Note: For the area_code in phone_beautified field, just supports USA and CAN phone numbers.



## Test

```
npm test
```



## FAQ

1. Does node-phone do any phone validation?

   Yes, if you provide the 2nd parameter (country), and the phone number do not start with `+` sign.

   The module will validate `phone_number_lengths` and `mobile_begin_with`

   ​

2. Why some of the number is valid, but return null?

   This module is used to validate a mobile phone number for sending the SMS.

   So, we try to match all possible rule, such as area code, number prefix, etc. to test if it is a mobile phone number.

   However, some countries, like USA, we can only check if it is a valid `AREA CODE`, there is no mobile phone prefix.

   For UK, we know that mobile phone number is always start with `7`, in this case, this module will be more helpful.

   ​

The module does not validate if the number is mobile or not.



## Help

We try to search for many results, but none of package can fit our need.

If you know that our rule is wrong, or can add more validation to make this npm more accurate.

Please open an issue and let us know.



## Change Log

- 2.0.0 First release



## License

MIT

