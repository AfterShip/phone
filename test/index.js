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

// test HKG, GBR, FRA


describe('Testing HKG Phone', function() {

//	valid +phone, null
//	valid +phone, valid iso
//	valid +phone, invalid iso
//	valid +phone, valid name
//	valid +phone, invalid name

	test_number = '+852 6123-4567';
	test_country = null;
	test_result = ['+85261234567', 'HKG'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 6123-4567';
	test_country = 'HKG';
	test_result = ['+85261234567', 'HKG'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 6123-4567';
	test_country = 'USA';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 6123-4567';
	test_country = 'Hong Kong';
	test_result = ['+85261234567', 'HKG'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 6123-4567';
	test_country = 'United States';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


//
//	invalid +phone, null
//	invalid +phone, valid iso
//	invalid +phone, invalid iso
//	invalid +phone, valid name
//	invalid +phone, invalid name

	test_number = '+852 7123-4567';
	test_country = null;
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 7123-4567';
	test_country = 'HKG';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 7123-4567';
	test_country = 'USA';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 7123-4567';
	test_country = 'Hong Kong';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '+852 7123-4567';
	test_country = 'United States';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


//
//	valid phone, null
//	valid phone, valid iso
//	valid phone, invalid iso
//	valid phone, valid name
//	valid phone, invalid name

	test_number = '852 6123-4567';
	test_country = null;
	test_result = ['+85261234567', 'HKG'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 6123-4567';
	test_country = 'HKG';
	test_result = ['+85261234567', 'HKG'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 6123-4567';
	test_country = 'USA';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 6123-4567';
	test_country = 'Hong Kong';
	test_result = ['+85261234567', 'HKG'];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 6123-4567';
	test_country = 'United States';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});
//
//	invalid phone, null
//	invalid phone, valid iso
//	invalid phone, invalid iso
//	invalid phone, valid name
//	invalid phone, invalid name

	test_number = '852 7123-4567';
	test_country = null;
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 7123-4567';
	test_country = 'HKG';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 7123-4567';
	test_country = 'USA';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 7123-4567';
	test_country = 'Hong Kong';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});

	test_number = '852 7123-4567';
	test_country = 'United States';
	test_result = [];
	test_explain = 'returns [' + test_result + ']';
	describe("phone('" + test_number + "', '" + test_country + "')", function() {
		it(test_explain, function() {
			var result = phone(test_number, test_country);
			result.should.eql(test_result);
		});
	});


});