const PG_TITLE_PREFIX = 'Cryptobase';

export const setDocumentTitle = (title: string): void => {
    document.title = [PG_TITLE_PREFIX, title].join(': ');
};
