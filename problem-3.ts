type FilterNumbers = (numbers: number[]) => number[];

const filterEvenNumbers: FilterNumbers = (numbers) => {

    const evenNumbers: number[] = numbers.filter(number => number % 2 === 0);

    return evenNumbers;

}