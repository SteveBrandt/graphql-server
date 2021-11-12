

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        teasers() {
            return [{title:'title', body:'body', link: 'link'}]
        },
        hello: () => 'Hello world!'
    }
};

module.exports = { resolvers }
