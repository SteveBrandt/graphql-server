import {user} from './FakeUser.mjs'

// A map of functions which return data for the schema.
const resolvers = {
    Query: {
        teasers: () => [{title: 'title', body: 'body', link: 'link'}],
        hello: () => 'Hello world!',
        content: () => {
            return {
                title: 'title',
                body: 'body',
                relatedItems: [{
                    title: 'title',
                    body: 'body',
                    link: 'link'
                }]
            }
        },
        allNames: () => {
            return user;
        }
    },
    Mutation:{
        createNames: (parent, args, context, info) => {
            const newUser = {id: user.length, name: args.name};
            user.push(newUser);
            return newUser;
        },
        deleteNames: (parent, args, context, info) => {
            user.filter(item => (args.id !== item.id));
            return {id: args.id, name:'deleted'};
        }
    }
};

export { resolvers }
