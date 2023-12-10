export const getWinningNumbers = (lines: string[]): number[][] => {
    const winningNumbersString: string[][] = [
        ...lines.map(line => ((line.split(':')[1]).split('|')[0]).split(' ').filter(n => n))
    ];

    return winningNumbersString.map(numbers => numbers.map(n => Number(n)));
}

export const getOwnedNumbers = (lines: string[]): number[][] => {
    const ownedNumbersString: string[][] = [
        ...lines.map(line => ((line.split(':')[1]).split('|')[1]).split(' ').filter(n => n))
    ];

    return ownedNumbersString.map(numbers => numbers.map(n => Number(n)));
}

export const getCardOccurrences = (winningNumbers: number[], ownedNumbers: number[]): number => {
    let result: number = 0;

    winningNumbers.forEach(number => {
        if (ownedNumbers.includes(number)) result++;
    })

    return result;
}

export const getScore = (occurrences: number): number => {
    let score: number = 1;
    if (occurrences === 0) return 0;
    if (occurrences === 1) return 1;
    for (let i = 1; i < occurrences; i++) score *= 2;
    return score;
}

export const getScores = (winningNumbers: number[][], ownedNumbers: number[][]): number[] => {
    const scores: number[] = [];

    winningNumbers.forEach((wNumbers, index) => {
        const occurrences: number = getCardOccurrences(wNumbers, ownedNumbers[index]);
        const score: number = getScore(occurrences);
        scores.push(score);
    })

    return scores;
}

export const getAllOccurances = (winningNumbers: number[][], ownedNumbers: number[][]): number[] => {
    const allOccurances: number[] = [];

    winningNumbers.forEach((wNumbers, index) => {
        const occurrences: number = getCardOccurrences(wNumbers, ownedNumbers[index]);
        allOccurances.push(occurrences);
    })

    return allOccurances;
}
