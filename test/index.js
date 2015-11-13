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


describe('Testing +1 but NOT in USA', function() {
	describe('+1 340  United States Virgin Islands', function() {
		var number = '+1 340 1234 567',
				country = 'VIR',
				result = { phone: '+13401234567', country: 'VIR' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 670 Northern Mariana Islands', function() {
		var number = '+1 670 1234 567',
				country = 'MNP',
				result = { phone: '+16701234567', country: 'MNP' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 671 Guam', function() {
		var number = '+1 671 1234 567',
				country = 'GUM',
				result = { phone: '+16711234567', country: 'GUM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function() {
		var number = '+1 684 1234 567',
				country = 'ASM',
				result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('+1 684 American Samoa', function() {
		var number = '+1 684 2584 567',
				country = 'ASM',
				result = { phone: '+16842584567', country: 'ASM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function() {
		var number = '+1 684 7334 567',
				country = 'ASM',
				result = { phone: '+16847334567', country: 'ASM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function() {
		var number = '+1 787 1234 567',
				country = 'PRI',
				result = { phone: '+17871234567', country: 'PRI' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function() {
		var number = '+1 939 1234 567',
				country = 'PRI',
				result = { phone: '+19391234567', country: 'PRI' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 242 Bahamas', function() {
		var number = '+1 242 1234 567',
				country = 'BHS',
				result = { phone: '+12421234567', country: 'BHS' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('+1 246 Barbados', function() {
		var number = '+1 246 1234 567',
				country = 'BRB',
				result = { phone: '+12461234567', country: 'BRB' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function() {
		var number = '+1 264 1234 567',
				country = 'AIA',
				result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('+1 264 Anguilla', function() {
		var number = '+1 264 5234 567',
				country = 'AIA',
				result = { phone: '+12645234567', country: 'AIA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function() {
		var number = '+1 264 7234 567',
				country = 'AIA',
				result = { phone: '+12647234567', country: 'AIA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function() {
		var number = '+1 268 1234 567',
				country = 'ATG',
				result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('+1 268 Antigua and Barbuda', function() {
		var number = '+1 268 7234 567',
				country = 'ATG',
				result = { phone: '+12687234567', country: 'ATG' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 284 British Virgin Islands', function() {
		var number = '+1 284 1234 567',
				country = 'VGB',
				result = { phone: '+12841234567', country: 'VGB' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 345 Cayman Islands', function() {
		var number = '+1 345 1234 567',
				country = 'CYM',
				result = { phone: '+13451234567', country: 'CYM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function() {
		var number = '+1 441 1234 567',
				country = 'BMU',
				result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});


	describe('+1 441 Bermuda', function() {
		var number = '+1 441 3234 567',
				country = 'BMU',
				result = { phone: '+14413234567', country: 'BMU' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function() {
		var number = '+1 441 5234 567',
				country = 'BMU',
				result = { phone: '+14415234567', country: 'BMU' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function() {
		var number = '+1 441 7234 567',
				country = 'BMU',
				result = { phone: '+14417234567', country: 'BMU' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 473 Grenada', function() {
		var number = '+1 473 1234 567',
				country = 'GRD',
				result = { phone: '+14731234567', country: 'GRD' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 649 Turks and Caicos Islands', function() {
		var number = '+1 649 1234 567',
				country = 'TCA',
				result = null;
		it('returns ' + result, function() {
			(phone(number, country) === null).should.be.true;
		});
	});

	describe('+1 649 Turks and Caicos Islands', function() {
		var number = '+1 649 2234 567',
				country = 'TCA',
				result = { phone: '+16492234567', country: 'TCA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 664 Montserrat', function() {
		var number = '+1 664 1234 567',
				country = 'MSR',
				result = { phone: '+16641234567', country: 'MSR' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 721 Sint Maarten', function() {
		var number = '+1 721 1234 567',
				country = 'SXM',
				result = { phone: '+17211234567', country: 'SXM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 758 Saint Lucia', function() {
		var number = '+1 758 1234 567',
				country = 'LCA',
				result = { phone: '+17581234567', country: 'LCA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 767 Dominica', function() {
		var number = '+1 767 1234 567',
				country = 'DMA',
				result = { phone: '+17671234567', country: 'DMA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 784 Saint Vincent and the Grenadines', function() {
		var number = '+1 784 1234 567',
				country = 'VCT',
				result = { phone: '+17841234567', country: 'VCT' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 809 / 829 / 849 Dominican Republic', function() {
		var number = '+1 809 1234 567',
				country = 'DOM',
				result = { phone: '+18091234567', country: 'DOM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function() {
		var number = '+1 829 1234 567',
				country = 'DOM',
				result = { phone: '+18291234567', country: 'DOM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function() {
		var number = '+1 849 1234 567',
				country = 'DOM',
				result = { phone: '+18491234567', country: 'DOM' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 868 Trinidad and Tobago', function() {
		var number = '+1 868 1234 567',
				country = 'TTO',
				result = { phone: '+18681234567', country: 'TTO' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 869 Saint Kitts and Nevis', function() {
		var number = '+1 869 1234 567',
				country = 'KNA',
				result = { phone: '+18691234567', country: 'KNA' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 876 Jamaica', function() {
		var number = '+1 876 1234 567',
				country = 'JAM',
				result = { phone: '+18761234567', country: 'JAM' };
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

describe('Testing PRI Phone Quick Test', function() {
	describe('Test 1', function() {
		var number = '+1-787-672-9999',
			country = 'PRI',
			result = { phone: '+17876729999', country: 'PRI' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '17876729999',
			country = 'PRI',
			result = { phone: '+17876729999', country: 'PRI' };
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '7876729999',
			country = 'PRI',
			result = { phone: '+17876729999', country: 'PRI' };
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
