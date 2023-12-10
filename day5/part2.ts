import { readLines } from "../utils/read-lines";
import { findSeedsRangeLocations, getLowestLocation, mapStringsToNestedNumbers } from "./utils";

const solution = (fileName: string): number => {
    const seedsString: string[] = readLines(fileName + 'seeds.txt');
    const mapsString: string[][] = [];

    for (let i = 1; i <= 7; i++) mapsString.push([...readLines(fileName + `map_${i}.txt`)]);

    const seeds: number[] = mapStringsToNestedNumbers(seedsString)[0];
    const maps: number[][][] = mapsString.map(map => mapStringsToNestedNumbers(map));
    const locations: number[] = findSeedsRangeLocations(seeds, maps);

    return getLowestLocation(locations);
}

console.log(solution('data/example_')) // 46
console.log(solution('data/input_')) // 69323688
