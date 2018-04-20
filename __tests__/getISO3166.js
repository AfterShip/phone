'use strict';

const getISO3166 = require('../lib/getISO3166');

describe('getISO3166', () => {
	it('should return the first data (USA) when country length equal to 0', () => {
		expect(getISO3166('')).toMatchSnapshot();
	});

	it('should return correct data with alpha2 as parameter', () => {
		expect(getISO3166('HK')).toMatchSnapshot();
	});

	it('should return empty object when not found and with alpha2 as parameter', () => {
		expect(getISO3166('11')).toMatchSnapshot();
	});

	it('should return correct data with alpha3 as parameter', () => {
		expect(getISO3166('HKG')).toMatchSnapshot();
	});

	it('should return empty object when not found and with alpha3 as parameter', () => {
		expect(getISO3166('123')).toMatchSnapshot();
	});

	it('should return correct data with country name as parameter', () => {
		expect(getISO3166('hong kong')).toMatchSnapshot();
	});

	it('should return empty object when not found and with country name as parameter', () => {
		expect(getISO3166('hello world')).toMatchSnapshot();
	});
});
