type RepeatStringWithInput = (
    inputedString: string,
    timesToRepeat: number
  ) => string;

  const repeatString: RepeatStringWithInput = (inputedString, timesToRepeat) => {
    let initialOutput: string = inputedString;

    for (let i: number = 0; i < timesToRepeat - 1; i++) {
      initialOutput += inputedString;
    }
    return initialOutput;
  };

