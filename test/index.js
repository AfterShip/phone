/* jshint -W098 */ /* sadly, can't seem to wrap the below require w/ this */
/* jshint -W030 */ /* should.be.true causes this to fire all the time */
/* global describe, it */
'use strict';

var should = require('should'),
	phone = require('../lib/index');

/* suggest 10 test case for each country, except USA

 Test Case, for non-USA

 valid +phone, null
 valid +phone, valid iso
 valid +phone, invalid iso
 valid +phone, valid name
 valid +phone, invalid name

 invalid +phone, null
 invalid +phone, valid iso
 invalid +phone, invalid iso
 invalid +phone, valid name
 invalid +phone, invalid name

 valid phone, null
 valid phone, valid iso
 valid phone, invalid iso
 valid phone, valid name
 valid phone, invalid name

 invalid phone, null
 invalid phone, valid iso
 invalid phone, invalid iso
 invalid phone, valid name
 invalid phone, invalid name

 */



describe('Testing input parameter Phone', function() {

	describe('Test 1', function() {
		var number = '(852) 569-8900',
			result = null;
		it('returns ' + result, function() {
			(phone(number) === null).should.be.true;
		});
	});

	describe('Test 2', function() {
		var number = '+1 (817) 569-8900',
			result = { phone: '+18175698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number).should.eql(result);
		});
	});


	describe('Test 3', function() {
		var number = '+852 6569-8900',
			result = { phone: '+85265698900', country: 'HKG' };
		it('returns ' + result, function() {
			phone(number).should.eql(result);
		});
	});

	describe('Test 4', function() {
		var number = '+852 6569-8900',
			country = 'HKG',
			result = { phone: '+85265698900', country: 'HKG' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});

describe('Testing USA Phone', function() {
	describe('Test 1', function() {
		var number = '(852) 569-8900',
			country = '',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('Test 2', function() {
		var number = '+1 (817) 569-8900',
			country = '',
			result = { phone: '+18175698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '+1 (817) 569-8900',
			country = null,
			result = { phone: '+18175698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 4', function() {
		var number = '2121234567',
			country = '',
			result = { phone: '+12121234567', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function() {
		var number = '22-6569-8900',
			country = '',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('Test 6', function() {
		var number = '22-5569-8900',
			country = '',
			result = { phone: '+12255698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 7', function() {
		var number = '+1 (817) 569-8900',
			country = 'United States',
			result = { phone: '+18175698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 8', function() {
		var number = '+1 (817) 569-8900',
			country = 'United States ',
			result = { phone: '+18175698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 9', function() {
		var number = '+1 (817) 569-8900',
			country = 'USA',
			result = { phone: '+18175698900', country: 'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 10', function() {
		var number = '+1 (817) 569-8900',
			country = 'USA ',
			result = { phone: '+18175698900', country:  'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 11', function() {
		var number = '+1 (817) 569-8900',
			country = 'US',
			result = { phone: '+18175698900', country:  'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 12', function() {
		var number = '+1 (817) 569-8900',
			country = ' US',
			result = { phone: '+18175698900', country:  'USA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 13', function() {
		var number = '+1 (817) 569-8900',
			country = 'HKG',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

});


describe('Testing MEX Phone', function() {
	//	valid +phone, null
	//	valid +phone, valid iso
	//	valid +phone, invalid iso
	//	valid +phone, valid name
	//	valid +phone, invalid name

	describe('Test 1', function() {
		var number = '+52 1 762 100 9517',
			country = null,
			result = { phone: '+5217621009517', country:  'MEX' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function() {
		var number = '+52 1 762 100 9517',
			country = 'MEX',
			result = { phone: '+5217621009517', country:  'MEX' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 3', function() {
		var number = '+52 1 762 100 9517',
			country = 'USA',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 4', function() {
		var number = '+52 1 762 100 9517',
			country = 'Mexico',
			result = { phone: '+5217621009517', country:  'MEX' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 5', function() {
		var number = '+52 1 762 100 9517',
			country = 'United States',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	//	invalid +phone, null
	//	invalid +phone, valid iso
	//	invalid +phone, invalid iso
	//	invalid +phone, valid name
	//	invalid +phone, invalid name


	describe('Test 6', function() {
		var number = '+52 62 100 9517',
			country = null,
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 7', function() {
		var number = '+52 62 100 9517',
			country = 'MEX',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 8', function() {
		var number = '+52 62 100 9517',
			country = 'USA',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 9', function() {
		var number = '+52 62 100 9517',
			country = 'Mexico',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 10', function() {
		var number = '+52 62 100 9517',
			country = 'United States',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	//	valid phone, null
	//	valid phone, valid iso
	//	valid phone, invalid iso
	//	valid phone, valid name
	//	valid phone, invalid name


	describe('Test 11', function() {
		var number = '52762 100 9517',
			country = null,
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 12', function() {
		var number = '762 100 9517',
			country = 'MEX',
			result = { phone: '+527621009517', country:  'MEX' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 13', function() {
		var number = '762 100 9517',
			country = 'MEXINVALID',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});
	describe('Test 14', function() {
		var number = '762 100 9517',
			country = 'Mexico',
			result = { phone: '+527621009517', country:  'MEX' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 15', function() {
		var number = '762 100 9517',
			country = 'Mexico Invalid',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});


});


describe('Testing HKG Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '6123-6123',
			country = 'HKG',
			result = { phone: '+85261236123', country:  'HKG' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});


describe('Testing BRA Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '+55 11 9 6123 1234',
			country = 'BRA',
			result = { phone: '+5511961231234', country:  'BRA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function() {
		var number = '+55 11 6123 1234', // as 9 is missing
			country = 'BRA',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('Test 4', function() {
		var number = '+55 11 8 6123 1234', // prefix must be 9 after area code
			country = 'BRA',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('Test 2', function() {
		var number = '+55 69 8 6123 1234', // we don't check prefix for area code 69
			country = 'BRA',
			result = { phone: '+5569861231234', country:  'BRA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


});

// input --> output
// 89234567890, RUS --> +79234567890, RUS
// +79234567890, RUS --> +79234567890, RUS
// +79234567890  ---> +79234567890, RUS
// +70234567890, RUS  ---> invalid
// 9234567890, RUS  ---> +79234567890, RUS


describe('Testing RUS Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '89234567890',// remove the 8, treat it as 9234567890
			country = 'RUS',
			result = { phone: '+79234567890', country:  'RUS' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '+79234567890',
			country = 'RUS',
			result = { phone: '+79234567890', country:  'RUS' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '+79234567890',
			country = '',
			result = { phone: '+79234567890', country:  'RUS' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function() {
		var number = '+70234567890',
			country = 'RUS',
			result = null; // as 0 is not a valid prefix, must be 9
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('Test 5', function() {
		var number = '+79234567890',
			country = 'USA',
			result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

});


describe('Testing THA Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '0812345678', // remove the leading 0
			country = 'THA',
			result = { phone: '+66812345678', country:  'THA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '0912345678', // remove the leading 0
			country = 'THA',
			result = { phone: '+66912345678', country:  'THA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '812345678',
			country = 'THA',
			result = { phone: '+66812345678', country:  'THA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});