import { readLines } from "../utils/read-lines";
import { getEachPreviousHistoryValue } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const values: number[] = getEachPreviousHistoryValue(lines);
    const sum: number = values.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')) // 2
console.log(solution('data/input.txt')) // 1005
