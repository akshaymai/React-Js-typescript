import NewTodo from './components/newTodo';
import Todos from './components/todos';
import TodosContextProvider from './store/todos-context';

function App() {
  return (
    <TodosContextProvider>
      <NewTodo />
      <Todos />
    </TodosContextProvider>
  );
}

export default App;