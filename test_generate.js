'use strict';

let allOutput = [
	[
		'input_phone',
		'input_country',
		'validate_prefix',
		'output_phone',
		'output_country_alpha2',
		'output_country_alpha3',
		'desc1',
		'desc2',
		'test_desc'
	]
];
let outputLine = [];
let description = [];

const countryPhoneData = require('../data/country_phone_data');

function describe(desc, func) {
	description.push(desc);
	func();
}

function test(desc, func) {
	func();
	if (description.length === 0) {
		description = ['', ''].concat(description);
	}
	if (description.length === 1) {
		description = [''].concat(description);
	}
	outputLine = outputLine.concat(description);
	outputLine.push(desc);
	allOutput.push(outputLine);
	outputLine = [];
	description = [];
}

function expect(output) {
	return {
		toEqual: function(result) {
			if (!result || result.length === 0) {
				outputLine.push('');
				outputLine.push('');
				outputLine.push('');
			} else {
				const countryIso3 = result[1];
				const countryIso2 = countryPhoneData.find((d) => d.alpha3 === countryIso3).alpha2;
				outputLine.push(result[0]);
				outputLine.push(countryIso2);
				outputLine.push(result[1]);
			}
		}
	};
}

function phone(arg1, arg2, arg3) {
	outputLine.push(arg1 || '');
	outputLine.push(arg2 || '');
	outputLine.push(arg3 || '');
}

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

	describe('Test 5, does not provide country, should match canada phone number', () => {
		const number = '22-6569-8900';
		const country = '';
		const result = ['+12265698900', 'CAN'];
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

	describe('Test 14', () => {
		const number = '+1 (888) 569-8900';
		const result = ['+18885698900', 'USA'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});

describe('Testing default Canada phone number', () => {
	describe('Test 1, does not provide country, should match canada phone number', () => {
		const number = '+1905-555-1234';
		const country = '';
		const result = ['+19055551234', 'CAN'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 2, does not provide country and plus sign, should match canada phone number', () => {
		const number = '519-555-1234';
		const country = '';
		const result = ['+15195551234', 'CAN'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 3, does not provide country and plus sign but with "1", should match nothing', () => {
		const number = '1519-555-1234';
		const country = '';
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

	describe('Test 4', () => {
		const number = '+55 69 8 6123 1234';
		const country = 'BRA';
		const result = ['+5569861231234', 'BRA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 5', () => {
		const number = '+55 65 9 9123 4567';
		const country = 'BRA';
		const result = ['+5565991234567', 'BRA'];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});

	describe('Test 6', () => {
		const number = '+5599988311895';
		const country = 'BRA';
		const result = ['+5599988311895', 'BRA'];
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
		const number = '+230 6123-4567'; // Landlines
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});

	describe('Test 4', () => {
		const number = '+230 6123-4567'; // Country code not match with number
		const country = 'HKG';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number, country)).toEqual(result);
		});
	});
});


describe('Testing CHN Phone Quick Test', () => {
	// Test for new pattern (199, 198, 166)
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


describe('Testing ARG numbers', () => {
	describe('Test for number without 9 prefix', () => {
		const number = '+54 233 123 4567';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});

	describe('Test for number with 9 prefix', () => {
		const number = '+54 9 233 123 4567';
		const result = ['+5492331234567', 'ARG'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});

	describe('Test for number with 15 prefix', () => {
		const number = '+54 15 233 123 4567';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe('Testing GRL numbers', () => {
	describe('Test for numbers starting with 5', () => {
		const number = '+299 555299';
		const result = ['+299555299', 'GRL'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Test for numbers starting with 2', () => {
		const number = '+299 233299';
		const result = ['+299233299', 'GRL'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Test for landlines', () => {
		const number = '+299 321000';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe( 'Testing MMR Phone', () => {
	describe('Test for 8 digits mobile numbers ', () => {
		const number = '+95 9 55 00000';
		const result = ['+9595500000', 'MMR'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Test for 9 digits mobile numbers ', () => {
		const number = '+95 9 30 000 000';
		const result = ['+95930000000', 'MMR'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Test 10 digits mobile numbers', () => {
		const number = '+95 9 426 00 0000';
		const result = ['+959426000000', 'MMR'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Test land lines', () => {
		const number = '+95 1 1234567'; //Landlines
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe( 'Testing Canada Phone', () => {
	describe('Should return result when it matches mobile_begin_with', () => {
		const number = '+1 367 1234567';
		const result = ['+13671234567', 'CAN'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Should not return result when it does not match mobile_begin_with', () => {
		const number = '+1 111 1234567';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe( 'Testing Cameroon Phone', () => {
	describe('Should return result when it matches mobile_begin_with', () => {
		const number = '+237 612345678';
		const result = ['+237612345678', 'CMR'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Should not return result when it does not match mobile_begin_with', () => {
		const number = '+237 112345678';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe( 'Testing New Caledonia Phone', () => {
	describe('Should return result when it matches mobile_begin_with', () => {
		const number = '+687 812345';
		const result = ['+687812345', 'NCL'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Should not return result when it does not match mobile_begin_with', () => {
		const number = '+687 112345';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe( 'Testing Ukraine Phone', () => {
	describe('Should return result when it matches mobile_begin_with', () => {
		const number = '+380 73 123 45 67';
		const result = ['+380731234567', 'UKR'];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
	describe('Should not return result when it does not match mobile_begin_with', () => {
		const number = '+380 11 123 45 67';
		const result = [];
		test('returns ' + result, () => {
			expect(phone(number)).toEqual(result);
		});
	});
});


describe('test phone with trunk prefix', () => {
	test('Austrilia phone with trunk prefix (0)', () => {
		const number = '+61(0)488888888';
		const result = ['+61488888888', 'AUS'];
		expect(phone(number)).toEqual(result);
	});

	test('Russian Federation phone with trunk prefix (8)', () => {
		const number = '+7(8)9234567890';
		const result = ['+79234567890', 'RUS'];
		expect(phone(number)).toEqual(result);
	});

	test('Micronesia with trunk prefix (0)', () => {
		const number = '+691(0)1234567';
		const result = ['+6911234567', 'FSM'];
		expect(phone(number)).toEqual(result);
	});
});

describe('test phone with no mobile_begin_with', () => {
	test('Test 1', () => {
		const number = '+298 212345';
		const result = ['+298212345', 'FRO'];
		expect(phone(number)).toEqual(result);
	});
});

describe('[CORE-1562] add new phone number rules for `+17215201993、+5164518135、+6062311120、+16782069397`', () => {
	test('Test +17215201993', () => {
		const number = '+17215201993';
		const result = ['+17215201993', 'SXM'];
		expect(phone(number)).toEqual(result);
	});

	test('Test +5164518135', () => {
		const number = '+5164518135';
		const result = ['+5164518135', 'PER'];
		expect(phone(number)).toEqual(result);
	});

	test('Test +6062311120', () => {
		const number = '+6062311120';
		const result = ['+6062311120', 'MYS'];
		expect(phone(number)).toEqual(result);
	});

	test('Test +16782069397', () => {
		const number = '+16782069397';
		const result = ['+16782069397', 'USA'];
		expect(phone(number)).toEqual(result);
	});
});


describe('Landline phone number test', () => {
	test('Test mobile phone number, should success', () => {
		const number = '+85293785433';
		const result = ['+85293785433', 'HKG'];
		expect(phone(number)).toEqual(result);
	});

	test('Test landline phone number without 3rd parameter, should fail', () => {
		const number = '+85223785433';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('Test landline phone number with 3rd parameter, should success', () => {
		const number = '+85223785433';
		const result = ['+85223785433', 'HKG'];
		expect(phone(number, '', true)).toEqual(result);
	});

	test('Test mobile phone number without plus sign, should success', () => {
		const number = '85293785433';
		const result = ['+85293785433', 'HKG'];
		expect(phone(number, 'HKG')).toEqual(result);
	});

	test('Test landline phone number without plus sign without 3rd parameter, should fail', () => {
		const number = '85223785433';
		const result = [];
		expect(phone(number, 'HKG')).toEqual(result);
	});

	test('Test landline phone number without plus sign with 3rd parameter, should success', () => {
		const number = '85223785433';
		const result = ['+85223785433', 'HKG'];
		expect(phone(number, 'HKG', true)).toEqual(result);
	});

	test('Test mobile phone number without plus sign nor country code, should success', () => {
		const number = '93785433';
		const result = ['+85293785433', 'HKG'];
		expect(phone(number, 'HKG')).toEqual(result);
	});

	test('Test landline phone number without plus sign nor country code without 3rd parameter, should fail', () => {
		const number = '23785433';
		const result = [];
		expect(phone(number, 'HKG')).toEqual(result);
	});

	test('Test landline phone number without plus sign nor country code with 3rd parameter, should success', () => {
		const number = '23785433';
		const result = ['+85223785433', 'HKG'];
		expect(phone(number, 'HKG', true)).toEqual(result);
	});
});

describe('#190 phone number with plus sign BUT without country code (intentionally wrong input)', () => {
	test('1. with +, country code, and country, should get the result', () => {
		const number = '+85293785433';
		const country = 'HKG';
		const result = ['+85293785433', 'HKG'];
		expect(phone(number, country)).toEqual(result);
	});

	test('2. without +, with country code, with country, should get the result', () => {
		const number = '85293785433';
		const country = 'HKG';
		const result = ['+85293785433', 'HKG'];
		expect(phone(number, country)).toEqual(result);
	});

	test('3a. with +, without country code, with country, should get empty array', () => {
		const number = '+93785433';
		const country = 'HKG';
		const result = [];
		expect(phone(number, country)).toEqual(result);
	});

	test('3b. with +, without country code, with country, should get empty array', () => {
		const number = '+41414141';
		const country = 'NO';
		const result = [];
		expect(phone(number, country)).toEqual(result);
	});

	test('3c. with +, without country code, with country, should get empty array', () => {
		const number = '+2011231234';
		const country = 'USA';
		const result = [];
		expect(phone(number, country)).toEqual(result);
	});

	test('4a. without +, without country code, with country, should get the result', () => {
		const number = '93785433';
		const country = 'HKG';
		const result = ['+85293785433', 'HKG'];
		expect(phone(number, country)).toEqual(result);
	});

	test('4b. without +, without country code, with country, should get the result', () => {
		const number = '2014125632';
		const country = 'USA';
		const result = ['+12014125632', 'USA'];
		expect(phone(number, country)).toEqual(result);
	});

	test('4c. without +, without country code, with country, should get the result', () => {
		const number = '41414141';
		const country = 'NO';
		const result = ['+4741414141', 'NOR'];
		expect(phone(number, country)).toEqual(result);
	});

	test('5a. with +, with country code, without country, should get the result', () => {
		const number = '+4741414141';
		const result = ['+4741414141', 'NOR'];
		expect(phone(number)).toEqual(result);
	});

	test('5b. with +, with country code, without country, should get the result', () => {
		const number = '+85296587452';
		const result = ['+85296587452', 'HKG'];
		expect(phone(number)).toEqual(result);
	});

	test('5c. with +, with country code, without country, should get the result', () => {
		const number = '+13612145896';
		const result = ['+13612145896', 'USA'];
		expect(phone(number)).toEqual(result);
	});

	test('6a. without +, with country code, without country, should get the result', () => {
		const number = '13612145896';
		const result = ['+13612145896', 'USA'];
		expect(phone(number)).toEqual(result);
	});

	test('6b. without +, with country code, without country, default USA and should get empty result', () => {
		const number = '4741414141';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('6c. without +, with country code, without country, default USA and should get empty result', () => {
		const number = '96587452';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('7a. with +, without country code, without country, should get empty result', () => {
		const number = '+96587452';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('7b. with +, without country code, without country, should get empty result', () => {
		const number = '+3612145896';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('7c. with +, without country code, without country, should get empty result', () => {
		const number = '+41414141';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('8a. without +, without country code, without country, should get empty result', () => {
		const number = '96587452';
		const result = [];
		expect(phone(number)).toEqual(result);
	});

	test('8b. without +, without country code, without country, default USA, should get result', () => {
		const number = '3612145896';
		const result = ['+13612145896', 'USA'];
		expect(phone(number)).toEqual(result);
	});

	test('8c. without +, without country code, without country, should get empty result', () => {
		const number = '41414141';
		const result = [];
		expect(phone(number)).toEqual(result);
	});
});

const {unparse} = require('papaparse');
const fs = require('fs');

const outputCsv = unparse(allOutput, {
	header: true
});

fs.writeFileSync(`${__dirname}/data.csv`, outputCsv);