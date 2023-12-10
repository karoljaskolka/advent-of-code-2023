import { readLines } from "../utils/read-lines";
import { getAllOccurances, getOwnedNumbers, getWinningNumbers } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const winningNumbers: number[][] = getWinningNumbers(lines);
    const ownedNumbers: number[][] = getOwnedNumbers(lines);
    const occurances: number[] = getAllOccurances(winningNumbers, ownedNumbers);
    const instances: number[] = [...Array(occurances.length).fill(1)];

    for (let i = 0 ; i < occurances.length; i++) {
        for(let j = 0; j < occurances[i]; j++) {
            instances[i + j + 1] += 1 + (instances[i] - 1); // 1 + number of copies
        }
    }

    const sum: number = instances.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')); // 30
console.log(solution('data/input.txt')); // 5554894
