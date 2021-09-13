import './styles/App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <div className="todo-list__headline">todos</div>
      <TodoList />
    </div>
  );
}

export default App;
