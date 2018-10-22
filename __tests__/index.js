'use strict';

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


describe('Testing input parameter Phone', () => {
	describe('Test 1', () => {
		const number = '(852) 569-8900';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '+1 (817) 569-8900';
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});


	describe('Test 3', () => {
		const number = '+852 6569-8900';
		const result = ['+85265698900', 'HKG'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});

	describe('Test 4', () => {
		const number = '+852 6569-8900';
		const country = 'HKG';
		const result = ['+85265698900', 'HKG'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 5', () => {
		const number = null;
		const country = 'HKG';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 6', () => {
		test('should remove the leadings zero when country is GAB', () => {
			expect(phone('+241 05345678', 'GAB')).toEqual(['+24105345678', 'GAB']);
		});

		test('should remove the leadings zero when country is CIV', () => {
			expect(phone('+225 05345678', 'CIV')).toEqual(['+22505345678', 'CIV']);
		});

		test('should remove the leadings zero when country is COG', () => {
			expect(phone('+242 012345678', 'COG')).toEqual(['+242012345678', 'COG']);
		});
	});
});

describe('Testing USA Phone', () => {
	describe('Test 1', () => {
		const number = '(852) 569-8900';
		const country = '';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '+1 (817) 569-8900';
		const country = '';
		const result = ['+18175698900', 'USA'];

		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3', () => {
		const number = '+1 (817) 569-8900';
		const country = null;
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('Test 4', () => {
		const number = '2121234567';
		const country = '';
		const result = ['+12121234567', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 5', () => {
		const number = '22-6569-8900';
		const country = '';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 6', () => {
		const number = '22-5569-8900';
		const country = '';
		const result = ['+12255698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 7', () => {
		const number = '+1 (817) 569-8900';
		const country = 'United States';
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 8', () => {
		const number = '+1 (817) 569-8900';
		const country = 'United States ';
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 9', () => {
		const number = '+1 (817) 569-8900';
		const country = 'USA';
		const result = ['+18175698900', 'USA'];

		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 10', () => {
		const number = '+1 (817) 569-8900';
		const country = 'USA ';
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 11', () => {
		const number = '+1 (817) 569-8900';
		const country = 'US';
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 12', () => {
		const number = '+1 (817) 569-8900';
		const country = ' US';
		const result = ['+18175698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('Test 13', () => {
		const number = '+1 (817) 569-8900';
		const country = 'HKG';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing +1 but NOT in USA', () => {
	describe('+1 340  United States Virgin Islands', () => {
		const number = '+1 340 1234 567';
		const country = 'VIR';
		const result = ['+13401234567', 'VIR'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 670 Northern Mariana Islands', () => {
		const number = '+1 670 1234 567';
		const country = 'MNP';
		const result = ['+16701234567', 'MNP'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 671 Guam', () => {
		const number = '+1 671 1234 567';
		const country = 'GUM';
		const result = ['+16711234567', 'GUM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 684 American Samoa', () => {
		const number = '+1 684 1234 567';
		const country = 'ASM';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 684 American Samoa', () => {
		const number = '+1 684 2584 567';
		const country = 'ASM';
		const result = ['+16842584567', 'ASM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 684 American Samoa', () => {
		const number = '+1 684 7334 567';
		const country = 'ASM';
		const result = ['+16847334567', 'ASM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', () => {
		const number = '+1 787 1234 567';
		const country = 'PRI';
		const result = ['+17871234567', 'PRI'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 787 / 939 Puerto Rico', () => {
		const number = '+1 939 1234 567';
		const country = 'PRI';
		const result = ['+19391234567', 'PRI'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 242 Bahamas', () => {
		const number = '+1 242 1234 567';
		const country = 'BHS';
		const result = ['+12421234567', 'BHS'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('+1 246 Barbados', () => {
		const number = '+1 246 1234 567';
		const country = 'BRB';
		const result = ['+12461234567', 'BRB'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 264 Anguilla', () => {
		const number = '+1 264 1234 567';
		const country = 'AIA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 264 Anguilla', () => {
		const number = '+1 264 5234 567';
		const country = 'AIA';
		const result = ['+12645234567', 'AIA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 264 Anguilla', () => {
		const number = '+1 264 7234 567';
		const country = 'AIA';
		const result = ['+12647234567', 'AIA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', () => {
		const number = '+1 268 1234 567';
		const country = 'ATG';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 268 Antigua and Barbuda', () => {
		const number = '+1 268 7234 567';
		const country = 'ATG';
		const result = ['+12687234567', 'ATG'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 284 British Virgin Islands', () => {
		const number = '+1 284 1234 567';
		const country = 'VGB';
		const result = ['+12841234567', 'VGB'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 345 Cayman Islands', () => {
		const number = '+1 345 1234 567';
		const country = 'CYM';
		const result = ['+13451234567', 'CYM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 441 Bermuda', () => {
		const number = '+1 441 1234 567';
		const country = 'BMU';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 441 Bermuda', () => {
		const number = '+1 441 3234 567';
		const country = 'BMU';
		const result = ['+14413234567', 'BMU'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 441 Bermuda', () => {
		const number = '+1 441 5234 567';
		const country = 'BMU';
		const result = ['+14415234567', 'BMU'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 441 Bermuda', () => {
		const number = '+1 441 7234 567';
		const country = 'BMU';
		const result = ['+14417234567', 'BMU'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 473 Grenada', () => {
		const number = '+1 473 1234 567';
		const country = 'GRD';
		const result = ['+14731234567', 'GRD'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 649 Turks and Caicos Islands', () => {
		const number = '+1 649 1234 567';
		const country = 'TCA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 649 Turks and Caicos Islands', () => {
		const number = '+1 649 2234 567';
		const country = 'TCA';
		const result = ['+16492234567', 'TCA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 664 Montserrat', () => {
		const number = '+1 664 1234 567';
		const country = 'MSR';
		const result = ['+16641234567', 'MSR'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 721 Sint Maarten', () => {
		const number = '+1 721 1234 567';
		const country = 'SXM';
		const result = ['+17211234567', 'SXM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 758 Saint Lucia', () => {
		const number = '+1 758 1234 567';
		const country = 'LCA';
		const result = ['+17581234567', 'LCA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 767 Dominica', () => {
		const number = '+1 767 1234 567';
		const country = 'DMA';
		const result = ['+17671234567', 'DMA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 784 Saint Vincent and the Grenadines', () => {
		const number = '+1 784 1234 567';
		const country = 'VCT';
		const result = ['+17841234567', 'VCT'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 809 / 829 / 849 Dominican Republic', () => {
		const number = '+1 809 1234 567';
		const country = 'DOM';
		const result = ['+18091234567', 'DOM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', () => {
		const number = '+1 829 1234 567';
		const country = 'DOM';
		const result = ['+18291234567', 'DOM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('+1 809 / 829 / 849 Dominican Republic', () => {
		const number = '+1 849 1234 567';
		const country = 'DOM';
		const result = ['+18491234567', 'DOM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 868 Trinidad and Tobago', () => {
		const number = '+1 868 1234 567';
		const country = 'TTO';
		const result = ['+18681234567', 'TTO'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 869 Saint Kitts and Nevis', () => {
		const number = '+1 869 1234 567';
		const country = 'KNA';
		const result = ['+18691234567', 'KNA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('+1 876 Jamaica', () => {
		const number = '+1 876 1234 567';
		const country = 'JAM';
		const result = ['+18761234567', 'JAM'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});

describe('Testing MEX Phone', () => {
	//	valid +phone, null
	//	valid +phone, valid iso
	//	valid +phone, invalid iso
	//	valid +phone, valid name
	//	valid +phone, invalid name

	describe('Test 1', () => {
		const number = '+52 1 762 100 9517';
		const country = null;
		const result = ['+5217621009517', 'MEX'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('Test 2', () => {
		const number = '+52 1 762 100 9517';
		const country = 'MEX';
		const result = ['+5217621009517', 'MEX'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 3', () => {
		const number = '+52 1 762 100 9517';
		const country = 'USA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 4', () => {
		const number = '+52 1 762 100 9517';
		const country = 'Mexico';
		const result = ['+5217621009517', 'MEX'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 5', () => {
		const number = '+52 1 762 100 9517';
		const country = 'United States';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	//	invalid +phone, null
	//	invalid +phone, valid iso
	//	invalid +phone, invalid iso
	//	invalid +phone, valid name
	//	invalid +phone, invalid name


	describe('Test 6', () => {
		const number = '+52 62 100 9517';
		const country = null;
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 7', () => {
		const number = '+52 62 100 9517';
		const country = 'MEX';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 8', () => {
		const number = '+52 62 100 9517';
		const country = 'USA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 9', () => {
		const number = '+52 62 100 9517';
		const country = 'Mexico';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 10', () => {
		const number = '+52 62 100 9517';
		const country = 'United States';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	//	valid phone, null
	//	valid phone, valid iso
	//	valid phone, invalid iso
	//	valid phone, valid name
	//	valid phone, invalid name


	describe('Test 11', () => {
		const number = '52762 100 9517';
		const country = null;
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 12', () => {
		const number = '762 100 9517';
		const country = 'MEX';
		const result = ['+527621009517', 'MEX'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 13', () => {
		const number = '762 100 9517';
		const country = 'MEXINVALID';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 14', () => {
		const number = '762 100 9517';
		const country = 'Mexico';
		const result = ['+527621009517', 'MEX'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
	describe('Test 15', () => {
		const number = '762 100 9517';
		const country = 'Mexico Invalid';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing HKG Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '6123-6123';
		const country = 'HKG';
		const result = ['+85261236123', 'HKG'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing BRA Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '+55 11 9 6123 1234';
		const country = 'BRA';
		const result = ['+5511961231234', 'BRA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});


	describe('Test 2', () => {
		const number = '+55 11 6123 1234'; // as 9 is missin;
		const country = 'BRA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 4', () => {
		const number = '+55 11 8 6123 1234'; // prefix must be 9 after area cod;
		const country = 'BRA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '+55 69 8 6123 1234'; // we don't check prefix for area code 6;
		const country = 'BRA';
		const result = ['+5569861231234', 'BRA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});

describe('Testing PRI Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '+1-787-672-9999';
		const country = 'PRI';
		const result = ['+17876729999', 'PRI'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '17876729999';
		const country = 'PRI';
		const result = ['+17876729999', 'PRI'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3', () => {
		const number = '7876729999';
		const country = 'PRI';
		const result = ['+17876729999', 'PRI'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});

// input --> output
// 89234567890, RUS --> +79234567890, RUS
// +79234567890, RUS --> +79234567890, RUS
// +79234567890  ---> +79234567890, RUS
// +70234567890, RUS  ---> invalid
// 9234567890, RUS  ---> +79234567890, RUS


describe('Testing RUS Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '89234567890'; // remove the 8, treat it as 923456789;
		const country = 'RUS';
		const result = ['+79234567890', 'RUS'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '+79234567890';
		const country = 'RUS';
		const result = ['+79234567890', 'RUS'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3', () => {
		const number = '+79234567890';
		const country = '';
		const result = ['+79234567890', 'RUS'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 4', () => {
		const number = '+70234567890';
		const country = 'RUS';
		const result = []; // as 0 is not a valid prefix, must be 9
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 5', () => {
		const number = '+79234567890';
		const country = 'USA';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing THA Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '0812345678'; // remove the leading ;
		const country = 'THA';
		const result = ['+66812345678', 'THA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '0912345678'; // remove the leading ;
		const country = 'THA';
		const result = ['+66912345678', 'THA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3', () => {
		const number = '812345678';
		const country = 'THA';
		const result = ['+66812345678', 'THA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing TZA Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '0714795861'; // remove the leading ;
		const country = 'TZA';
		const result = ['+255714795861', 'TZA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '0684795861'; // remove the leading ;
		const country = 'TZA';
		const result = ['+255684795861', 'TZA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3', () => {
		const number = '714795861';
		const country = 'TZA';
		const result = ['+255714795861', 'TZA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});

describe('Testing KAZ Phone Quick Test', () => {
	describe('Test 1', () => {
		const number = '+77012345678';
		const country = 'KAZ';
		const result = ['+77012345678', 'KAZ'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2', () => {
		const number = '+77412345678';
		const country = 'KAZ';
		const result = ['+77412345678', 'KAZ'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3', () => {
		const number = '+77712345678';
		const country = 'KAZ';
		const result = ['+77712345678', 'KAZ'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing PAN Phone Quick Test', () => {
    describe('Test 1', () => {
        const number = '+507 61234567';
        const country = 'PAN';
        const result = ['+50761234567', 'PAN'];
        test('returns ' + result, () => {
            expect(phone(number, country)).toEqual(result);
        });
    });


    describe('Test 2', () => {
        const number = '+507 51234567'; // start from 5 is landlines
        const country = 'PAN';
        const result = [];
        test('returns ' + result, () => {
            expect(phone(number, country)).toEqual(result);
        });
    });

});

describe('Testing MUS Phone Quick Test', () => {

    describe('Test 1', () => {
        const number = '+230 51234567';
        const result = ['+23051234567', 'MUS'];
        test('returns ' + result, () => {
            expect(phone(number)).toEqual(result);
        });
    });


    describe('Test 2', () => {
        const number = '+230 5123-4567';
        const result = ['+23051234567', 'MUS'];
        test('returns ' + result, () => {
            expect(phone(number)).toEqual(result);
        });
    });

    describe('Test 3', () => {
        const number = '+230 6123-4567'; //Landlines
        const result = [];
        test('returns ' + result, () => {
            expect(phone(number)).toEqual(result);
        });
    });

    describe('Test 4', () => {
        const number = '+230 6123-4567'; //Country code not match with number
        const country = 'HKG';
        const result = [];
        test('returns ' + result, () => {
            expect(phone(number, country)).toEqual(result);
        });
    });

});


describe('Testing CHN Phone Quick Test', () => {

    //Test for new pattern (199, 198, 166)
    describe('Test for pattern 199', () => {
        const number = '+86 199 51343779';
        const result = ['+8619951343779', 'CHN'];
        test('returns ' + result, () => {
            expect(phone(number)).toEqual(result);
        });
    });

    describe('Test for pattern 198', () => {
        const number = '+86 198 51343779';
        const result = ['+8619851343779', 'CHN'];
        test('returns ' + result, () => {
            expect(phone(number)).toEqual(result);
        });
    });

    describe('Test for pattern 166', () => {
        const number = '+86 166 51343779';
        const result = ['+8616651343779', 'CHN'];
        test('returns ' + result, () => {
            expect(phone(number)).toEqual(result);
        });
    });



});