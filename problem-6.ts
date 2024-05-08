interface Book {
    title: string;
    author: string;
    publishedYear: number;
};

const isRecentBook = (book: Book): boolean => {
    const currentYear = new Date().getFullYear();

    return currentYear - book.publishedYear <= 5;
};

