export const START_NODE_ROOT = 'AAA';
export const END_NODE_ROOT = 'ZZZ';

export type Move = 'L' | 'R';
export type Instruction = Move[];

export interface Node {
    root: string;
    left: string;
    right: string;
}

export const getInstruction = (lines: string[]): Instruction => {
    return lines[0].split('') as Instruction;
}

export const getNodes = (lines: string[]): Node[] => {
    const nodes: Node[] = [];

    for (let i = 2; i < lines.length; i++) {
        const root = lines[i].split('=')[0].trim();
        const left = lines[i].split('=')[1].split(',')[0].replace('(', '').trim();
        const right = lines[i].split('=')[1].split(',')[1].replace(')', '').trim();
        nodes.push({ root, left, right })
    }

    return nodes;
}

export const getNumberOfSteps = (startNodeRoot: string, endNodeRoot: string, instruction: Instruction, nodes: Node[]): number => {
    if (startNodeRoot === endNodeRoot) return 0;

    let steps: number = 0;
    let found: boolean = false;
    let currentNode: Node = nodes.find(node => node.root === startNodeRoot)!;

    while (!found) {
        const move: Move = instruction[steps % instruction.length];
        if (move === 'L') currentNode = nodes.find(node => node.root === currentNode?.left)!;
        if (move === 'R') currentNode = nodes.find(node => node.root === currentNode?.right)!;
        if (currentNode?.root === endNodeRoot) found = true;
        steps++;
    }

    return steps;
}
