import { readLines } from "../utils/read-lines";
import { digits } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);

    const maskedLines: string[] = lines.map(line => {
        let maskedLine: string = Array(line.length).fill('*').join('');

        digits.forEach(mapper => {
            const count: number = (line.match(new RegExp(mapper.key, "g")) || []).length;
            let index: number = -1;

            for(let i = 0; i < count; i++) {
                index = line.indexOf(mapper.key, index + 1);
                maskedLine = maskedLine.substring(0, index) + mapper.value + maskedLine.substring(index + 1);
            }
        })

        return maskedLine;
    })

    const lineDigits: string[] = maskedLines.map(line => line.replace(/\D+/g, ''))

    const pairs: number[] = lineDigits.map((digits: string): number => {
        const first: string = digits[0];
        const last: string = digits[digits.length - 1];
        const pair: string = first + last;
    
        return Number(pair);
    })

    const sum: number = pairs.reduce((acc, curr) => acc + curr, 0)

    return sum;
}

console.log(solution('data/example2.txt'), solution('data/input.txt')) // 281 54078
