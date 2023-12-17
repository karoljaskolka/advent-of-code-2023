import { readLines } from "../utils/read-lines";
import { getMatrixFromLines, tiltMatrixNorth, countLoad } from './utils';

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const matrix: string[][] = getMatrixFromLines(lines);
    const titledMatrix: string[][] = tiltMatrixNorth(matrix);

    return countLoad(titledMatrix);
}

console.log(solution('data/example.txt')) // 136
console.log(solution('data/input.txt')) // 110677
