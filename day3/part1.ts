import { readLines } from "../utils/read-lines";
import { getMatrix, getValidNumbers } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const { matrix, width, height } = getMatrix(lines, lines[0].length, lines.length);
    const validNumbers: number[] = getValidNumbers(matrix, width, height)    
    const sum: number = validNumbers.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')) // 4361
console.log(solution('data/input.txt')) // 536576
