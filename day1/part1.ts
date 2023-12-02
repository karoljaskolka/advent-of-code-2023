import { readLines } from "../utils/read-lines";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const lineDigits: string[] = lines.map(line => line.replace(/\D+/g, ''));

    const pairs: number[] = lineDigits.map((digits: string): number => {
        const first: string = digits[0];
        const last: string = digits[digits.length - 1];
        const pair: string = first + last;
    
        return Number(pair);
    })

    const sum: number = pairs.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt'), solution('data/input.txt')) // 142 54601
