import { readLines } from "../utils/read-lines";
import { CardType, HandData, compareHands, getHandsData } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const hands: string[][] = lines.map(line => line.split(' ')[0]).map(line => line.split(''));
    const bids: number[] = lines.map(line => Number(line.split(' ')[1]));
    const handsData: HandData[] = hands.map((hand, index) => getHandsData(hand as CardType[], bids[index]));
    const ranked: HandData[] = handsData.sort((a,b) => compareHands(a,b));
    const winnings: number[] = ranked.map((rank, index) => rank.bid * (index + 1));
    const sum: number = winnings.reduce((acc, curr) => acc + curr, 0);

    return sum;
}

console.log(solution('data/example.txt')) // 6440
console.log(solution('data/input.txt')) // 247823654
