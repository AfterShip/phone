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


describe('Testing +1 but NOT in USA', function() {
	describe('+1 340  United States Virgin Islands', function() {
		var number = '+1 340 1234 567',
				country = 'VIR',
				result = ['+13401234567', 'VIR'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 670 Northern Mariana Islands', function() {
		var number = '+1 670 1234 567',
				country = 'MNP',
				result = ['+16701234567', 'MNP'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 671 Guam', function() {
		var number = '+1 671 1234 567',
				country = 'GUM',
				result = ['+16711234567', 'GUM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function() {
		var number = '+1 684 1234 567',
				country = 'ASM',
				result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function() {
		var number = '+1 684 2584 567',
				country = 'ASM',
				result = ['+16842584567', 'ASM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function() {
		var number = '+1 684 7334 567',
				country = 'ASM',
				result = ['+16847334567', 'ASM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function() {
		var number = '+1 787 1234 567',
				country = 'PRI',
				result = ['+17871234567', 'PRI'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function() {
		var number = '+1 939 1234 567',
				country = 'PRI',
				result = ['+19391234567', 'PRI'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 242 Bahamas', function() {
		var number = '+1 242 1234 567',
				country = 'BHS',
				result = ['+12421234567', 'BHS'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});
	describe('+1 246 Barbados', function() {
		var number = '+1 246 1234 567',
				country = 'BRB',
				result = ['+12461234567', 'BRB'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function() {
		var number = '+1 264 1234 567',
				country = 'AIA',
				result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function() {
		var number = '+1 264 5234 567',
				country = 'AIA',
				result = ['+12645234567', 'AIA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function() {
		var number = '+1 264 7234 567',
				country = 'AIA',
				result = ['+12647234567', 'AIA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function() {
		var number = '+1 268 1234 567',
				country = 'ATG',
				result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function() {
		var number = '+1 268 7234 567',
				country = 'ATG',
				result = ['+12687234567', 'ATG'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 284 British Virgin Islands', function() {
		var number = '+1 284 1234 567',
				country = 'VGB',
				result = ['+12841234567', 'VGB'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 345 Cayman Islands', function() {
		var number = '+1 345 1234 567',
				country = 'CYM',
				result = ['+13451234567', 'CYM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function() {
		var number = '+1 441 1234 567',
				country = 'BMU',
				result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 441 Bermuda', function() {
		var number = '+1 441 3234 567',
				country = 'BMU',
				result = ['+14413234567', 'BMU'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function() {
		var number = '+1 441 5234 567',
				country = 'BMU',
				result = ['+14415234567', 'BMU'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function() {
		var number = '+1 441 7234 567',
				country = 'BMU',
				result = ['+14417234567', 'BMU'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 473 Grenada', function() {
		var number = '+1 473 1234 567',
				country = 'GRD',
				result = ['+14731234567', 'GRD'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 649 Turks and Caicos Islands', function() {
		var number = '+1 649 1234 567',
				country = 'TCA',
				result = [];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 649 Turks and Caicos Islands', function() {
		var number = '+1 649 2234 567',
				country = 'TCA',
				result = ['+16492234567', 'TCA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 664 Montserrat', function() {
		var number = '+1 664 1234 567',
				country = 'MSR',
				result = ['+16641234567', 'MSR'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 721 Sint Maarten', function() {
		var number = '+1 721 1234 567',
				country = 'SXM',
				result = ['+17211234567', 'SXM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 758 Saint Lucia', function() {
		var number = '+1 758 1234 567',
				country = 'LCA',
				result = ['+17581234567', 'LCA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 767 Dominica', function() {
		var number = '+1 767 1234 567',
				country = 'DMA',
				result = ['+17671234567', 'DMA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 784 Saint Vincent and the Grenadines', function() {
		var number = '+1 784 1234 567',
				country = 'VCT',
				result = ['+17841234567', 'VCT'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 809 / 829 / 849 Dominican Republic', function() {
		var number = '+1 809 1234 567',
				country = 'DOM',
				result = ['+18091234567', 'DOM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function() {
		var number = '+1 829 1234 567',
				country = 'DOM',
				result = ['+18291234567', 'DOM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function() {
		var number = '+1 849 1234 567',
				country = 'DOM',
				result = ['+18491234567', 'DOM'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 868 Trinidad and Tobago', function() {
		var number = '+1 868 1234 567',
				country = 'TTO',
				result = ['+18681234567', 'TTO'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 869 Saint Kitts and Nevis', function() {
		var number = '+1 869 1234 567',
				country = 'KNA',
				result = ['+18691234567', 'KNA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 876 Jamaica', function() {
		var number = '+1 876 1234 567',
				country = 'JAM',
				result = ['+18761234567', 'JAM'];
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

describe('Testing PRI Phone Quick Test', function() {
	describe('Test 1', function() {
		var number = '+1-787-672-9999',
			country = 'PRI',
			result = ['+17876729999', 'PRI'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '17876729999',
			country = 'PRI',
			result = ['+17876729999', 'PRI'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '7876729999',
			country = 'PRI',
			result = ['+17876729999', 'PRI'];
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


describe('Testing TZA Phone Quick Test', function() {

	describe('Test 1', function() {
		var number = '0714795861', // remove the leading 0
			country = 'TZA',
			result = ['+255714795861', 'TZA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function() {
		var number = '0684795861', // remove the leading 0
			country = 'TZA',
			result = ['+255684795861', 'TZA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function() {
		var number = '714795861',
			country = 'TZA',
			result = ['+255714795861', 'TZA'];
		it('returns ' + result, function() {
			phone(number, country).should.eql(result);
		});
	});

});