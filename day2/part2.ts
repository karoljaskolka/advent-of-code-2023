import { readLines } from "../utils/read-lines";
import { Colors, Game, mapLineToGame } from "./utils";

const getGamePower = (rounds: Colors[]): number => {
    let blueMax: number = 0;
    let redMax: number = 0;
    let greenMax: number = 0;

    rounds.forEach(round => {
        if (round.blue > blueMax) blueMax = round.blue;
        if (round.red > redMax) redMax = round.red;
        if (round.green > greenMax) greenMax = round.green;
    })

    return blueMax * redMax * greenMax;
}

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const games: Game[] = lines.map(line => mapLineToGame(line));
    const gamePowers: number[] = games.map(game => getGamePower(game.rounds));
    const sum: number = gamePowers.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt'), solution('data/input.txt')) // 2286 54699
