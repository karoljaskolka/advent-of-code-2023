export const NUMBERS: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
export const WRONG_VALUES: string[] = [...NUMBERS, '.'];

export const getMatrix = (lines: string[], width: number, height: number): { matrix: string[][]; width: number; height: number } => {
    const matrix: string[][] = [];
    const matrixWidth: number = width + 2;
    const matrixHeight: number = height + 2;

    matrix.push([...Array(matrixWidth).fill('.')])

    lines.forEach(line => {
        matrix.push(['.', ...line, '.']);
    })

    matrix.push([...Array(matrixWidth).fill('.')])

    return { matrix: matrix, width: matrixWidth, height: matrixHeight }
}

export const getMaskedMatrix = (width: number, height: number): string[][] => {
    const matrix: string[][] = [];

    for (let i = 0; i < height; i++) matrix.push([...Array(width).fill('.')])

    return matrix;
}

export const hasNeighbourhood = (matrix: string[][], i: number, j_start: number, j_end: number): boolean => {
    let result: boolean = false;
    const number_length: number = j_end - j_start + 1;

    for (let ix = -1; ix < 2 ; ix++) {
        for (let jx = -1; jx < number_length + 1 ; jx++) {
            const matrix_i: number = i + ix;
            const matrix_j: number = j_start + jx;
            if (matrix_i !== i || (matrix_i === i && matrix_j < j_start || matrix_j > j_end)) {
                if (!WRONG_VALUES.includes(matrix[matrix_i][matrix_j])) {
                    result = true;
                    break;
                }
            }
        } 
        if (result) break;
    }

    return result;
}

export const getValidNumbers = (matrix: string[][], width: number, height: number): number[] => {
    const validNumbersString: string[][] = [];

    for(let i = 1; i < height; i++) {
        let number: string[] = [];
        for(let j = 1; j < width; j++) {
            const value: string = matrix[i][j]
            if (NUMBERS.includes(value)) number.push(value);
            if (!NUMBERS.includes(value) && number.length) {
                const j_end: number = j - 1;
                const j_start: number = j - number.length;
                if (hasNeighbourhood(matrix, i, j_start, j_end)) validNumbersString.push(number);
                number = [];
            }
        }
    }

    const validNumbers: number[] = validNumbersString.map(numbersString => Number(numbersString.join('')));
    
    return validNumbers;
}

export const hasGearNeighbourhood = (matrix: string[][], i: number, j_start: number, j_end: number): boolean => {
    let result: boolean = false;
    const number_length: number = j_end - j_start + 1;

    for (let ix = -1; ix < 2 ; ix++) {
        for (let jx = -1; jx < number_length + 1 ; jx++) {
            const matrix_i: number = i + ix;
            const matrix_j: number = j_start + jx;
            if (matrix_i !== i || (matrix_i === i && matrix_j < j_start || matrix_j > j_end)) {
                if (matrix[matrix_i][matrix_j] === '*') {
                    result = true;
                    break;
                }
            }
        } 
        if (result) break;
    }

    return result;
}
