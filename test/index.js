'use strict';

require('should');
const phone = require('../lib/index');

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


describe('Testing input parameter Phone', function () {
	describe('Test 1', function () {
		const number = '(852) 569-8900';
		const result = [];
		it('returns ' + result, function () {
			phone(number).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '+1 (817) 569-8900';
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number).should.eql(result);
		});
	});


	describe('Test 3', function () {
		const number = '+852 6569-8900';
		const result = ['+85265698900', 'HKG'];
		it('returns ' + result, function () {
			phone(number).should.eql(result);
		});
	});

	describe('Test 4', function () {
		const number = '+852 6569-8900';
		const country = 'HKG';
		const result = ['+85265698900', 'HKG'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing USA Phone', function () {
	describe('Test 1', function () {
		const number = '(852) 569-8900';
		const country = '';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '+1 (817) 569-8900';
		const country = '';
		const result = ['+18175698900', 'USA'];

		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		const number = '+1 (817) 569-8900';
		const country = null;
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 4', function () {
		const number = '2121234567';
		const country = '';
		const result = ['+12121234567', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function () {
		const number = '22-6569-8900';
		const country = '';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 6', function () {
		const number = '22-5569-8900';
		const country = '';
		const result = ['+12255698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 7', function () {
		const number = '+1 (817) 569-8900';
		const country = 'United States';
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 8', function () {
		const number = '+1 (817) 569-8900';
		const country = 'United States ';
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 9', function () {
		const number = '+1 (817) 569-8900';
		const country = 'USA';
		const result = ['+18175698900', 'USA'];

		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 10', function () {
		const number = '+1 (817) 569-8900';
		const country = 'USA ';
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 11', function () {
		const number = '+1 (817) 569-8900';
		const country = 'US';
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 12', function () {
		const number = '+1 (817) 569-8900';
		const country = ' US';
		const result = ['+18175698900', 'USA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 13', function () {
		const number = '+1 (817) 569-8900';
		const country = 'HKG';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing +1 but NOT in USA', function () {
	describe('+1 340  United States Virgin Islands', function () {
		const number = '+1 340 1234 567';
		const country = 'VIR';
		const result = ['+13401234567', 'VIR'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 670 Northern Mariana Islands', function () {
		const number = '+1 670 1234 567';
		const country = 'MNP';
		const result = ['+16701234567', 'MNP'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 671 Guam', function () {
		const number = '+1 671 1234 567';
		const country = 'GUM';
		const result = ['+16711234567', 'GUM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function () {
		const number = '+1 684 1234 567';
		const country = 'ASM';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function () {
		const number = '+1 684 2584 567';
		const country = 'ASM';
		const result = ['+16842584567', 'ASM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 684 American Samoa', function () {
		const number = '+1 684 7334 567';
		const country = 'ASM';
		const result = ['+16847334567', 'ASM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function () {
		const number = '+1 787 1234 567';
		const country = 'PRI';
		const result = ['+17871234567', 'PRI'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', function () {
		const number = '+1 939 1234 567';
		const country = 'PRI';
		const result = ['+19391234567', 'PRI'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 242 Bahamas', function () {
		const number = '+1 242 1234 567';
		const country = 'BHS';
		const result = ['+12421234567', 'BHS'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('+1 246 Barbados', function () {
		const number = '+1 246 1234 567';
		const country = 'BRB';
		const result = ['+12461234567', 'BRB'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function () {
		const number = '+1 264 1234 567';
		const country = 'AIA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function () {
		const number = '+1 264 5234 567';
		const country = 'AIA';
		const result = ['+12645234567', 'AIA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 264 Anguilla', function () {
		const number = '+1 264 7234 567';
		const country = 'AIA';
		const result = ['+12647234567', 'AIA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function () {
		const number = '+1 268 1234 567';
		const country = 'ATG';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', function () {
		const number = '+1 268 7234 567';
		const country = 'ATG';
		const result = ['+12687234567', 'ATG'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 284 British Virgin Islands', function () {
		const number = '+1 284 1234 567';
		const country = 'VGB';
		const result = ['+12841234567', 'VGB'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 345 Cayman Islands', function () {
		const number = '+1 345 1234 567';
		const country = 'CYM';
		const result = ['+13451234567', 'CYM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function () {
		const number = '+1 441 1234 567';
		const country = 'BMU';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 441 Bermuda', function () {
		const number = '+1 441 3234 567';
		const country = 'BMU';
		const result = ['+14413234567', 'BMU'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function () {
		const number = '+1 441 5234 567';
		const country = 'BMU';
		const result = ['+14415234567', 'BMU'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 441 Bermuda', function () {
		const number = '+1 441 7234 567';
		const country = 'BMU';
		const result = ['+14417234567', 'BMU'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 473 Grenada', function () {
		const number = '+1 473 1234 567';
		const country = 'GRD';
		const result = ['+14731234567', 'GRD'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 649 Turks and Caicos Islands', function () {
		const number = '+1 649 1234 567';
		const country = 'TCA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 649 Turks and Caicos Islands', function () {
		const number = '+1 649 2234 567';
		const country = 'TCA';
		const result = ['+16492234567', 'TCA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 664 Montserrat', function () {
		const number = '+1 664 1234 567';
		const country = 'MSR';
		const result = ['+16641234567', 'MSR'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 721 Sint Maarten', function () {
		const number = '+1 721 1234 567';
		const country = 'SXM';
		const result = ['+17211234567', 'SXM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 758 Saint Lucia', function () {
		const number = '+1 758 1234 567';
		const country = 'LCA';
		const result = ['+17581234567', 'LCA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 767 Dominica', function () {
		const number = '+1 767 1234 567';
		const country = 'DMA';
		const result = ['+17671234567', 'DMA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 784 Saint Vincent and the Grenadines', function () {
		const number = '+1 784 1234 567';
		const country = 'VCT';
		const result = ['+17841234567', 'VCT'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 809 / 829 / 849 Dominican Republic', function () {
		const number = '+1 809 1234 567';
		const country = 'DOM';
		const result = ['+18091234567', 'DOM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function () {
		const number = '+1 829 1234 567';
		const country = 'DOM';
		const result = ['+18291234567', 'DOM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', function () {
		const number = '+1 849 1234 567';
		const country = 'DOM';
		const result = ['+18491234567', 'DOM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 868 Trinidad and Tobago', function () {
		const number = '+1 868 1234 567';
		const country = 'TTO';
		const result = ['+18681234567', 'TTO'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 869 Saint Kitts and Nevis', function () {
		const number = '+1 869 1234 567';
		const country = 'KNA';
		const result = ['+18691234567', 'KNA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('+1 876 Jamaica', function () {
		const number = '+1 876 1234 567';
		const country = 'JAM';
		const result = ['+18761234567', 'JAM'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing MEX Phone', function () {
	//	valid +phone, null
	//	valid +phone, valid iso
	//	valid +phone, invalid iso
	//	valid +phone, valid name
	//	valid +phone, invalid name

	describe('Test 1', function () {
		const number = '+52 1 762 100 9517';
		const country = null;
		const result = ['+5217621009517', 'MEX'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function () {
		const number = '+52 1 762 100 9517';
		const country = 'MEX';
		const result = ['+5217621009517', 'MEX'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 3', function () {
		const number = '+52 1 762 100 9517';
		const country = 'USA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 4', function () {
		const number = '+52 1 762 100 9517';
		const country = 'Mexico';
		const result = ['+5217621009517', 'MEX'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 5', function () {
		const number = '+52 1 762 100 9517';
		const country = 'United States';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	//	invalid +phone, null
	//	invalid +phone, valid iso
	//	invalid +phone, invalid iso
	//	invalid +phone, valid name
	//	invalid +phone, invalid name


	describe('Test 6', function () {
		const number = '+52 62 100 9517';
		const country = null;
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 7', function () {
		const number = '+52 62 100 9517';
		const country = 'MEX';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 8', function () {
		const number = '+52 62 100 9517';
		const country = 'USA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 9', function () {
		const number = '+52 62 100 9517';
		const country = 'Mexico';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 10', function () {
		const number = '+52 62 100 9517';
		const country = 'United States';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	//	valid phone, null
	//	valid phone, valid iso
	//	valid phone, invalid iso
	//	valid phone, valid name
	//	valid phone, invalid name


	describe('Test 11', function () {
		const number = '52762 100 9517';
		const country = null;
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 12', function () {
		const number = '762 100 9517';
		const country = 'MEX';
		const result = ['+527621009517', 'MEX'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 13', function () {
		const number = '762 100 9517';
		const country = 'MEXINVALID';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 14', function () {
		const number = '762 100 9517';
		const country = 'Mexico';
		const result = ['+527621009517', 'MEX'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
	describe('Test 15', function () {
		const number = '762 100 9517';
		const country = 'Mexico Invalid';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing HKG Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '6123-6123';
		const country = 'HKG';
		const result = ['+85261236123', 'HKG'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing BRA Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '+55 11 9 6123 1234';
		const country = 'BRA';
		const result = ['+5511961231234', 'BRA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});


	describe('Test 2', function () {
		const number = '+55 11 6123 1234'; // as 9 is missin;
		const country = 'BRA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function () {
		const number = '+55 11 8 6123 1234'; // prefix must be 9 after area cod;
		const country = 'BRA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '+55 69 8 6123 1234'; // we don't check prefix for area code 6;
		const country = 'BRA';
		const result = ['+5569861231234', 'BRA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing PRI Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '+1-787-672-9999';
		const country = 'PRI';
		const result = ['+17876729999', 'PRI'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '17876729999';
		const country = 'PRI';
		const result = ['+17876729999', 'PRI'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		const number = '7876729999';
		const country = 'PRI';
		const result = ['+17876729999', 'PRI'];
		it('returns ' + result, function () {
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


describe('Testing RUS Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '89234567890'; // remove the 8, treat it as 923456789;
		const country = 'RUS';
		const result = ['+79234567890', 'RUS'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '+79234567890';
		const country = 'RUS';
		const result = ['+79234567890', 'RUS'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		const number = '+79234567890';
		const country = '';
		const result = ['+79234567890', 'RUS'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 4', function () {
		const number = '+70234567890';
		const country = 'RUS';
		const result = []; // as 0 is not a valid prefix, must be 9
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 5', function () {
		const number = '+79234567890';
		const country = 'USA';
		const result = [];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing THA Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '0812345678'; // remove the leading ;
		const country = 'THA';
		const result = ['+66812345678', 'THA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '0912345678'; // remove the leading ;
		const country = 'THA';
		const result = ['+66912345678', 'THA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		const number = '812345678';
		const country = 'THA';
		const result = ['+66812345678', 'THA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});


describe('Testing TZA Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '0714795861'; // remove the leading ;
		const country = 'TZA';
		const result = ['+255714795861', 'TZA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '0684795861'; // remove the leading ;
		const country = 'TZA';
		const result = ['+255684795861', 'TZA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		const number = '714795861';
		const country = 'TZA';
		const result = ['+255714795861', 'TZA'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});

describe('Testing KAZ Phone Quick Test', function () {
	describe('Test 1', function () {
		const number = '+77012345678';
		const country = 'KAZ';
		const result = ['+77012345678', 'KAZ'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 2', function () {
		const number = '+77412345678';
		const country = 'KAZ';
		const result = ['+77412345678', 'KAZ'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});

	describe('Test 3', function () {
		const number = '+77712345678';
		const country = 'KAZ';
		const result = ['+77712345678', 'KAZ'];
		it('returns ' + result, function () {
			phone(number, country).should.eql(result);
		});
	});
});
