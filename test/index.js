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
		it('returns +', function() {
			var result = phone('22-6569-8900', '');
			result.should.eql('+12265698900');
		});
	});

	describe("phone('+1 (817) 569-8900', 'uniTed States')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', 'uniTed States');
			result.should.eql('+18175698900');
		});
	});

	describe("phone('+1 (817) 569-8900', ' uniTed States ')", function() {
		it('returns +18175698900', function() {
			var result = phone('+1 (817) 569-8900', ' uniTed States ');
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

	// treat it as USA first
	// then remove leading 0s for all countries except 'GAB', 'CIV', 'COG'
	// if 10 digit, good. it is USA, add "+1" as prefix

	describe("phone('01902687632', '')", function() {
		it('returns +11902687632', function() {
			var result = phone('01902687632', '');
			result.should.eql('+11902687632');
		});
	});

	describe("phone('01902687632', null)", function() {
		it('returns +11902687632', function() {
			var result = phone('01902687632', null) ;
			result.should.eql('+11902687632');
		});
	});


	// remove leading 0s for all countries except 'GAB', 'CIV', 'COG'
	// if 8 digit, good. it is HKG, add "+852" as prefix, else , return null

	describe("phone('01902687632', 'HKG')", function() {
		it('returns +8521902687632', function() {
			var result = (phone('01902687632', 'HKG') === null);
			result.should.eql(true);
		});
	});

	describe("phone('01902687632', 'GBR')", function() {
		it('returns +441902687632', function() {
			var result = (phone('01902687632', 'GBR') === null);
			result.should.eql(true);
		});
	});


});
