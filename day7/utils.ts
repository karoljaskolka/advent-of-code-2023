export enum HandType {
    HIGH = 1,
    ONE_PAIR = 2,
    TWO_PAIRS = 3,
    THREE = 4,
    FULL = 5,
    FOUR = 6,
    FIVE = 7,
}

export type CardType  = 'A' | 'K' | 'Q' | 'J' | 'T' | '9' | '8' | '7' | '6' | '5' | '4' | '3' | '2'; 

export interface HandData {
    cards: CardType[];
    handType: HandType;
    bid: number;
}

export const CARD_ORDER = ['A','K','Q','J','T','9','8','7','6','5','4','3','2'];

export type Instances = Record<CardType, number>;

export const INSTANCES: Instances = {
    'A': 0,
    'K': 0,
    'Q': 0,
    'J': 0,
    'T': 0,
    '9': 0,
    '8': 0,
    '7': 0,
    '6': 0,
    '5': 0,
    '4': 0,
    '3': 0,
    '2': 0
}

const hasTwoPairs = (instances: Instances) : boolean => {
    const numbers: number[] = Object.values(instances);

    const firstPairIndex: number = numbers.indexOf(2);

    if (firstPairIndex === -1) return false;

    numbers.splice(firstPairIndex, 1);
    const secondPairIndex: number = numbers.indexOf(2);

    if (secondPairIndex === -1) return false;

    return true;
}

const initInstances = (cards: CardType[]): Instances => {
    const instances: Instances = { ...INSTANCES };

    for (let i = 0; i < cards.length; i++ ) instances[cards[i]] += 1;

    return instances;
}

const getHandType = (cards: CardType[]): HandType => {
    const instances: Instances = initInstances(cards);

    if (Object.values(instances).includes(5)) return HandType.FIVE;
    if (Object.values(instances).includes(4)) return HandType.FOUR;
    if (Object.values(instances).includes(3) && Object.values(instances).includes(2)) return HandType.FULL;
    if (Object.values(instances).includes(3)) return HandType.THREE;
    if (hasTwoPairs(instances)) return HandType.TWO_PAIRS;
    if (Object.values(instances).includes(2)) return HandType.ONE_PAIR;

    return HandType.HIGH;
}

export const getHandsData = (cards: CardType[], bid: number): HandData => {
    return {
        cards: cards,
        handType: getHandType(cards),
        bid: bid,
    }
}

export const compareHands = (a: HandData, b: HandData) => {
    const handTypeA: HandType = a.handType;
    const handTypeB: HandType = b.handType;
    
    if (handTypeA < handTypeB) return -1;
    if (handTypeA > handTypeB) return 1;
    
    let returnValue: number | null = null;

    for (let i = 0; i < 5; i++) {
        const orderValueA = CARD_ORDER.indexOf(a.cards[i]);
        const orderValueB = CARD_ORDER.indexOf(b.cards[i]);
        if (orderValueA > orderValueB) returnValue = -1;
        if (orderValueA < orderValueB) returnValue = 1;
        if (returnValue !== null) break;
    }

    return returnValue !== null ? returnValue : 1;
}
