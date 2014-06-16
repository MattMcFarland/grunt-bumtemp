var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.gruntwrap = {
  setUp: function(done) {
    done();
  },
  basics: function(test) {
    test.expect(1);

    var expected, actual;

    expected= grunt.file.read('test/expected/template.html');
    actual = grunt.file.read('test/tmp/template.html');
    test.equal(expected, actual, 'should be combined and wrapped correctly');

    test.done();
  }
};
