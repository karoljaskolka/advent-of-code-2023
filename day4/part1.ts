import { readLines } from "../utils/read-lines";
import { getOwnedNumbers, getScores, getWinningNumbers } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const winningNumbers: number[][] = getWinningNumbers(lines);
    const ownedNumbers: number[][] = getOwnedNumbers(lines);
    const sum: number = getScores(winningNumbers, ownedNumbers).reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')) // 13
console.log(solution('data/input.txt')) // 17803
