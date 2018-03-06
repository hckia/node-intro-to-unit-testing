const expect = require('chai').expect;

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function() {

  it('should return "fizz-buzz" for multiples of 15', function() {
  	const cases = [15, 30, 45];
    cases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz-buzz');
    });
  });

  it('should return "fizz" for multiples of 3', function() {
  	const cases = [3, 6, 9, 12];
    cases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('fizz');
    });
  });

  it('should return "buzz" for multiples of 5', function() {
  	const cases = [5, 10, 20];
    cases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal('buzz');
    });
  });

  it('should return number if not mult of 3 or 5', function() {
  	const cases = [1, 2, 4, 7];
    cases.forEach(function(input) {
      expect(fizzBuzzer(input)).to.equal(input);
    });
  });

  it('should produce error if input isn\'t number', function() {
    const badInputs = [true, false, 'cat', function() {}, [1, 2, 3]];
    badInputs.forEach(function(input) {
      expect(function() {
          fizzBuzzer(input);
      }).to.throw(Error);
    });
  });
});