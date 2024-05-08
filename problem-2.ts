type FindLargestNumberFromArray = (numbers: number[]) => number;

const findLargestNumber: FindLargestNumberFromArray = (numbers) => {

    let largestNum = numbers[0];

    for (let i: number = 1; i < numbers.length; i++) {

        if (numbers[i] > largestNum) {
            largestNum = numbers[i]
        }
    }

    return largestNum
};


