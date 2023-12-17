export const getSequenceSteps = (lines: string): string[] => {
    return lines.split(',');
}

export const getHash = (text: string): number => {
    let hash: number = 0;

    for(let i = 0; i < text.length; i++) {
        hash = ((hash + text.charCodeAt(i)) * 17) % 256;
    }

    return hash;
}

export const getHashes = (steps: string[]): number[] => {
    return steps.map(step => getHash(step));
}
