var should = require('should'),
	phone = require('../lib/index');

describe('Testing USA Phone', function() {

	describe("phone('+1 (817) 569-8900', '')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', '');
			result.should.eql('+18175698900');
		});
	});

	describe("phone('+1 (817) 569-8900', null)", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', null);
			result.should.eql('+18175698900');
		});
	});

	describe("phone('212345678', '')", function() {
		it('returns null', function() {
			var result = (phone('212345678', '') === null);
			result.should.eql(true);
		});
	});


	describe("phone('22-6569-8900', '')", function() {
		// as 226 is NOT a valid USA code
		it('returns null', function() {
			var result = (phone('22-6569-8900', '') == null);
			result.should.eql(true);
		});
	});

	describe("phone('22-5569-8900', '')", function() {
		it('returns +12255698900', function() {
			var result = phone('22-5569-8900', '');
			result.should.eql('+12255698900');
		});
	});

	describe("phone('+1 (817) 569-8900', 'United States')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', 'United States');
			result.should.eql('+18175698900');
		});
	});

	describe("phone('+1 (817) 569-8900', ' United States ')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', ' United States ');
			result.should.eql('+18175698900');
		});
	});

	describe("phone('+1 (817) 569-8900', 'USA')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', 'USA');
			result.should.eql('+18175698900');
		});
	});

	describe("phone('+1 (817) 569-8900', 'US')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', 'US');
			result.should.eql('+18175698900');
		});
	});

});


describe('Testing CAN Phone', function() {

	describe("phone('+1 (403) 569-8900', '')", function() {
		it('returns +14035698900', function() {
			var result = phone('+1 (403) 569-8900', '');
			result.should.eql('+14035698900');
		});
	});

	describe("phone('+1 (403) 569-8900', null)", function() {
		it('returns +14035698900', function() {
			var result = phone('+1 (403) 569-8900', null);
			result.should.eql('+14035698900');
		});
	});

	describe("phone('212345678', '')", function() {
		it('returns null', function() {
			var result = (phone('212345678', '') === null);
			result.should.eql(true);
		});
	});


	describe("phone('40-3569-8900', '')", function() {
		// as 403 is NOT a valid USA code
		it('returns null', function() {
			var result = (phone('40-3569-8900', '') == null);
			result.should.eql(true);
		});
	});

	describe("phone('40-3569-8900', 'CAN')", function() {
		// should return +14035698900, as it is a valid CAN phone
		it('returns +14035698900', function() {
			var result = phone('40-3569-8900', 'CAN');
			result.should.eql('+14035698900');
		});
	});


});

describe('Testing HK Phone', function() {

	describe("phone('6569-8900', '')", function() {
		it('returns null', function() {
			var result = (phone('6569-8900', '') === null);
			result.should.eql(true);
		});
	});

	describe("phone('6569-8900', null)", function() {
		it('returns null', function() {
			var result = (phone('6569-8900', null) === null);
			result.should.eql(true);
		});
	});

	describe("phone('+852 8-569-8900', 'HKG')", function() {
		it('returns +85285698900', function() {
			var result = phone('+852 8-569-8900', 'HKG');
			result.should.eql('+85285698900');
		});
	});

	describe("phone('+852 8-569-8900', 'USA')", function() {
		it('returns +85285698900', function() {
			var result = phone('+852 8-569-8900', 'USA');
			result.should.eql('+85285698900');
		});
	});

	describe("phone('+852 8-569-8900', 'HK')", function() {
		it('returns +85285698900', function() {
			var result = phone('+852 8-569-8900', 'HK');
			result.should.eql('+85285698900');
		});
	});

	describe("phone('212345678', 'HKG')", function() {
		it('returns null', function() {
			var result = (phone('212345678', 'HKG') === null);
			result.should.eql(true);
		});
	});

});


describe('Testing UK Phone', function() {
	// return null, as `790` is NOT the USA area code
	describe("phone('07902687632', '')", function() {
		it('returns null', function() {
			var result = (phone('07902687632', '') == null);
			result.should.eql(true);
		});
	});

	describe("phone('07902687632', null)", function() {
		it('returns null', function() {
			var result = (phone('07902687632', '') == null);
			result.should.eql(true);
		});
	});


	describe("phone('07902687632', 'GBR')", function() {
		it('returns +447902687632', function() {
			var result = phone('07902687632', 'GBR');
			result.should.eql('+447902687632');
		});
	});

	describe("phone('06902687632', 'GBR')", function() {
		it('returns null', function() {
			var result = (phone('06902687632', 'GBR') === null);
			// because the UK mobile must start with 7
			result.should.eql(true);
		});
	});


});
