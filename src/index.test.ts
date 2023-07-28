import { feetToMeter, meterToFeet } from ".";
import { expect, test } from "vitest";

test("Convert feet to meter with number", () => {
  const result = feetToMeter(5.9);
  expect(result).toEqual(1.75);
});

test("Convert feet to meter with string", () => {
  const result = feetToMeter("6.1");
  expect(result).toEqual(1.85);
});

test("Convert feet to meter with string and with a comma", () => {
  const result = feetToMeter("4,12");
  expect(result).toEqual(1.52);
});

test("Convert meters to feet and inches with number", () => {
  const result = meterToFeet(1.85);
  expect(result).toEqual({ feet: 6, inches: 0.83 });
});

test("Convert meters to feet and inches with string", () => {
  const result = meterToFeet("1.53");
  expect(result).toEqual({ feet: 5, inches: 0.24 });
});

test("Convert meters to feet and inches with string and with a comma", () => {
  const result = meterToFeet("1,78");
  expect(result).toEqual({ feet: 5, inches: 10.08 });
});
