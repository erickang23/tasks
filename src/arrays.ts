/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length >= 2) {
        const bookEnd = [numbers[0], numbers[numbers.length - 1]];
        return bookEnd;
    } else if (numbers.length === 1) {
        const bookEnd = [numbers[0], numbers[0]];
        return bookEnd;
    } else {
        return [];
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const triple = numbers.map((num: number): number => num * 3);
    return triple;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const ints = numbers.map((str: string): number =>
        isNaN(parseInt(str)) ? 0 : parseInt(str)
    );
    return ints;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const ints = amounts.map(
        (str: string): number =>
            str.charAt(0) === "$"
                ? isNaN(parseInt(str.slice(1)))
                    ? 0
                    : parseInt(str.slice(1))
                : isNaN(parseInt(str)) // eslint-disable-next-line prettier/prettier, indent
                ? 0 // eslint-disable-next-line prettier/prettier, indent
                : parseInt(str) // eslint-disable-next-line prettier/prettier
    );
    return ints;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const noQs = messages.filter(
        (str: string): boolean => str.charAt(str.length - 1) !== "?"
    );
    const shout = noQs.map((str: string): string =>
        str.charAt(str.length - 1) === "!" ? str.toUpperCase() : str
    );
    return shout;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const short = words.filter((str: string): boolean => str.length < 4);
    return short.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    if (colors.length === 0) {
        return true;
    } else {
        const isRGB = colors.every(
            (col: string): boolean =>
                col === "red" || col === "blue" || col === "green"
        );
        return isRGB;
    }
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends
        .reduce((total: number, num: number) => total + num, 0)
        .toString();
    const strAddends = addends.map((num1: number): string => num1.toString());
    const right = strAddends.join("+");
    const left = sum.concat("=");
    if (right[0] === undefined) {
        return left.concat("0");
    }
    return left.concat(right);
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const index = values.findIndex((num: number): boolean => num <= 0);
    if (index !== -1) {
        const left = values.slice(0, index);
        const right = values.slice(index + 1);
        const sum = left.reduce(
            (total: number, num1: number) => total + num1,
            0
        );
        const newValues = [...left, values[index], sum, ...right];
        return newValues;
    } else {
        const sum = values.reduce(
            (total: number, num1: number) => total + num1,
            0
        );
        const newValues = [...values, sum];
        return newValues;
    }
}
