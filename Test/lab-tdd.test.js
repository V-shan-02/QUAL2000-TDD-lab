// imports
const { describe, it } = require("node:test");
const assert = require("node:assert");
const {
  add,
  subtract,
  multiply,
  divide,
  modulas,
  power,
  squareRoot,
  floor,
  ceiling,
} = require("../lab-TDD-starter.js");

describe("Test suite for math functions", () => {
  // Test cases for adding
  it("add function should return 5 when adding 2 and 3", () => {
    assert.strictEqual(add(2, 3), 5);
  });

  // Test cases for subtracting
  it("subtract function should return -4 when subtracting 9 from 5", () => {
    assert.strictEqual(subtract(5, 9), -4);
  });

  // Test cases for multiplying
  it("multiply function should return 108 when multiplying 12 and 9", () => {
    assert.strictEqual(multiply(12, 9), 108);
  });

  // Test cases for dividing
  it("divide function should return 11 when dividing 55 by 5", () => {
    assert.strictEqual(divide(55, 5), 11);
  });

  it("divide function should throw error when dividing by zero", () => {
    assert.throws(() => divide(10, 0), Error);
  });

  // Test cases for modulas
  it("modulas function should return 1 for 17 mod 4", () => {
    assert.strictEqual(modulas(17, 4), 1);
  });

  // Test cases for power
  it("power function should return 32 for 2^5", () => {
    assert.strictEqual(power(2, 5), 32);
  });

  // Test cases for squareRoot
  it("squareRoot should return 5 for 25", () => {
    assert.strictEqual(squareRoot(25), 5);
  });

  it("squareRoot should throw error for negative number", () => {
    assert.throws(() => squareRoot(-5), Error);
  });

  // Test cases for floor
  it("floor function should return 15 for 15.3", () => {
    assert.strictEqual(floor(15.3), 15);
  });

  // Test cases for ceiling
  it("ceiling function should return 16 for 15.3", () => {
    assert.strictEqual(ceiling(15.3), 16);
  });
});
