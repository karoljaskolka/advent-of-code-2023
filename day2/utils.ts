export interface Colors {
    red: number;
    green: number;
    blue: number;
}

export interface Game {
    id: number;
    rounds: Colors[];
}

export const BAG: Colors = { red: 12, green: 13, blue: 14 };

export const mapLineToGame = (line: string): Game  => {
    const game: Game = { id: 0, rounds: [] } as Game;

    const gameLine = line.split(':')[0];
    const rounds = line.split(':')[1].split(';').map(line => line.split(','));

    game.id = Number(gameLine.replace(/\D+/g, ''));

    rounds.forEach((round, roundIndex) => {

        const digits = round.map(r => r.replace(/\D+/g, ''))
        const colors = round.map(r => r.replace(/[0-9]/g, '').replace(/\s/g, ''))

        game.rounds.push({ red: 0, green: 0, blue: 0 });

        colors.forEach((color, index) => {
            switch(color) {
                case 'blue':
                    game.rounds[roundIndex].blue = Number(digits[index]);
                    return;
                case 'green':
                    game.rounds[roundIndex].green = Number(digits[index]);
                    return;
                case 'red':
                    game.rounds[roundIndex].red = Number(digits[index]);
                    return;
            }
        })
    })

    return game;
}
