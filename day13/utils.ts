export const getMatrixFromLines = (lines: string[]): string[][] => {
    let matrix: string[][] = [];

    lines.forEach(line => matrix.push(line.split('')));

    return matrix;
}

const matrixTransposition = (matrix: string[][]): string[][] => {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

export const tiltMatrixNorth = (matrix: string[][]): string[][] => {
    let matrixT: string[][] = matrixTransposition(matrix);

    matrixT = matrixT.map(row => tiltRowLeft(row));

    return matrixTransposition(matrixT);
}

export const tiltMatrixWest = (matrix: string[][]): string[][] => {
    return matrix.map(row => tiltRowLeft(row));
}


export const tiltMatrixSouth = (matrix: string[][]): string[][] => {
    let matrixT: string[][] = matrixTransposition(matrix);

    matrixT = matrixT.map(row => tiltRowRight(row));

    return matrixTransposition(matrixT);
}


export const tiltMatrixEast = (matrix: string[][]): string[][] => {
    return matrix.map(row => tiltRowRight(row));
}

const tiltRowLeft = (row: string[]): string[] => {
    let subs: number;

    do {
        subs = 0;
        for (let i = 0; i < row.length; i++) {
            if (row[i] === '.' && row[i + 1] === 'O') {
                const temp = row[i];
                row[i] = row[i + 1];
                row[i + 1] = temp;
                subs++;
            }
        }
    } while (subs > 0)

    return row;
}

const tiltRowRight = (row: string[]): string[] => {
    let subs: number;

    do {
        subs = 0;
        for (let i = 0; i < row.length; i++) {
            if (row[i] === 'O' && row[i + 1] === '.') {
                const temp = row[i];
                row[i] = row[i + 1];
                row[i + 1] = temp;
                subs++;
            }
        }
    } while (subs > 0)

    return row;
}


export const countLoad = (matrix: string[][]): number => {
    let load: number = 0;
    const height: number = matrix.length;
    const width: number = matrix[0].length;

    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (matrix[i][j] === 'O') load += height - i;
        }
    }

    return load;
}