import { readLines } from "../utils/read-lines";
import { getEachNextHistoryValue } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const values: number[] = getEachNextHistoryValue(lines);
    const sum: number = values.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')) // 114
console.log(solution('data/input.txt')) // 1882395907
