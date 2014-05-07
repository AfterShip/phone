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

describe('Testing USA Phone', function() {
	describe('Test 1', function() {
		var number = '(852) 569-8900',
			country = '',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '+1 (817) 569-8900',
			country = '',
			result = ['+18175698900', 'USA'];

		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '+1 (817) 569-8900',
			country = null,
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 4', function() {
		var number = '2121234567',
			country = '',
			result = ['+12121234567', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function() {
		var number = '22-6569-8900',
			country = '',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 6', function() {
		var number = '22-5569-8900',
			country = '',
			result = ['+12255698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 7', function() {
		var number = '+1 (817) 569-8900',
			country = 'United States',
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 8', function() {
		var number = '+1 (817) 569-8900',
			country = 'United States ',
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 9', function() {
		var number = '+1 (817) 569-8900',
			country = 'USA',
			result = ['+18175698900', 'USA'];

		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 10', function() {
		var number = '+1 (817) 569-8900',
			country = 'USA ',
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 11', function() {
		var number = '+1 (817) 569-8900',
			country = 'US',
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 12', function() {
		var number = '+1 (817) 569-8900',
			country = ' US',
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 13', function() {
		var number = '+1 (817) 569-8900',
			country = 'HKG',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
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
			result = ['+5217621009517', 'MEX'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function() {
		var number = '+52 1 762 100 9517',
			country = 'MEX',
			result = ['+5217621009517', 'MEX'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 3', function() {
		var number = '+52 1 762 100 9517',
			country = 'USA',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 4', function() {
		var number = '+52 1 762 100 9517',
			country = 'Mexico',
			result = ['+5217621009517', 'MEX'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 5', function() {
		var number = '+52 1 762 100 9517',
			country = 'United States',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
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
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 7', function() {
		var number = '+52 62 100 9517',
			country = 'MEX',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 8', function() {
		var number = '+52 62 100 9517',
			country = 'USA',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 9', function() {
		var number = '+52 62 100 9517',
			country = 'Mexico',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 10', function() {
		var number = '+52 62 100 9517',
			country = 'United States',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
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
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 12', function() {
		var number = '762 100 9517',
			country = 'MEX',
			result = ['+527621009517', 'MEX'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 13', function() {
		var number = '762 100 9517',
			country = 'MEXINVALID',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 14', function() {
		var number = '762 100 9517',
			country = 'Mexico',
			result = ['+527621009517', 'MEX'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 15', function() {
		var number = '762 100 9517',
			country = 'Mexico Invalid',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


});


describe('Testing HKG Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '6123-6123',
			country = 'HKG',
			result = ['+85261236123', 'HKG'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});

