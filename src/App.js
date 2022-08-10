import './App.css';
import Counter from './components/Counter';
import CounterActions from './components/CounterActions';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      {/* <Counter />
      <CounterActions /> */}
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
