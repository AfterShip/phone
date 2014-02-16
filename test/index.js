var should = require('should'),
	phone = require('../lib/index');

var test_number, test_country, test_result, test_explain;


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

describe('Testing USA Phone', function() {
	test_number = '(852) 569-8900';
	test_country = '';
	test_result = [];
	test_explain = 'returns [' + test_result + '], treat it as USA, but 852 is NOT a valid USA mobile_begin_with, so empty array.';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (817) 569-8900';
	test_country = '';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (817) 569-8900';
	test_country = null;
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '2121234567';
	test_country = '';
	test_result = ['+12121234567', 'USA'];
	test_explain = 'returns [' + test_result + '], no country given, make USA, fit USA length without country code, auto append. valid zip code: 212';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '22-6569-8900';
	test_country = '';
	test_result = [];
	test_explain = 'returns [' + test_result + '], as 226 is NOT a valid USA code';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '22-5569-8900';
	test_country = '';
	test_result = ['+12255698900', 'USA'];
	test_explain = 'returns [' + test_result + '], as 225 is a valid USA code';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '+1 (817) 569-8900';
	test_country = 'United States';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '+1 (817) 569-8900';
	test_country = 'United States ';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (817) 569-8900';
	test_country = 'USA';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '+1 (817) 569-8900';
	test_country = 'USA ';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '+1 (817) 569-8900';
	test_country = 'US';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (817) 569-8900';
	test_country = ' US ';
	test_result = ['+18175698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '+1 (817) 569-8900';
	test_country = 'HKG';
	test_result = [];
	test_explain = 'returns [' + test_result + '], it is NOT a valid HKG phone number.';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

});


describe('Testing CAN Phone', function() {

	test_number = '+1 (403) 569-8900';
	test_country = null;
	test_result = ['+14035698900', 'CAN'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (403) 569-8900';
	test_country = 'CAN';
	test_result = ['+14035698900', 'CAN'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (403) 569-8900';
	test_country = 'USA';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (403) 569-8900';
	test_country = 'Canada';
	test_result = ['+14035698900', 'CAN'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (403) 569-8900';
	test_country = 'Canadas';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (401) 569-8900';
	test_country = null;
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (401) 569-8900';
	test_country = 'CAN';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (401) 569-8900';
	test_country = 'HKG';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (401) 569-8900';
	test_country = 'Canada';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+1 (401) 569-8900';
	test_country = 'Canadas';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(403) 569-8900';
	test_country = null;
	test_result = ['+14035698900', 'CAN'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(403) 569-8900';
	test_country = 'CAN';
	test_result = ['+14035698900', 'CAN'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(403) 569-8900';
	test_country = 'USA';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


	test_number = '(403) 569-8900';
	test_country = 'Canada';
	test_result = ['+14035698900', 'CAN'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(403) 569-8900';
	test_country = 'United States';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(401) 569-8900';
	test_country = null;
	test_result = ['+14015698900', 'USA'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(401) 569-8900';
	test_country = 'HKG';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(401) 569-8900';
	test_country = 'Canada';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '(401) 569-8900';
	test_country = 'Hong Kong';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});
});

//describe('Testing HK Phone', function() {
//
//	describe("phone('6569-8900', '')", function() {
//		it('returns null', function() {
//			var result = (phone('6569-8900', '') === null);
//			result.should.eql(true);
//		});
//	});
//
//	describe("phone('6569-8900', null)", function() {
//		it('returns null', function() {
//			var result = (phone('6569-8900', null) === null);
//			result.should.eql(true);
//		});
//	});
//
//	describe("phone('+852 8-569-8900', 'HKG')", function() {
//		it('returns +85285698900', function() {
//			var result = phone('+852 8-569-8900', 'HKG');
//			result.should.eql('+85285698900');
//		});
//	});
//
//	describe("phone('+852 8-569-8900', 'USA')", function() {
//		it('returns +85285698900', function() {
//			var result = phone('+852 8-569-8900', 'USA');
//			result.should.eql('+85285698900');
//		});
//	});
//
//	describe("phone('+852 8-569-8900', 'HK')", function() {
//		it('returns +85285698900', function() {
//			var result = phone('+852 8-569-8900', 'HK');
//			result.should.eql('+85285698900');
//		});
//	});
//
//	describe("phone('212345678', 'HKG')", function() {
//		it('returns null', function() {
//			var result = (phone('212345678', 'HKG') === null);
//			result.should.eql(true);
//		});
//	});
//
//});
//
//
//describe('Testing UK Phone', function() {
//	// return null, as `790` is NOT the USA area code
//	describe("phone('07902687632', '')", function() {
//		it('returns null', function() {
//			var result = (phone('07902687632', '') == null);
//			result.should.eql(true);
//		});
//	});
//
//	describe("phone('07902687632', null)", function() {
//		it('returns null', function() {
//			var result = (phone('07902687632', '') == null);
//			result.should.eql(true);
//		});
//	});
//
//
//	describe("phone('07902687632', 'GBR')", function() {
//		it('returns +447902687632', function() {
//			var result = phone('07902687632', 'GBR');
//			result.should.eql('+447902687632');
//		});
//	});
//
//	describe("phone('06902687632', 'GBR')", function() {
//		it('returns null', function() {
//			var result = (phone('06902687632', 'GBR') === null);
//			// because the UK mobile must start with 7
//			result.should.eql(true);
//		});
//	});
