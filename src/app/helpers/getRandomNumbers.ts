export function getRandomNumbers(quantity: number, rangeMin: number, rangeMax: number, sorting?: 'asc' | 'desc') {
  // Return error if a value is missing or not an integer
  if (
    !Number.isInteger(quantity) ||
    !Number.isInteger(rangeMin) ||
    !Number.isInteger(rangeMax)
  ) {
    console.error(
      'Please pass a quantity, rangeMin and rangeMax to the getRandomNumbers function. Example: getRandomNumbers(5, 1, 47)'
    );
    return;
  }

  // Return error if range is smaller than quantity
  if (rangeMax - rangeMin + 1 < quantity) {
    console.error(
      'Quantity is bigger than the number range. \nValid:   getRandomNumbers(5, 1, 5), getRandomNumbers(6, 1, 5), ... \nInvalid: getRandomNumbers(4, 1, 5), getRandomNumbers(3, 1, 5), ...'
    );
    return;
  }

  // Get array with number range
  let numberRange = [];
  for (var number = rangeMin; number <= rangeMax; number++) {
    numberRange.push(number);
  }

  // Get shuffled and with quantity cropped array
  const shuffledNumberRange = numberRange
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
  const croppedShuffledNumberRange = shuffledNumberRange.slice(0, quantity);

  // Get sorted array
  if (sorting === 'asc') {
    croppedShuffledNumberRange.sort(function (a, b) {
      return a - b;
    });
  }
  if (sorting === 'desc') {
    croppedShuffledNumberRange.sort(function (a, b) {
      return b - a;
    });
  }

  // Return
  return croppedShuffledNumberRange;
}
