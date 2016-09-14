'use stricts';

var iso3166_data = [
	// if no country is given, default to USA. DO NOT move this position

	// http://en.wikipedia.org/wiki/List_of_North_American_Numbering_Plan_area_codes#900.E2.80.93999
	// http://www.howtocallabroad.com/usa/
	// http://areacode.org/
	// http://countrycode.org/usa
	{
		alpha2: "US",
		alpha3: "USA",
		country_code: "1",
		country_name: "United States",
		mobile_begin_with: ["201", "202", "203", "205", "206", "207", "208", "209", "210", "212", "213", "214", "215",
			"216", "217", "218", "219", "224", "225", "227", "228", "229", "231", "234", "239", "240", "248", "251",
			"252", "253", "254", "256", "260", "262", "267", "269", "270", "272", "274", "276", "278", "281", "283",
			"301", "302", "303", "304", "305", "307", "308", "309", "310", "312", "313", "314", "315", "316", "317",
			"318", "319", "320", "321", "323", "325", "327", "330", "331", "334", "336", "337", "339", "341", "346",
			"347", "351", "352", "360", "361", "364", "369", "380", "385", "386", "401", "402", "404", "405", "406",
			"407", "408", "409", "410", "412", "413", "414", "415", "417", "419", "423", "424", "425", "430", "432",
			"434", "435", "440", "442", "443", "445", "447", "458", "464", "469", "470", "475", "478", "479", "480",
			"484", "501", "502", "503", "504", "505", "507", "508", "509", "510", "512", "513", "515", "516", "517",
			"518", "520", "530", "531", "534", "539", "540", "541", "551", "557", "559", "561", "562", "563", "564",
			"567", "570", "571", "573", "574", "575", "580", "582", "585", "586", "601", "602", "603", "605", "606",
			"607", "608", "609", "610", "612", "614", "615", "616", "617", "618", "619", "620", "623", "626", "627",
			"628", "630", "631", "636", "641", "646", "650", "651", "657", "659", "660", "661", "662", "667", "669",
			"678", "679", "681", "682", "689", "701", "702", "703", "704", "706", "707", "708", "712", "713", "714",
			"715", "716", "717", "718", "719", "720", "724", "725", "727", "730", "731", "732", "734", "737", "740",
			"747", "752", "754", "757", "760", "762", "763", "764", "765", "769", "770", "772", "773", "774", "775",
			"779", "781", "785", "786", "801", "802", "803", "804", "805", "806", "808", "810", "812", "813", "814",
			"815", "816", "817", "818", "828", "830", "831", "832", "835", "843", "845", "847", "848", "850", "856",
			"857", "858", "859", "860", "862", "863", "864", "865", "870", "872", "878", "901", "903", "904", "906",
			"907", "908", "909", "910", "912", "913", "914", "915", "916", "917", "918", "919", "920", "925", "927",
			"928", "929", "931", "935", "936", "937", "938", "940", "941", "947", "949", "951", "952", "954", "956",
			"957", "959", "970", "971", "972", "973", "975", "978", "979", "980", "984", "985", "989"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "AW",
		alpha3: "ABW",
		country_code: "297",
		country_name: "Aruba",
		mobile_begin_with: ["5", "6", "7", "9"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "AF",
		alpha3: "AFG",
		country_code: "93",
		country_name: "Afghanistan",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "AO",
		alpha3: "AGO",
		country_code: "244",
		country_name: "Angola",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "AI",
		alpha3: "AIA",
		country_code: "1",
		country_name: "Anguilla",
		mobile_begin_with: ["2645", "2647"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "AX",
		alpha3: "ALA",
		country_code: "358",
		country_name: "Åland Islands",
		mobile_begin_with: ["18"],
		phone_number_lengths: [6, 7, 8]
	},
	{
		alpha2: "AL",
		alpha3: "ALB",
		country_code: "355",
		country_name: "Albania",
		mobile_begin_with: ["6"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "AD",
		alpha3: "AND",
		country_code: "376",
		country_name: "Andorra",
		mobile_begin_with: ["3", "4", "6"],
		phone_number_lengths: [6]
	},
	//{alpha2: "AN", alpha3: "ANT", country_code: "599", country_name: "Netherlands Antilles", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "AE",
		alpha3: "ARE",
		country_code: "971",
		country_name: "United Arab Emirates",
		mobile_begin_with: ["5"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "AR",
		alpha3: "ARG",
		country_code: "54",
		country_name: "Argentina",
		mobile_begin_with: [],
		phone_number_lengths: [6, 7, 8, 9]
	},
	{
		alpha2: "AM",
		alpha3: "ARM",
		country_code: "374",
		country_name: "Armenia",
		mobile_begin_with: ["4", "5", "7", "9"],
		phone_number_lengths: [8]
	},
	// http://www.howtocallabroad.com/results.php?callfrom=united_states&callto=american_samoa
	{
		alpha2: "AS",
		alpha3: "ASM",
		country_code: "1",
		country_name: "American Samoa",
		mobile_begin_with: ["684733", "684258"],
		phone_number_lengths: [10]
	},
	//{alpha2: "AQ", alpha3: "ATA", country_code: "672", country_name: "Antarctica", mobile_begin_with: [], phone_number_lengths: []},
	//{alpha2: "TF", alpha3: "ATF", country_code: "", country_name: "French Southern Territories", mobile_begin_with: [], phone_number_lengths: []},
	// http://www.howtocallabroad.com/results.php?callfrom=united_states&callto=antigua_barbuda
	{
		alpha2: "AG",
		alpha3: "ATG",
		country_code: "1",
		country_name: "Antigua and Barbuda",
		mobile_begin_with: ["2687"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "AU",
		alpha3: "AUS",
		country_code: "61",
		country_name: "Australia",
		mobile_begin_with: ["4"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "AT",
		alpha3: "AUT",
		country_code: "43",
		country_name: "Austria",
		mobile_begin_with: ["6"],
		phone_number_lengths: [10, 11, 12, 13, 14]
	},
	{
		alpha2: "AZ",
		alpha3: "AZE",
		country_code: "994",
		country_name: "Azerbaijan",
		mobile_begin_with: ["4", "5", "6", "7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "BI",
		alpha3: "BDI",
		country_code: "257",
		country_name: "Burundi",
		mobile_begin_with: ["7", "29"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "BE",
		alpha3: "BEL",
		country_code: "32",
		country_name: "Belgium",
		mobile_begin_with: ["4"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "BJ",
		alpha3: "BEN",
		country_code: "229",
		country_name: "Benin",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "BF",
		alpha3: "BFA",
		country_code: "226",
		country_name: "Burkina Faso",
		mobile_begin_with: ["6", "7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "BD",
		alpha3: "BGD",
		country_code: "880",
		country_name: "Bangladesh",
		mobile_begin_with: ["1"],
		phone_number_lengths: [8, 9, 10]
	},
	{
		alpha2: "BG",
		alpha3: "BGR",
		country_code: "359",
		country_name: "Bulgaria",
		mobile_begin_with: ["87", "88", "89", "98", "99", "43"],
		phone_number_lengths: [8, 9]
	},
	{
		alpha2: "BH",
		alpha3: "BHR",
		country_code: "973",
		country_name: "Bahrain",
		mobile_begin_with: ["3"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "BS",
		alpha3: "BHS",
		country_code: "1",
		country_name: "Bahamas",
		mobile_begin_with: ["242"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "BA",
		alpha3: "BIH",
		country_code: "387",
		country_name: "Bosnia and Herzegovina",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8]
	},
	//{alpha2: "BL", alpha3: "BLM", country_code: "590", country_name: "Saint Barthélemy", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "BY",
		alpha3: "BLR",
		country_code: "375",
		country_name: "Belarus",
		mobile_begin_with: ["25", "29", "33", "44"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "BZ",
		alpha3: "BLZ",
		country_code: "501",
		country_name: "Belize",
		mobile_begin_with: ["6"],
		phone_number_lengths: [7]
	},
	// http://www.howtocallabroad.com/results.php?callfrom=united_states&callto=bermuda
	{
		alpha2: "BM",
		alpha3: "BMU",
		country_code: "1",
		country_name: "Bermuda",
		mobile_begin_with: ["4413", "4415", "4417"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "BO",
		alpha3: "BOL",
		country_code: "591",
		country_name: "Bolivia",
		mobile_begin_with: ["7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "BR", alpha3: "BRA", country_code: "55", country_name: "Brazil", mobile_begin_with: [
		"119", "129", "139", "149", "159", "169", "179", "189", "199", "219", "229", "249", "279", "289", "31", "32",
		"34", "38", "41", "43", "44", "45", "47", "48", "51", "53", "54", "55", "61", "62", "65", "67", "68", "69",
		"71", "73", "75", "77", "79", "81", "82", "83", "84", "85", "86", "91", "92", "95", "96", "98"
	], phone_number_lengths: [10, 11]
	},
	{
		alpha2: "BB",
		alpha3: "BRB",
		country_code: "1",
		country_name: "Barbados",
		mobile_begin_with: [246],
		phone_number_lengths: [10]
	},
	{
		alpha2: "BN",
		alpha3: "BRN",
		country_code: "673",
		country_name: "Brunei Darussalam",
		mobile_begin_with: ["7", "8"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "BT",
		alpha3: "BTN",
		country_code: "975",
		country_name: "Bhutan",
		mobile_begin_with: ["17"],
		phone_number_lengths: [8]
	},
	//{alpha2: "BV", alpha3: "BVT", country_code: "", country_name: "Bouvet Island", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "BW",
		alpha3: "BWA",
		country_code: "267",
		country_name: "Botswana",
		mobile_begin_with: ["71", "72", "73", "74", "75", "76"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "CF",
		alpha3: "CAF",
		country_code: "236",
		country_name: "Central African Republic",
		mobile_begin_with: ["7"],
		phone_number_lengths: [8]
	},

	// http://www.howtocallabroad.com/canada/
	// http://areacode.org/
	// http://countrycode.org/canada
	{
		alpha2: "CA", alpha3: "CAN", country_code: "1", country_name: "Canada",
		mobile_begin_with: ["204", "226", "236", "249", "250", "289", "306", "343", "365", "403", "416", "418", "431",
			"437", "438", "450", "506", "514", "519", "579", "581", "587", "600", "604", "613", "639", "647", "705",
			"709", "778", "780", "807", "819", "867", "873", "902", "905"], phone_number_lengths: [10]
	},
	//{alpha2: "CC", alpha3: "CCK", country_code: "61", country_name: "Cocos (Keeling) Islands", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "CH",
		alpha3: "CHE",
		country_code: "41",
		country_name: "Switzerland",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "CL",
		alpha3: "CHL",
		country_code: "56",
		country_name: "Chile",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "CN",
		alpha3: "CHN",
		country_code: "86",
		country_name: "China",
		mobile_begin_with: ["13", "14", "15", "17", "18"],
		phone_number_lengths: [11]
	},
	{
		alpha2: "CI",
		alpha3: "CIV",
		country_code: "225",
		country_name: "Côte D'Ivoire",
		mobile_begin_with: ["0", "4", "5", "6"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "CM",
		alpha3: "CMR",
		country_code: "237",
		country_name: "Cameroon",
		mobile_begin_with: ["7", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "CD",
		alpha3: "COD",
		country_code: "243",
		country_name: "Congo, The Democratic Republic Of The",
		mobile_begin_with: ["8", "9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "CG",
		alpha3: "COG",
		country_code: "242",
		country_name: "Congo",
		mobile_begin_with: ["0"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "CK",
		alpha3: "COK",
		country_code: "682",
		country_name: "Cook Islands",
		mobile_begin_with: ["5", "7"],
		phone_number_lengths: [5]
	},
	{
		alpha2: "CO",
		alpha3: "COL",
		country_code: "57",
		country_name: "Colombia",
		mobile_begin_with: ["3"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "KM",
		alpha3: "COM",
		country_code: "269",
		country_name: "Comoros",
		mobile_begin_with: ["3", "76"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "CV",
		alpha3: "CPV",
		country_code: "238",
		country_name: "Cape Verde",
		mobile_begin_with: ["5", "9"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "CR",
		alpha3: "CRI",
		country_code: "506",
		country_name: "Costa Rica",
		mobile_begin_with: ["5", "6", "7", "8"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "CU",
		alpha3: "CUB",
		country_code: "53",
		country_name: "Cuba",
		mobile_begin_with: ["5"],
		phone_number_lengths: [8]
	},
	//{alpha2: "CX", alpha3: "CXR", country_code: "61", country_name: "Christmas Island", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "KY",
		alpha3: "CYM",
		country_code: "1",
		country_name: "Cayman Islands",
		mobile_begin_with: ["345"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "CY",
		alpha3: "CYP",
		country_code: "357",
		country_name: "Cyprus",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "CZ",
		alpha3: "CZE",
		country_code: "420",
		country_name: "Czech Republic",
		mobile_begin_with: ["6", "7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "DE",
		alpha3: "DEU",
		country_code: "49",
		country_name: "Germany",
		mobile_begin_with: ["15", "16", "17"],
		phone_number_lengths: [10, 11]
	},
	{
		alpha2: "DJ",
		alpha3: "DJI",
		country_code: "253",
		country_name: "Djibouti",
		mobile_begin_with: ["77"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "DM",
		alpha3: "DMA",
		country_code: "1",
		country_name: "Dominica",
		mobile_begin_with: ["767"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "DK",
		alpha3: "DNK",
		country_code: "45",
		country_name: "Denmark",
		mobile_begin_with: ["2", "30", "31", "40", "41", "42", "50", "51", "52", "53", "60", "61", "71", "81", "91", "92", "93"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "DO",
		alpha3: "DOM",
		country_code: "1",
		country_name: "Dominican Republic",
		mobile_begin_with: ["809", "829", "849"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "DZ",
		alpha3: "DZA",
		country_code: "213",
		country_name: "Algeria",
		mobile_begin_with: ["5", "6", "7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "EC",
		alpha3: "ECU",
		country_code: "593",
		country_name: "Ecuador",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "EG",
		alpha3: "EGY",
		country_code: "20",
		country_name: "Egypt",
		mobile_begin_with: ["1"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "ER",
		alpha3: "ERI",
		country_code: "291",
		country_name: "Eritrea",
		mobile_begin_with: ["1", "7", "8"],
		phone_number_lengths: [7]
	},
	//{alpha2: "EH", alpha3: "ESH", country_code: "212", country_name: "Western Sahara", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "ES",
		alpha3: "ESP",
		country_code: "34",
		country_name: "Spain",
		mobile_begin_with: ["6", "7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "EE",
		alpha3: "EST",
		country_code: "372",
		country_name: "Estonia",
		mobile_begin_with: ["5", "81", "82", "83"],
		phone_number_lengths: [7, 8]
	},
	{
		alpha2: "ET",
		alpha3: "ETH",
		country_code: "251",
		country_name: "Ethiopia",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "FI",
		alpha3: "FIN",
		country_code: "358",
		country_name: "Finland",
		mobile_begin_with: ["4", "5"],
		phone_number_lengths: [9, 10]
	},
	{
		alpha2: "FJ",
		alpha3: "FJI",
		country_code: "679",
		country_name: "Fiji",
		mobile_begin_with: ["7", "9"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "FK",
		alpha3: "FLK",
		country_code: "500",
		country_name: "Falkland Islands (Malvinas)",
		mobile_begin_with: ["5", "6"],
		phone_number_lengths: [5]
	},
	{
		alpha2: "FR",
		alpha3: "FRA",
		country_code: "33",
		country_name: "France",
		mobile_begin_with: ["6", "7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "FO",
		alpha3: "FRO",
		country_code: "298",
		country_name: "Faroe Islands",
		mobile_begin_with: [],
		phone_number_lengths: [6]
	},
	{
		alpha2: "FM",
		alpha3: "FSM",
		country_code: "691",
		country_name: "Micronesia, Federated States Of",
		mobile_begin_with: [],
		phone_number_lengths: [7]
	},
	{
		alpha2: "GA",
		alpha3: "GAB",
		country_code: "241",
		country_name: "Gabon",
		mobile_begin_with: ["05", "06", "07"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "GB",
		alpha3: "GBR",
		country_code: "44",
		country_name: "United Kingdom",
		mobile_begin_with: ["7"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "GE",
		alpha3: "GEO",
		country_code: "995",
		country_name: "Georgia",
		mobile_begin_with: ["5", "7"],
		phone_number_lengths: [9]
	},
	//{alpha2: "GG", alpha3: "GGY", country_code: "44", country_name: "Guernsey", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "GH",
		alpha3: "GHA",
		country_code: "233",
		country_name: "Ghana",
		mobile_begin_with: ["2", "5"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "GI",
		alpha3: "GIB",
		country_code: "350",
		country_name: "Gibraltar",
		mobile_begin_with: ["5"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "GN",
		alpha3: "GIN",
		country_code: "224",
		country_name: "Guinea",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "GP",
		alpha3: "GLP",
		country_code: "590",
		country_name: "Guadeloupe",
		mobile_begin_with: ["690"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "GM",
		alpha3: "GMB",
		country_code: "220",
		country_name: "Gambia",
		mobile_begin_with: ["7", "9"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "GW",
		alpha3: "GNB",
		country_code: "245",
		country_name: "Guinea-Bissau",
		mobile_begin_with: ["5", "6", "7"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "GQ",
		alpha3: "GNQ",
		country_code: "240",
		country_name: "Equatorial Guinea",
		mobile_begin_with: ["222", "551"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "GR",
		alpha3: "GRC",
		country_code: "30",
		country_name: "Greece",
		mobile_begin_with: ["6"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "GD",
		alpha3: "GRD",
		country_code: "1",
		country_name: "Grenada",
		mobile_begin_with: ["473"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "GL",
		alpha3: "GRL",
		country_code: "299",
		country_name: "Greenland",
		mobile_begin_with: ["4", "5"],
		phone_number_lengths: [6]
	},
	{
		alpha2: "GT",
		alpha3: "GTM",
		country_code: "502",
		country_name: "Guatemala",
		mobile_begin_with: ["3", "4", "5"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "GF",
		alpha3: "GUF",
		country_code: "594",
		country_name: "French Guiana",
		mobile_begin_with: ["694"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "GU",
		alpha3: "GUM",
		country_code: "1",
		country_name: "Guam",
		mobile_begin_with: ["671"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "GY",
		alpha3: "GUY",
		country_code: "592",
		country_name: "Guyana",
		mobile_begin_with: ["6"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "HK",
		alpha3: "HKG",
		country_code: "852",
		country_name: "Hong Kong",
		mobile_begin_with: ["5", "6", "9"],
		phone_number_lengths: [8]
	},
	//{alpha2: "HM", alpha3: "HMD", country_code: "", country_name: "Heard and McDonald Islands", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "HN",
		alpha3: "HND",
		country_code: "504",
		country_name: "Honduras",
		mobile_begin_with: ["3", "7", "8", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "HR",
		alpha3: "HRV",
		country_code: "385",
		country_name: "Croatia",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8, 9]
	},
	{
		alpha2: "HT",
		alpha3: "HTI",
		country_code: "509",
		country_name: "Haiti",
		mobile_begin_with: ["3", "4"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "HU",
		alpha3: "HUN",
		country_code: "36",
		country_name: "Hungary",
		mobile_begin_with: ["20", "30", "31", "70"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "ID",
		alpha3: "IDN",
		country_code: "62",
		country_name: "Indonesia",
		mobile_begin_with: ["8"],
		phone_number_lengths: [9, 10, 11]
	},
	//{alpha2: "IM", alpha3: "IMN", country_code: "44", country_name: "Isle of Man", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "IN",
		alpha3: "IND",
		country_code: "91",
		country_name: "India",
		mobile_begin_with: ["7", "8", "9"],
		phone_number_lengths: [10]
	},
	//{alpha2: "IO", alpha3: "IOT", country_code: "246", country_name: "British Indian Ocean Territory", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "IE",
		alpha3: "IRL",
		country_code: "353",
		country_name: "Ireland",
		mobile_begin_with: ["82", "83", "84", "85", "86", "87", "88", "89"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "IR",
		alpha3: "IRN",
		country_code: "98",
		country_name: "Iran, Islamic Republic Of",
		mobile_begin_with: ["9"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "IQ",
		alpha3: "IRQ",
		country_code: "964",
		country_name: "Iraq",
		mobile_begin_with: ["7"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "IS",
		alpha3: "ISL",
		country_code: "354",
		country_name: "Iceland",
		mobile_begin_with: ["6", "7", "8"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "IL",
		alpha3: "ISR",
		country_code: "972",
		country_name: "Israel",
		mobile_begin_with: ["5"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "IT",
		alpha3: "ITA",
		country_code: "39",
		country_name: "Italy",
		mobile_begin_with: ["3"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "JM",
		alpha3: "JAM",
		country_code: "1",
		country_name: "Jamaica",
		mobile_begin_with: ["876"],
		phone_number_lengths: [10]
	},
	//{alpha2: "JE", alpha3: "JEY", country_code: "44", country_name: "Jersey", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "JO",
		alpha3: "JOR",
		country_code: "962",
		country_name: "Jordan",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "JP",
		alpha3: "JPN",
		country_code: "81",
		country_name: "Japan",
		mobile_begin_with: ["70", "80", "90"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "KZ",
		alpha3: "KAZ",
		country_code: "7",
		country_name: "Kazakhstan",
		mobile_begin_with: ["70", "77"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "KE",
		alpha3: "KEN",
		country_code: "254",
		country_name: "Kenya",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "KG",
		alpha3: "KGZ",
		country_code: "996",
		country_name: "Kyrgyzstan",
		mobile_begin_with: ["5", "7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "KH",
		alpha3: "KHM",
		country_code: "855",
		country_name: "Cambodia",
		mobile_begin_with: ["1", "6", "7", "8", "9"],
		phone_number_lengths: [8, 9]
	},
	{
		alpha2: "KI",
		alpha3: "KIR",
		country_code: "686",
		country_name: "Kiribati",
		mobile_begin_with: ["9", "30"],
		phone_number_lengths: [5]
	},
	{
		alpha2: "KN",
		alpha3: "KNA",
		country_code: "1",
		country_name: "Saint Kitts And Nevis",
		mobile_begin_with: ["869"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "KR",
		alpha3: "KOR",
		country_code: "82",
		country_name: "Korea, Republic of",
		mobile_begin_with: ["1"],
		phone_number_lengths: [9, 10]
	},
	{
		alpha2: "KW",
		alpha3: "KWT",
		country_code: "965",
		country_name: "Kuwait",
		mobile_begin_with: ["5", "6", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "LA",
		alpha3: "LAO",
		country_code: "856",
		country_name: "Lao People's Democratic Republic",
		mobile_begin_with: ["20"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "LB",
		alpha3: "LBN",
		country_code: "961",
		country_name: "Lebanon",
		mobile_begin_with: ["3", "7"],
		phone_number_lengths: [7, 8]
	},
	{
		alpha2: "LR",
		alpha3: "LBR",
		country_code: "231",
		country_name: "Liberia",
		mobile_begin_with: ["4", "5", "6", "7"],
		phone_number_lengths: [7, 8]
	},
	{
		alpha2: "LY",
		alpha3: "LBY",
		country_code: "218",
		country_name: "Libyan Arab Jamahiriya",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "LC",
		alpha3: "LCA",
		country_code: "1",
		country_name: "Saint Lucia",
		mobile_begin_with: ["758"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "LI",
		alpha3: "LIE",
		country_code: "423",
		country_name: "Liechtenstein",
		mobile_begin_with: ["7"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "LK",
		alpha3: "LKA",
		country_code: "94",
		country_name: "Sri Lanka",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "LS",
		alpha3: "LSO",
		country_code: "266",
		country_name: "Lesotho",
		mobile_begin_with: ["5", "6"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "LT",
		alpha3: "LTU",
		country_code: "370",
		country_name: "Lithuania",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "LU",
		alpha3: "LUX",
		country_code: "352",
		country_name: "Luxembourg",
		mobile_begin_with: ["6"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "LV",
		alpha3: "LVA",
		country_code: "371",
		country_name: "Latvia",
		mobile_begin_with: ["2"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MO",
		alpha3: "MAC",
		country_code: "853",
		country_name: "Macao",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8]
	},
	//{alpha2: "MF", alpha3: "MAF", country_code: "590", country_name: "Saint Martin", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "MA",
		alpha3: "MAR",
		country_code: "212",
		country_name: "Morocco",
		mobile_begin_with: ["6"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "MC",
		alpha3: "MCO",
		country_code: "377",
		country_name: "Monaco",
		mobile_begin_with: ["4", "6"],
		phone_number_lengths: [8, 9]
	},
	{
		alpha2: "MD",
		alpha3: "MDA",
		country_code: "373",
		country_name: "Moldova, Republic of",
		mobile_begin_with: ["6", "7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MG",
		alpha3: "MDG",
		country_code: "261",
		country_name: "Madagascar",
		mobile_begin_with: ["3"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "MV",
		alpha3: "MDV",
		country_code: "960",
		country_name: "Maldives",
		mobile_begin_with: ["7", "9"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "MX",
		alpha3: "MEX",
		country_code: "52",
		country_name: "Mexico",
		mobile_begin_with: [""],
		phone_number_lengths: [10, 11]
	},
	{
		alpha2: "MH",
		alpha3: "MHL",
		country_code: "692",
		country_name: "Marshall Islands",
		mobile_begin_with: [],
		phone_number_lengths: [7]
	},
	{
		alpha2: "MK",
		alpha3: "MKD",
		country_code: "389",
		country_name: "Macedonia, the Former Yugoslav Republic Of",
		mobile_begin_with: ["7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "ML",
		alpha3: "MLI",
		country_code: "223",
		country_name: "Mali",
		mobile_begin_with: ["6", "7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MT",
		alpha3: "MLT",
		country_code: "356",
		country_name: "Malta",
		mobile_begin_with: ["79", "99"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MM",
		alpha3: "MMR",
		country_code: "95",
		country_name: "Myanmar",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "ME",
		alpha3: "MNE",
		country_code: "382",
		country_name: "Montenegro",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MN",
		alpha3: "MNG",
		country_code: "976",
		country_name: "Mongolia",
		mobile_begin_with: ["5", "8", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MP",
		alpha3: "MNP",
		country_code: "1",
		country_name: "Northern Mariana Islands",
		mobile_begin_with: ["670"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "MZ",
		alpha3: "MOZ",
		country_code: "258",
		country_name: "Mozambique",
		mobile_begin_with: ["8"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "MR",
		alpha3: "MRT",
		country_code: "222",
		country_name: "Mauritania",
		mobile_begin_with: [],
		phone_number_lengths: [8]
	},
	{
		alpha2: "MS",
		alpha3: "MSR",
		country_code: "1",
		country_name: "Montserrat",
		mobile_begin_with: ["664"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "MQ",
		alpha3: "MTQ",
		country_code: "596",
		country_name: "Martinique",
		mobile_begin_with: ["696"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "MU",
		alpha3: "MUS",
		country_code: "230",
		country_name: "Mauritius",
		mobile_begin_with: [],
		phone_number_lengths: [7]
	},
	{
		alpha2: "MW",
		alpha3: "MWI",
		country_code: "265",
		country_name: "Malawi",
		mobile_begin_with: ["77", "88", "99"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "MY",
		alpha3: "MYS",
		country_code: "60",
		country_name: "Malaysia",
		mobile_begin_with: ["1"],
		phone_number_lengths: [9, 10]
	},
	{
		alpha2: "YT",
		alpha3: "MYT",
		country_code: "269",
		country_name: "Mayotte",
		mobile_begin_with: ["639"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "NA",
		alpha3: "NAM",
		country_code: "264",
		country_name: "Namibia",
		mobile_begin_with: ["60", "81", "82", "85"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "NC",
		alpha3: "NCL",
		country_code: "687",
		country_name: "New Caledonia",
		mobile_begin_with: [],
		phone_number_lengths: [6]
	},
	{
		alpha2: "NE",
		alpha3: "NER",
		country_code: "227",
		country_name: "Niger",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "NF",
		alpha3: "NFK",
		country_code: "672",
		country_name: "Norfolk Island",
		mobile_begin_with: ["5", "8"],
		phone_number_lengths: [5]
	},
	{
		alpha2: "NG",
		alpha3: "NGA",
		country_code: "234",
		country_name: "Nigeria",
		mobile_begin_with: ["70", "80", "81"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "NI",
		alpha3: "NIC",
		country_code: "505",
		country_name: "Nicaragua",
		mobile_begin_with: ["8"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "NU",
		alpha3: "NIU",
		country_code: "683",
		country_name: "Niue",
		mobile_begin_with: [],
		phone_number_lengths: [4]
	},
	{
		alpha2: "NL",
		alpha3: "NLD",
		country_code: "31",
		country_name: "Netherlands",
		mobile_begin_with: ["6"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "NO",
		alpha3: "NOR",
		country_code: "47",
		country_name: "Norway",
		mobile_begin_with: ["4", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "NP",
		alpha3: "NPL",
		country_code: "977",
		country_name: "Nepal",
		mobile_begin_with: ["97", "98"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "NR",
		alpha3: "NRU",
		country_code: "674",
		country_name: "Nauru",
		mobile_begin_with: ["555"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "NZ",
		alpha3: "NZL",
		country_code: "64",
		country_name: "New Zealand",
		mobile_begin_with: ["2"],
		phone_number_lengths: [8, 9, 10]
	},
	{
		alpha2: "OM",
		alpha3: "OMN",
		country_code: "968",
		country_name: "Oman",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "PK",
		alpha3: "PAK",
		country_code: "92",
		country_name: "Pakistan",
		mobile_begin_with: ["3"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "PA",
		alpha3: "PAN",
		country_code: "507",
		country_name: "Panama",
		mobile_begin_with: ["5", "6"],
		phone_number_lengths: [8]
	},
	//{alpha2: "PN", alpha3: "PCN", country_code: "", country_name: "Pitcairn", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "PE",
		alpha3: "PER",
		country_code: "51",
		country_name: "Peru",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "PH",
		alpha3: "PHL",
		country_code: "63",
		country_name: "Philippines",
		mobile_begin_with: ["9"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "PW",
		alpha3: "PLW",
		country_code: "680",
		country_name: "Palau",
		mobile_begin_with: [],
		phone_number_lengths: [7]
	},
	{
		alpha2: "PG",
		alpha3: "PNG",
		country_code: "675",
		country_name: "Papua New Guinea",
		mobile_begin_with: ["7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "PL",
		alpha3: "POL",
		country_code: "48",
		country_name: "Poland",
		mobile_begin_with: ["5", "6", "7", "8"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "PR",
		alpha3: "PRI",
		country_code: "1",
		country_name: "Puerto Rico",
		mobile_begin_with: ["787", "939"],
		phone_number_lengths: [10]
	},
	//{alpha2: "KP", alpha3: "PRK", country_code: "850", country_name: "Korea, Democratic People's Republic Of", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "PT",
		alpha3: "PRT",
		country_code: "351",
		country_name: "Portugal",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "PY",
		alpha3: "PRY",
		country_code: "595",
		country_name: "Paraguay",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "PS",
		alpha3: "PSE",
		country_code: "970",
		country_name: "Palestinian Territory, Occupied",
		mobile_begin_with: ["5"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "PF",
		alpha3: "PYF",
		country_code: "689",
		country_name: "French Polynesia",
		mobile_begin_with: [],
		phone_number_lengths: [6]
	},
	{
		alpha2: "QA",
		alpha3: "QAT",
		country_code: "974",
		country_name: "Qatar",
		mobile_begin_with: ["33", "55", "66", "77"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "RE",
		alpha3: "REU",
		country_code: "262",
		country_name: "Réunion",
		mobile_begin_with: ["692", "693"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "RO",
		alpha3: "ROU",
		country_code: "40",
		country_name: "Romania",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "RU",
		alpha3: "RUS",
		country_code: "7",
		country_name: "Russian Federation",
		mobile_begin_with: ["9"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "RW",
		alpha3: "RWA",
		country_code: "250",
		country_name: "Rwanda",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "SA",
		alpha3: "SAU",
		country_code: "966",
		country_name: "Saudi Arabia",
		mobile_begin_with: ["5"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "SD",
		alpha3: "SDN",
		country_code: "249",
		country_name: "Sudan",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "SN",
		alpha3: "SEN",
		country_code: "221",
		country_name: "Senegal",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "SG",
		alpha3: "SGP",
		country_code: "65",
		country_name: "Singapore",
		mobile_begin_with: ["8", "9"],
		phone_number_lengths: [8]
	},
	//{alpha2: "GS", alpha3: "SGS", country_code: "500", country_name: "South Georgia and the South Sandwich Islands", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "SH",
		alpha3: "SHN",
		country_code: "290",
		country_name: "Saint Helena",
		mobile_begin_with: [],
		phone_number_lengths: [4]
	},
	{
		alpha2: "SJ",
		alpha3: "SJM",
		country_code: "47",
		country_name: "Svalbard And Jan Mayen",
		mobile_begin_with: [],
		phone_number_lengths: [8]
	},
	{
		alpha2: "SB",
		alpha3: "SLB",
		country_code: "677",
		country_name: "Solomon Islands",
		mobile_begin_with: ["7", "8"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "SL",
		alpha3: "SLE",
		country_code: "232",
		country_name: "Sierra Leone",
		mobile_begin_with: ["21", "25", "30", "33", "34", "40", "44", "50", "55", "76", "77", "78", "79", "88"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "SV",
		alpha3: "SLV",
		country_code: "503",
		country_name: "El Salvador",
		mobile_begin_with: ["7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "SM",
		alpha3: "SMR",
		country_code: "378",
		country_name: "San Marino",
		mobile_begin_with: ["3", "6"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "SO",
		alpha3: "SOM",
		country_code: "252",
		country_name: "Somalia",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "SX",
		alpha3: "SXM",
		country_code: "1",
		country_name: "Sint Maarten",
		mobile_begin_with: ["721"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "PM",
		alpha3: "SPM",
		country_code: "508",
		country_name: "Saint Pierre And Miquelon",
		mobile_begin_with: ["55"],
		phone_number_lengths: [6]
	},
	{
		alpha2: "RS",
		alpha3: "SRB",
		country_code: "381",
		country_name: "Serbia",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8, 9]
	},
	{
		alpha2: "ST",
		alpha3: "STP",
		country_code: "239",
		country_name: "Sao Tome and Principe",
		mobile_begin_with: ["98", "99"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "SR",
		alpha3: "SUR",
		country_code: "597",
		country_name: "Suriname",
		mobile_begin_with: ["6", "7", "8"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "SK",
		alpha3: "SVK",
		country_code: "421",
		country_name: "Slovakia",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "SI",
		alpha3: "SVN",
		country_code: "386",
		country_name: "Slovenia",
		mobile_begin_with: ["3", "4", "5", "6", "7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "SE",
		alpha3: "SWE",
		country_code: "46",
		country_name: "Sweden",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	//{alpha2: "SZ", alpha3: "SWZ", country_code: "268", country_name: "Swaziland", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "SC",
		alpha3: "SYC",
		country_code: "248",
		country_name: "Seychelles",
		mobile_begin_with: ["2"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "SY",
		alpha3: "SYR",
		country_code: "963",
		country_name: "Syrian Arab Republic",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	// http://www.howtocallabroad.com/turks-caicos/
	{
		alpha2: "TC",
		alpha3: "TCA",
		country_code: "1",
		country_name: "Turks and Caicos Islands",
		mobile_begin_with: ["6492", "6493", "6494"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "TD",
		alpha3: "TCD",
		country_code: "235",
		country_name: "Chad",
		mobile_begin_with: ["6", "7", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "TG",
		alpha3: "TGO",
		country_code: "228",
		country_name: "Togo",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "TH",
		alpha3: "THA",
		country_code: "66",
		country_name: "Thailand",
		mobile_begin_with: ["8", "9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "TJ",
		alpha3: "TJK",
		country_code: "992",
		country_name: "Tajikistan",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "TK",
		alpha3: "TKL",
		country_code: "690",
		country_name: "Tokelau",
		mobile_begin_with: [],
		phone_number_lengths: [4]
	},
	{
		alpha2: "TM",
		alpha3: "TKM",
		country_code: "993",
		country_name: "Turkmenistan",
		mobile_begin_with: ["6"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "TL",
		alpha3: "TLS",
		country_code: "670",
		country_name: "Timor-Leste",
		mobile_begin_with: ["7"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "TO",
		alpha3: "TON",
		country_code: "676",
		country_name: "Tonga",
		mobile_begin_with: [],
		phone_number_lengths: [5]
	},
	{
		alpha2: "TT",
		alpha3: "TTO",
		country_code: "1",
		country_name: "Trinidad and Tobago",
		mobile_begin_with: ["868"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "TN",
		alpha3: "TUN",
		country_code: "216",
		country_name: "Tunisia",
		mobile_begin_with: ["2", "9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "TR",
		alpha3: "TUR",
		country_code: "90",
		country_name: "Turkey",
		mobile_begin_with: ["5"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "TV",
		alpha3: "TUV",
		country_code: "688",
		country_name: "Tuvalu",
		mobile_begin_with: [],
		phone_number_lengths: [5]
	},
	{
		alpha2: "TW",
		alpha3: "TWN",
		country_code: "886",
		country_name: "Taiwan, Province Of China",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "TZ",
		alpha3: "TZA",
		country_code: "255",
		country_name: "Tanzania, United Republic of",
		mobile_begin_with: ["7", "6"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "UG",
		alpha3: "UGA",
		country_code: "256",
		country_name: "Uganda",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "UA",
		alpha3: "UKR",
		country_code: "380",
		country_name: "Ukraine",
		mobile_begin_with: ["39", "50", "63", "66", "67", "68", "9"],
		phone_number_lengths: [9]
	},
	//{alpha2: "UM", alpha3: "UMI", country_code: "", country_name: "United States Minor Outlying Islands", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "UY",
		alpha3: "URY",
		country_code: "598",
		country_name: "Uruguay",
		mobile_begin_with: ["9"],
		phone_number_lengths: [8]
	},
	{
		alpha2: "UZ",
		alpha3: "UZB",
		country_code: "998",
		country_name: "Uzbekistan",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	//{alpha2: "VA", alpha3: "VAT", country_code: "39", country_name: "Holy See (Vatican City State)", mobile_begin_with: [], phone_number_lengths: []},
	{
		alpha2: "VC",
		alpha3: "VCT",
		country_code: "1",
		country_name: "Saint Vincent And The Grenedines",
		mobile_begin_with: ["784"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "VE",
		alpha3: "VEN",
		country_code: "58",
		country_name: "Venezuela, Bolivarian Republic of",
		mobile_begin_with: ["4"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "VG",
		alpha3: "VGB",
		country_code: "1",
		country_name: "Virgin Islands, British",
		mobile_begin_with: ["284"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "VI",
		alpha3: "VIR",
		country_code: "1",
		country_name: "Virgin Islands, U.S.",
		mobile_begin_with: ["340"],
		phone_number_lengths: [10]
	},
	{
		alpha2: "VN",
		alpha3: "VNM",
		country_code: "84",
		country_name: "Viet Nam",
		mobile_begin_with: ["9", "1"],
		phone_number_lengths: [9, 10]
	},
	{
		alpha2: "VU",
		alpha3: "VUT",
		country_code: "678",
		country_name: "Vanuatu",
		mobile_begin_with: ["5", "7"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "WF",
		alpha3: "WLF",
		country_code: "681",
		country_name: "Wallis and Futuna",
		mobile_begin_with: [],
		phone_number_lengths: [6]
	},
	{
		alpha2: "WS",
		alpha3: "WSM",
		country_code: "685",
		country_name: "Samoa",
		mobile_begin_with: ["7"],
		phone_number_lengths: [7]
	},
	{
		alpha2: "YE",
		alpha3: "YEM",
		country_code: "967",
		country_name: "Yemen",
		mobile_begin_with: ["7"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "ZA",
		alpha3: "ZAF",
		country_code: "27",
		country_name: "South Africa",
		mobile_begin_with: ["6", "7", "8"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "ZM",
		alpha3: "ZMB",
		country_code: "260",
		country_name: "Zambia",
		mobile_begin_with: ["9"],
		phone_number_lengths: [9]
	},
	{
		alpha2: "ZW",
		alpha3: "ZWE",
		country_code: "263",
		country_name: "Zimbabwe",
		mobile_begin_with: ["71", "73", "77"],
		phone_number_lengths: [9]
	}
];

function getISO3166(country) {
	// assign default to USA country first
	var iso3166 = {};
	var upper_case_country = country.toUpperCase();

	switch (country.length) {
		case 0:
			iso3166 = iso3166_data[0];
			break;
		case 2:
			iso3166_data.every(function (iso3166_datum) {
				if (upper_case_country === iso3166_datum.alpha2) {
					iso3166 = iso3166_datum;
					return false;
				}

				return true;
			});
			break;
		case 3:
			iso3166_data.every(function (iso3166_datum) {
				if (upper_case_country === iso3166_datum.alpha3) {
					iso3166 = iso3166_datum;
					return false;
				}

				return true;
			});
			break;
		default:
			iso3166_data.every(function (iso3166_datum) {
				if (upper_case_country === iso3166_datum.country_name.toUpperCase()) {
					iso3166 = iso3166_datum;
					return false;
				}

				return true;
			});
	}

	return iso3166;
}

function get_iso3166_by_phone(phone) {
	var iso3166 = {};

	iso3166_data.every(function (iso3166_datum) {
		var regex = new RegExp('^' + iso3166_datum.country_code);

		return iso3166_datum.phone_number_lengths.every(function (phone_number_length) {
			if (phone.match(regex) && phone.length === iso3166_datum.country_code.length + phone_number_length) {
				// it match.. but may have more than one result.
				// e.g. USA and Canada. need to check mobile_begin_with
				return iso3166_datum.mobile_begin_with.every(function (mobile_begin_with) {
					if (phone.match(new RegExp('^' + iso3166_datum.country_code + mobile_begin_with))) {
						iso3166 = iso3166_datum;
						return false;
					}

					return true;
				});
			}

			return true;
		});
	});

	return iso3166;
}

function validate_phone_iso3166(phone, iso3166) {
	phone = phone.replace(new RegExp('^' + iso3166.country_code), '');

	if (!iso3166.phone_number_lengths) {
		return false;
	}

	return iso3166.phone_number_lengths.some(function (phone_number_length) {
		if (phone.length === phone_number_length) {
			return iso3166.mobile_begin_with.some(function (mobile_begin_with) {
				return phone.match(new RegExp('^' + mobile_begin_with));
			});
		}

		return false;
	});
}

/**
 *
 * 1. If no "+" sign, must treat as USA phone
 * @param phone
 * @param country
 * @returns []
 */

module.exports = function (phone, country) {
	var result = [];

	phone = (phone === null || typeof(phone) !== 'string') ? '' : phone.trim();
	country = (country === null || typeof(country) !== 'string') ? '' : country.trim();

	var plus_sign = false;

	if (phone.match(/^\+/)) {
		plus_sign = true;
	}

	// remove any non-digit character, included the +
	phone = phone.replace(/\D/g, '');

	var iso3166 = getISO3166(country); // if no country, default is USA


	if (Object.keys(iso3166).length === 0) {
		return result;
	}

	if (country) {
		// remove leading 0s for all countries except 'GAB', 'CIV', 'COG'
		if (['GAB', 'CIV', 'COG'].indexOf(iso3166.alpha3) === -1) {
			phone = phone.replace(/^0+/, '');
		}

		// if input 89234567890, RUS, remove the 8
		if (iso3166.alpha3 === 'RUS' && phone.length === 11 && phone.match(/^89/) !== null) {
			phone = phone.replace(/^8+/, '');
		}


		if (plus_sign) {
			// D is here.
		} else {
			// C: have country, no plus sign --->
			//	case 1
			//		check phone_number_length == phone.length
			//		add back the country code
			//	case 2
			//		phone_number_length+phone_country_code.length == phone.length
			//		then go to D
			if (iso3166.phone_number_lengths.indexOf(phone.length) !== -1) {
				phone = iso3166.country_code + phone;
			}
		}
	} else {
		if (plus_sign) {
			// A: no country, have plus sign --> lookup country_code, length, and get the iso3166 directly
			// also validation is done here. so, the iso3166 is the matched result.
			iso3166 = get_iso3166_by_phone(phone);
		} else {
			// B: no country, no plus sign --> treat it as USA
			// 1. check length if == 11, or 10, if 10, add +1, then go go D
			// no plus sign, no country is given. then it must be USA
			// iso3166 = iso3166_data[0]; already assign by the default value
			if (iso3166.phone_number_lengths.indexOf(phone.length) !== -1) {
				phone = '1' + phone;
			}
		}
	}

	if (validate_phone_iso3166(phone, iso3166)) {
		return ['+' + phone, iso3166.alpha3];
	}
	return result;
};
