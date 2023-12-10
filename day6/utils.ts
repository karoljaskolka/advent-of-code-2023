export const getRaceTimes = (lines: string[]): number[] => {
    return lines[0].split(':')[1].split(' ').filter(n => n).map(n => Number(n));
}

export const getRaceRecords = (lines: string[]): number[] => {
    return lines[1].split(':')[1].split(' ').filter(n => n).map(n => Number(n));
}

export const getRacePossibleDistances = (raceTime: number): number[] => {
    const distances: number[] = [];

    Array.from(Array(raceTime - 1).keys()).map(time => time + 1).forEach(holdTime => {
        const speed: number = holdTime;
        const distance: number = speed * (raceTime - holdTime);
        distances.push(distance);
    })

    return distances;
}

export const getAllRacesPossibleDistances = (raceTimes: number[]): number[][] => {
    const allRacesDistances: number[][] = []

    raceTimes.forEach(raceTime => {
        allRacesDistances.push(getRacePossibleDistances(raceTime))
    });

    return allRacesDistances;
}

export const countWaysToWin = (raceRecords: number[], allRacesDistances: number[][]): number[] => {
    const waysToWin: number[] = [];

    raceRecords.forEach((record, index) => {
        const distances: number[] = allRacesDistances[index];
        let wins: number = 0;
        distances.forEach(distance => {
            if (distance > record) wins++;
        })
        waysToWin.push(wins);
    })

    return waysToWin;
}
