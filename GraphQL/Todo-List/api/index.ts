const { ApolloServer, gql } = require("apollo-server");
const { v4 } = require("uuid");

const todos = [
  {
    id: "1",
    desc: "Write Code",
    completed: false,
  },
  {
    id: "2",
    desc: "Read Code",
    completed: true,
  },
];

const typeDefs = gql`
  type Todo {
    id: ID!
    desc: String!
    completed: Boolean!
  }

  type Query {
    todos: [Todo!]!
  }

  type Mutation {
    addTodo(desc: String!): Todo
    toggleTodoCompleted(id: ID!): Todo
    deleteTodo(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    todos: () => todos,
  },
  Mutation: {
    addTodo: (_, { desc }) => {
      const newTodo = { id: v4(), desc, completed: false };
      todos.push(newTodo);
      return newTodo;
    },
    toggleTodoCompleted: (_, { id }) => {
      const todo = todos.find((todo) => todo.id == id);
      if (!todo) return null;
      todo.completed = !todo.completed;
      return todo;
    },
    deleteTodo: (_, { id }) => {
      const index = todos.findIndex((todo) => todo.id == id);
      if (index === -1) return false;
      todos.splice(index, 1);
      return true;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
