export const getUniverse = (lines: string[]): string[][] => {
    const universe: string[][] = [];

    lines.forEach((line) => { universe.push(line.split('')) })
    
    return universe;
}

export const expandUniverse = (universe: string[][]): string[][] => {
    const height: number = universe.length;
    const width: number = universe[0].length;
    const rows: number[] = getEmptyRows(universe);
    const columns: number[] = getEmptyColumns(universe);

    rows.forEach((row, index) => {
        universe.splice(row + index, 0, Array(width).fill('.'))
    })

    const universe_transposition: string[][] = universe[0].map((_, colIndex) => universe.map(row => row[colIndex]));

    columns.forEach((column, index) => {
        universe_transposition.splice(column + index, 0, Array(height + rows.length).fill('.'))
    })
    
    universe = universe_transposition[0].map((_, colIndex) => universe_transposition.map(row => row[colIndex]));

    return universe;
}

const getEmptyRows = (universe: string[][]): number[] => {
    const rows: number[] = [];
    const height: number = universe.length;

    for(let i = 0; i < height; i++) if (universe[i].every(item => item === '.')) rows.push(i);

    return rows;
}

const getEmptyColumns = (universe: string[][]): number[] => {
    const columns: number[] = [];
    const height: number = universe.length;
    const width: number = universe[0].length;

    for(let j = 0; j < width; j++) {
        let emptyColumn: boolean = true;
        for(let i = 0; i < height; i++) if (universe[i][j] !== '.') emptyColumn = false;
        if (emptyColumn) columns.push(j);
    }

    return columns;
}

export const getGalaxyCoords = (universe: string[][]): number[][] => {
    const coords: number[][] = [];
    const height: number = universe.length;
    const width: number = universe[0].length;

    for(let i = 0; i < height; i++) {
        for(let j = 0; j < width; j++) {
            if (universe[i][j] === '#') coords.push([i,j])
        }
    }

    return coords;
}

export const getGalaxyPairsDistances = (galaxyCoords: number[][]): number[] => {
    const distances: number[] = [];
    const length: number = galaxyCoords.length;

    for (let i = 0; i < length ; i++) {
        for (let j = 0; j < length; j++) {
            if (i < j) distances.push(getDistance(galaxyCoords[i], galaxyCoords[j]));
        }
    }

    return distances;
}

const getDistance = (a: number[], b: number[]): number => {
    const distanceX: number = Math.abs(a[1] - b[1]);
    const distanceY: number = Math.abs(a[0] - b[0]);
    return distanceX + distanceY;
}