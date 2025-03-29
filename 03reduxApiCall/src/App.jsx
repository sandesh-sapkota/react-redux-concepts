import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "./redux/slice/Todo";

function App() {
  const dispatch = useDispatch();

  const handleFetchTodos = () => {
    dispatch(fetchTodos());
  };

  const state = useSelector((state) => state);

  console.log("state", state);

  if (state.todo.isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      <button onClick={handleFetchTodos}>Fetch Todos</button>
      {state.todo.data && state.todo.data.length>0 ? (
        state.todo.data.map((e) => (
        <li key={e.id}>{e.title}</li>)))
      : ( 
        <p>No todos available</p>
      )}
    </div>
  );
}

export default App;
