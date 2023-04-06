function convertTemperature(celsius: number): number[] {
  let kelvin = celsius + +273.15;
  let fahrenheit = celsius * 1.8 + 32.0;
  return [kelvin, fahrenheit];
}
