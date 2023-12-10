import { readLines } from "../utils/read-lines";
import { countWaysToWin, getAllRacesPossibleDistances, getRaceRecords, getRaceTimes } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const raceTimes: number[] = getRaceTimes(lines);
    const raceRecords: number[] = getRaceRecords(lines);
    const allRacesDistances: number[][] = getAllRacesPossibleDistances(raceTimes);
    const winWays: number[] = countWaysToWin(raceRecords, allRacesDistances)
    const multiply: number = winWays.reduce((acc, curr) => acc * curr, 1);

    return multiply;
}

console.log(solution('data/example.txt')) // 288
console.log(solution('data/input.txt')) // 741000
console.log(solution('data/input2.txt')) // 38220708
