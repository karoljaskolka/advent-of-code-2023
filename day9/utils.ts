export const getEachNextHistoryValue = (lines: string[]): number[] => {
    return lines.map(line => getNextHistoryValue(line));
}

export const getEachPreviousHistoryValue = (lines: string[]): number[] => {
    return lines.map(line => getPreviousHistoryValue(line));
}

const getNextHistoryValue = (line: string): number => {
    const history: number[] = line.split(' ').map(n => Number(n));
    const historyWithDifferences: number[][] = getHistoryWithDifferences(history);
    const historyWithDifferencesAndZeros: number[][] = pushZeros(historyWithDifferences);
    const historyWithDifferencesAndNextValues: number[][] = calcNextValues(historyWithDifferencesAndZeros);
    const historyLength: number = historyWithDifferencesAndNextValues[0].length;

    return historyWithDifferencesAndNextValues[0][historyLength - 1];
}

const getPreviousHistoryValue = (line: string): number => {
    const history: number[] = line.split(' ').map(n => Number(n));
    const historyWithDifferences: number[][] = getHistoryWithDifferences(history);
    const historyWithDifferencesAndZeros: number[][] = shiftZeros(historyWithDifferences);
    const historyWithDifferencesAndPreviousValues: number[][] = calcPreviousValues(historyWithDifferencesAndZeros);

    return historyWithDifferencesAndPreviousValues[0][0];
}

const getHistoryWithDifferences = (history: number[]): number[][] => {
    const numbers: number[][] = [[...history]];

    while (!isZerosOnly(numbers[numbers.length - 1])) {
        const differences = getDifferences(numbers[numbers.length - 1]);
        numbers.push(differences);
    }

    return numbers;
}

const getDifferences = (history: number[]): number[] => {
    const differences: number[] = [];

    for (let i = 0; i < history.length - 1; i++) {
        differences.push(history[i + 1] - history[i]);
    }

    return differences;
}

const isZerosOnly = (differences: number[]): boolean => {
    if (!differences.length) return false;

    return differences.every(d => d === 0);
}

const pushZeros = (numbers: number[][]): number[][] => {
    return numbers.map(n => [...n, 0]);
}

const shiftZeros = (numbers: number[][]): number[][] => {
    return numbers.map(n => [0, ...n]);
}

const calcNextValues = (numbers: number[][]): number[][] => {
    for (let i = numbers.length - 2; i >= 0; i--) {
        const left: number = numbers[i][numbers[i].length - 2];
        const below: number = numbers[i + 1][numbers[i + 1].length - 1];
    
        numbers[i][numbers[i].length - 1] = left + below;
    }
    return numbers;
}

const calcPreviousValues = (numbers: number[][]): number[][] => {
    for (let i = numbers.length - 2; i >= 0; i--) {
        const right: number = numbers[i][1];
        const below: number = numbers[i + 1][0];
    
        numbers[i][0] = right - below;
    }
    return numbers;
}
