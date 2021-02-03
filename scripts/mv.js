const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../dist/iso3166Data');
if (!fs.existsSync(dir)) {
	fs.mkdirSync(dir, 0744);
}

fs.readdir(path.join(__dirname, '../iso3166Data'), (err, files) => {
	files.forEach((file) => {
		fs.copyFileSync(path.join(__dirname, '../iso3166Data', file), dir + '/' + file);
	});
});
