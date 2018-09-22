/**
 * GET RANDOM NUMBERS
 *
 * This will return an array with the
 * length of the transmitted quantity
 * and with the random in it numbers
 * from the transmitted range.
 *
 * @requires int, int, int
 *
 * @return array
 */
export function getRandomNumbers(quantity, rangeMin, rangeMax, sorting) {
    // Return error if a value is missing or not an integer
    if (!Number.isInteger(quantity) || !Number.isInteger(rangeMin) || !Number.isInteger(rangeMax)) {
        console.error("Please pass a quantity, rangeMin and rangeMax to the getRandomNumbers function. Example: getRandomNumbers(5, 1, 47)");
        return;
    }

    // Return error if range is smaller than quantity
    if (rangeMax-rangeMin+1 < quantity) {
        console.error("Quantity is bigger than the number range. \nValid:   getRandomNumbers(5, 1, 5), getRandomNumbers(6, 1, 5), ... \nInvalid: getRandomNumbers(4, 1, 5), getRandomNumbers(3, 1, 5), ...");
        return;
    }

    // Get array with number range
    let numberRange = [];
    for (var number = rangeMin; number <= rangeMax; number++) {
        numberRange.push(number);
    }

    // Get shuffled and with quantity cropped array
    const shuffledNumberRange = numberRange.map((a) => [Math.random(),a]).sort((a,b) => a[0]-b[0]).map((a) => a[1]);
    const croppedShuffledNumberRange = shuffledNumberRange.slice(0, quantity);

    // Get sorted array
    if (sorting === 'asc') {
        croppedShuffledNumberRange.sort(function(a, b){return a - b});
    }
    if (sorting === 'desc') {
        croppedShuffledNumberRange.sort(function(a, b){return b - a});
    }

    // Return
    return croppedShuffledNumberRange;
}



/**
 * GET STRING URL FRIENDLY
 *
 * Will get the transmitted string
 * usable for urls.
 * e.g. Foo Bar -> foo-bar.
 *
 * @requires string
 *
 * @return string
 */
export function getStringUrlFriendly (string) {
    if (typeof string !== 'string') {
        return;
    }

    // to lower case
    let optString = string.toLowerCase();

    // spaces to dashes
    optString = optString.replace(' ', '-');

    // return
    return optString;
}



/**
 * SET LOCAL STORAGE
 *
 * Will set local storage.
 *
 * @requires string, string
 *
 */
export function setLocalStorage (key, value) {
    localStorage.setItem(key, value);
}



/**
 * GET LOCAL STORAGE
 *
 * Will get local storage.
 *
 * @requires string
 *
 * @return string
 */
export function getLocalStorage (key) {
    return JSON.parse(localStorage.getItem(key));
}