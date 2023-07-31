import {
  cmToInches,
  feetToMeter,
  inchesToCm,
  kmToMiles,
  meterToFeet,
  milesToKm,
} from ".";
import { expect, test } from "vitest";

test("Convert feet to meter with a number", () => {
  const result = feetToMeter(5.9);
  expect(result).toEqual(1.75);
});

test("Convert feet to meter with a string", () => {
  const result = feetToMeter("6.1");
  expect(result).toEqual(1.85);
});

test("Convert feet to meter with a string with a comma", () => {
  const result = feetToMeter("4,12");
  expect(result).toEqual(1.52);
});

test("Convert meters to feet and inches with a number", () => {
  const result = meterToFeet(1.85);
  expect(result).toEqual({ feet: 6, inches: 0.83 });
});

test("Convert meters to feet and inches with a string", () => {
  const result = meterToFeet("1.53");
  expect(result).toEqual({ feet: 5, inches: 0.24 });
});

test("Convert meters to feet and inches with a string with a comma", () => {
  const result = meterToFeet("1,78");
  expect(result).toEqual({ feet: 5, inches: 10.08 });
});

test("Convert centimeters to inches wih a number", () => {
  const result = cmToInches(8);
  expect(result).toEqual(3.15);
});

test("Convert centimeters to inches with a string with a comma", () => {
  const result = cmToInches("15,75");
  expect(result).toEqual(6.2);
});

test("Convert inches to centimeters wih a number", () => {
  const result = inchesToCm(4);
  expect(result).toEqual(10.16);
});

test("Convert inches to centimeters with a string with a comma", () => {
  const result = inchesToCm("8,45");
  expect(result).toEqual(21.46);
});

test("Convert miles to kilometers wih a number", () => {
  const result = milesToKm(4.23);
  expect(result).toEqual(6.81);
});

test("Convert miles to kilometers with a string with a comma", () => {
  const result = milesToKm("24,75");
  expect(result).toEqual(39.83);
});

test("Convert kilometers to miles wih a number", () => {
  const result = kmToMiles(12.56);
  expect(result).toEqual(7.8);
});

test("Convert kilometers to miles with a string with a comma", () => {
  const result = kmToMiles("4,22");
  expect(result).toEqual(2.62);
});
