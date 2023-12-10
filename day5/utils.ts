export const mapStringsToNestedNumbers = (strings: string[]): number[][] => {
    return strings.map(string => string.split(' ').map(s => Number(s)));
}

export const findMappedValue = (seed: number, maps: number[][]): number => {
    let value: number | null = null;

    maps.forEach(map => {
        if (isWithinMapRange(seed, map)) value = getCorrespondingValue(seed, map);
    })

    return value === null ? seed : value;
}

export const isWithinMapRange = (seed: number, map: number[]): boolean => {
    const range: number = map[2];

    const source_start: number = map[1];
    const source_end: number = source_start + range - 1;
    
    if (seed < source_start || seed > source_end) return false;

    return true;
}

export const getCorrespondingValue = (seed: number, map: number[]): number => {
    const source_start: number = map[1];
    const destination_start: number = map[0];
    const difference: number = source_start - destination_start;

    return seed - difference;
}

export const findSeedLocation = (seed: number, maps: number[][][]): number => {
    let mappedValue: number = seed;

    for(let i = 0; i < maps.length; i++)
        mappedValue = findMappedValue(mappedValue, maps[i]);

    return mappedValue;
}

export const findsSeedsLocation = (seeds: number[], maps: number[][][]): number[] => {
    return seeds.map(seed => findSeedLocation(seed, maps));
}

export const findSeedsRangeLocations = (seedsRange: number[], maps: number[][][]): number[] => {
    let lowestSeedLocation: number | null;
    const seedsRangeLocations: number[] = [];

    for (let i = 0; i < (seedsRange.length / 2); i++) {
        lowestSeedLocation = null;

        const seedStart: number = seedsRange[i * 2];
        const seedRange: number = seedsRange[i * 2 + 1];
        const seedEnd : number= seedStart + seedRange - 1;

        for(let s = seedStart; s <= seedEnd; s++) {
            const location: number = findSeedLocation(s, maps);
            if (lowestSeedLocation === null || location < lowestSeedLocation) lowestSeedLocation = location;
        };

        seedsRangeLocations.push(lowestSeedLocation as number);
    }

    return seedsRangeLocations;
}

export const getLowestLocation = (locations: number[]): number => {
    let lowest: number = locations[0];

    for(let i = 1; i < locations.length; i++) {
        if (locations[i] < lowest) lowest = locations[i];
    }

    return lowest;
}