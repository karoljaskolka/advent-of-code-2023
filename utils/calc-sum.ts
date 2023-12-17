export const calcSum = (numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
