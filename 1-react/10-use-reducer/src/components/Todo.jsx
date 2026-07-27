import { useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";

const Todo = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  // form gönderilince
  const handleSubmit = (e) => {
    // yenilemeyi engelle
    e.preventDefault();

    // inputtaki yazı
    const text = e.target[0].value.trim();

    // reducer'a haber ver
    dispatch({ type: "EKLE", payload: text });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <div>
      <h1>TODO</h1>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="todo yazınız..." />
        <button>Gönder</button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.text}</span>

            <button onClick={() => dispatch({ type: "SİL", payload: todo.id })}>sil</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
