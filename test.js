const path = require('path')
const fs = require('fs')

try {
	fs.readFileSync(path.join(__dirname, 'test.file'))

	console.log('EICAR test file exists.')
	process.exit(0)
}
catch (err) {
	console.error('EICAR test file is missing.')
	process.exit(1)
}