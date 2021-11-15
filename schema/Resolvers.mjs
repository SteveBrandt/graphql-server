

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        teasers: () => [{title:'title', body:'body', link: 'link'}],
        hello: () => 'Hello world!',
        content: () => {
           return {
               title:'title',
               body:'body',
               relatedItems: [{
                   title:'title',
                   body:'body',
                   link: 'link'}]}
        }
    }
};

export { resolvers }
