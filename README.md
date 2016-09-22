## What is node-phone?
`node-phone` is used to normalize the `mobile` phone number into a [E.164 formatting](https://en.wikipedia.org/wiki/E.164)

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



## Install
```
npm install phone --save
```


## Usage (2.x branch)
```
var phone = require('phone');

console.log(phone('(817) 569-8900'));

// output
{
	phone_number: '+18175698900',
	phone_beautified: '+1(817)5698-900', // in +C(AAA)NNN-NNN, +country code first, then (area_code), then every 4 digits separate by "-"
	country: '1',
	area_code: '817',
	number: '5698900',
  iso3: 'USA',
  type: 'm' // m for mobile, l for land line, 'u' for unknown
}

console.log(phone('+852 6569-8900'));

// output
{
	phone_number: '+85265698900',
	phone_beautified: '+852 6569-8900',
	country: '852',
	area_code: '',
	number: '65698900',
  iso3: 'HKG',
  type: 'm'
}

console.log(phone('invalid phone number'));

// output
{
	error: 'Invalid phone number'
}

```

Note: For the phone_beautified field, just supports USA and CAN phone numbers.

## Test

```
npm test
```

## Help

We try to google for many results, but none of package can fit our need.
If you know that our rule is wrong, or can add more validation to make this npm more accurate.
Please open an issue and let us know.

## Change Log
* 2.0.0 First release


## TO DO in version 2.0
- Support detect both land line and mobile
- Support more lookup other than ISO3166-alpha2, alpha3, may also support mobile country code (MCC)


## License
MIT

