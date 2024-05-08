const logString = (params: unknown): void => {

    if (typeof params === 'string') {
        console.log(`"${params}"`);

    } else {
      console.log('[ERROR]: Oops! Input is not a string.');

    }
}