const initialState = {
    posts: [
        {
            id: '1',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Doe',
            category: 'Sport'
        },
        {
            id: '2',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'John Lennon',
            category: 'News'
        },
        {
            id: '3',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'George Harrison',
            category: 'Music'
        },
        {
            id: '4',
            title: 'Article title',
            shortDescription: 'Short description of the article...',
            content: 'Main content of the article',
            publishedDate: new Date('02-02-2022'),
            author: 'Ringo Starr',
            category: 'Music'
        },
    ],
    categories: ["Sport","News","Music"],  
};
    
export default initialState;
