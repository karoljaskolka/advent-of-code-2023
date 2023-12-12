import { readLines } from "../utils/read-lines";
import { expandUniverse, getGalaxyCoords, getGalaxyPairsDistances, getUniverse } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const universe: string[][] = getUniverse(lines);
    const expandedUniverse: string[][] = expandUniverse(universe);
    const galaxyCoords: number[][] = getGalaxyCoords(expandedUniverse);
    const distances: number[] = getGalaxyPairsDistances(galaxyCoords);
    const sum: number = distances.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')) // 374
console.log(solution('data/input.txt')) // 10033566
