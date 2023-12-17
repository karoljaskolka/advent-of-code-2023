import { calcSum } from "../utils/calc-sum";
import { readLines } from "../utils/read-lines";
import { getHash, getHashes, getSequenceSteps } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const steps: string[] = getSequenceSteps(lines[0]);
    const hashes: number[] = getHashes(steps);

    return calcSum(hashes);
}

console.log(getHash('HASH')); // 52
console.log(solution('data/example.txt')) // 1320
console.log(solution('data/input.txt')) // 510388
