## What is node-phone?
`node-phone` is used to normalize the phone number into a E.164 format.

The common problem is user normally input the phone number in this way:
`(817) 569-8900` or
`817569-8900` or
`1(817) 569-8900` or
`+1(817) 569-8900` or ...

What we want is always: `+18175698900`

##FAQ
1. Does node-phone do any phone validation?
Ans: Yes or no


## Install
```
npm install phone
```

## Usage
```
var phone = require('phone`);

phone('(817) 569-8900'); // return +18175698900
phone('(817) 569-8900', 'USA'); // return +18175698900
phone('(817) 569-8900', 'HKG'); // return null
phone('+1(817) 569-8900', HKG); // return +18175698900
phone('(817) 569-8900', ''); // return +18175698900
phone('6123-6123', ''); // return null, as default country is USA
phone('6123-6123', 'HKG'); // return +85261236123

```

The latest version is using:

http://www.itu.int/dms_pub/itu-t/opb/sp/T-SP-E.164D-11-2011-PDF-E.pdf
