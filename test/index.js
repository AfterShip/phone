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
			result = [];
		it('returns ' + result, function() {
			phone(number).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '+1 (817) 569-8900',
			result = ['+18175698900', 'USA'];
		it('returns ' + result, function() {
			phone(number).should.eql(result);
		});
	});


	describe('Test 3', function() {
		var number = '+852 6569-8900',
			result = ['+85265698900', 'HKG'];
		it('returns ' + result, function() {
			phone(number).should.eql(result);
		});
	});

	describe('Test 4', function() {
		var number = '+852 6569-8900',
			country = 'HKG',
			result = ['+85265698900', 'HKG'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});

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


describe('Testing BRA Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '+55 11 9 6123 1234',
			country = 'BRA',
			result = ['+5511961231234', 'BRA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function() {
		var number = '+55 11 6123 1234', // as 9 is missing
			country = 'BRA',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function() {
		var number = '+55 11 8 6123 1234', // prefix must be 9 after area code
			country = 'BRA',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '+55 69 8 6123 1234', // we don't check prefix for area code 69
			country = 'BRA',
			result = ['+5569861231234', 'BRA'];
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
			result = ['+79234567890', 'RUS'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '+79234567890',
			country = 'RUS',
			result = ['+79234567890', 'RUS'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '+79234567890',
			country = '',
			result = ['+79234567890', 'RUS'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function() {
		var number = '+70234567890',
			country = 'RUS',
			result = []; // as 0 is not a valid prefix, must be 9
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function() {
		var number = '+79234567890',
			country = 'USA',
			result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});


describe('Testing THA Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '0812345678', // remove the leading 0
			country = 'THA',
			result = ['+66812345678', 'THA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '0912345678', // remove the leading 0
			country = 'THA',
			result = ['+66912345678', 'THA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '812345678',
			country = 'THA',
			result = ['+66812345678', 'THA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});