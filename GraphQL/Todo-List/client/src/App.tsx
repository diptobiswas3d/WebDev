import { ApolloProvider } from "@apollo/client";
import client from "./apollo-client";
import TodoList from "./TodoList";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="flex flex-col items-center gap-8 pt-8 pb-32 bg-green-200">
        <div className="text-2xl">Todo List GraphQL</div>
        <TodoList />
      </div>
    </ApolloProvider>
  );
}

export default App;
