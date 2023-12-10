import { readLines } from "../utils/read-lines";
import { END_NODE_ROOT, Instruction, START_NODE_ROOT, getInstruction, getNodes, getNumberOfSteps, Node } from "./utils";

const solution = (fileName: string): number => {
    const lines: string[] = readLines(fileName);
    const instruction: Instruction = getInstruction(lines);
    const nodes: Node[] = getNodes(lines);

    return getNumberOfSteps(START_NODE_ROOT, END_NODE_ROOT, instruction, nodes);
}

console.log(solution('data/example1.txt')) // 2
console.log(solution('data/example2.txt')) // 6
console.log(solution('data/input.txt')) // 19099
