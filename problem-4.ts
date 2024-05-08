const reverseArray = <T>(incomingArray: T[]): T[] => {
    const reversed: T[] = [];

    for (let i = incomingArray.length - 1; i >= 0; i--) {
        reversed.push(incomingArray[i]);
    };

    return reversed;
};
