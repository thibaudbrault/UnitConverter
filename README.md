# `unit-converter`

Package with multiple functions to convert units of measurements  
Every function accepts 2 arguments (unless stated otherwise):

- `unit` which can be a number or a string (if it's a string it can have a comma instead of a dot separate the decimals) and is the number that will be converted.
- `fixed` which is the number that will be passed in the `toFixed()` at the end of every function. This argument is optional and if not passed it will default to 2

The result will be of type number

### Install

```bash
npm install unit-convert-fns
```

### Using the functions

```typescript
import { feetToMeter } from "unit-convert-fns";
const feet = 8.56;
const fixed = 3;
const meter = feetToMeter(feet, 3);
```

## List of functions

- [feetToMeter](#feetToMeter)
- [meterToFeet](#meterToFeet)
- [cmToInches](#cmToInches)
- [inchesToCm](#inchesToCm)
- [milesToKm](#milesToKm)
- [kmToMiles](#kmToMiles)

<hr />

<h3 id="feetToMeter"><code>feetToMeter</code></h3>

```typescript
import { feetToMeter } from "unit-convert-fns";
const feet = 5.9;
const meter = feetToMeter(feet);
console.log(meter);
// meter will be equal to 5.9
```

<h3 id="meterToFeet"><code>meterToFeet</code></h3>
This functions returns two variables: the <b>feet</b> and the <b>inches</b>

```typescript
import { meterToFeet } from "unit-convert-fns";
const meter = "1,78";
const { feet, inches } = meterToFeet(meter);
console.log(feet, inches);
// feet will be equal to 5 and inches will be equal to 10.08
```

In this function the `toFixed()` is applied only on the inches. The feet has a `Math.floor()` applied.

<h3 id="cmToInches"><code>cmToInches</code></h3>

```typescript
import { cmToInches } from "unit-convert-fns";
const cm = 8;
const inches = cmToInches(cm);
console.log(inches);
// inches will be equal to 3.15
```

<h3 id="inchesToCm"><code>inchesToCm</code></h3>

```typescript
import { inchesToCm } from "unit-convert-fns";
const inches = "8.45";
const cm = inchesToCm(inches);
console.log(cm);
// cm will be equal to 21.46
```

<h3 id="milesToKm"><code>milesToKm</code></h3>

```typescript
import { milesToKm } from "unit-convert-fns";
const miles = 4.23;
const km = milesToKm(miles);
console.log(km);
// km will be equal to 6.81
```

<h3 id="kmToMiles"><code>kmToMiles</code></h3>

```typescript
import { kmToMiles } from "unit-convert-fns";
const km = 12.56;
const miles = kmToMiles(km);
console.log(miles);
// miles will be equal to 7.80
```
