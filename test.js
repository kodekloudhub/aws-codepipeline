const assert = require('assert');
const http = require('http');

describe('Server test', () => {
  it('should return a successful response', (done) => {
    http.get('http://localhost:3000', (res) => {
      assert.strictEqual(res.statusCode, 200);
      let data = '';
      res.on('data', (chunk) => {
        data += chunk;
      });
      res.on('end', () => {
        assert.strictEqual(data, 'Hello, World!\n');
        done();
      });
    });
  });
});

