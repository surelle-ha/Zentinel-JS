const { composer } = require("./utilities/composer.js")
const path = require("path");

function createTest(name) {
	const dir = path.join(__dirname, "../tests");
	const filePath = path.join(dir, `${name}.test.js`);
	const content = `const request = require('supertest');
    const app = require('../app.js');
    
    describe('${name}', () => {
        // Compose your test set here.
    });
    
`;

    composer(dir, filePath, content);
}

module.exports = {
	createTest,
};