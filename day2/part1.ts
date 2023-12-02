import { readLines } from "../utils/read-lines";
import { BAG, Colors, Game, mapLineToGame } from "./utils";

const isGamePossible = (rounds: Colors[], bag: Colors): boolean => {
    let result = true;

    for (let i = 0; i < rounds.length; i++) {
        if (rounds[i].red > bag.red || rounds[i].blue > bag.blue || rounds[i].green > bag.green) {
            result = false;
            break;
        }
    }

    return result;
}

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const games: Game[] = lines.map(line => mapLineToGame(line));
    const possibleIds: number[] = games.map(game => isGamePossible(game.rounds, BAG) ? game.id : 0).filter(id => id);
    const sum: number = possibleIds.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt'), solution('data/input.txt')) // 8 2593
