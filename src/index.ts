const setup = (unit: number | string) => {
  let formattedUnit = unit;
  if (typeof formattedUnit === "string") {
    formattedUnit = formattedUnit.includes(",")
      ? formattedUnit.replace(",", ".")
      : formattedUnit;
    formattedUnit = parseFloat(formattedUnit);
  }
  return formattedUnit;
};

export const feetToMeter = (unit: number | string, fixed: number = 2) => {
  let formattedUnit = unit;
  if (typeof formattedUnit === "string" && formattedUnit.includes(",")) {
    formattedUnit = formattedUnit.replace(",", ".");
  }
  if (typeof formattedUnit === "number") {
    formattedUnit = formattedUnit.toString();
  }
  let [feet = 0, inches = 0] = formattedUnit.split(".");
  if (typeof feet === "string") {
    feet = parseFloat(feet);
  }
  if (typeof inches === "string") {
    inches = parseFloat(inches);
  }
  const result = feet * 0.3048 + inches * 0.0254;
  return Number(result.toFixed(fixed));
};

export const meterToFeet = (unit: number | string, fixed: number = 2) => {
  const formattedUnit = setup(unit);
  const length = formattedUnit / 0.0254;
  const feet = Math.floor(length / 12);
  const inches = Number((length - 12 * feet).toFixed(fixed));
  return { feet, inches };
};

export const cmToInches = (unit: number | string, fixed: number = 2) => {
  const formattedUnit = setup(unit);
  return Number((formattedUnit / 2.54).toFixed(fixed));
};

export const inchesToCm = (unit: number | string, fixed: number = 2) => {
  const formattedUnit = setup(unit);
  return Number((formattedUnit * 2.54).toFixed(fixed));
};
