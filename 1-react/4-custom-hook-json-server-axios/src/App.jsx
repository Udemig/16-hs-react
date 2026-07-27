import { use, useEffect, useState } from "react";
import TodoForm from "./todo-components/TodoForm";
import ListItem from "./todo-components/ListItem";
import api from "./api";

const App = () => {
  // api yanıtının state'i
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [todos, setTodos] = useState(null);

  // bileşen ekrana basılınca api'dan todo verilerini al
  useEffect(() => {
    // api parametrelerini tanımla
    const params = { _sort: "date", _order: "desc" };

    api
      .get("/todos", { params })
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err.message))
      .finally(() => setIsLoading(false));
  }, []);

  // yeniTodo'yu state'e ekleyen fonksiyon
  const addTodo = (newTodo) => {
    setTodos([newTodo, ...todos]);
  };

  // id'si bilinen todo'yu state'den kaldıran fonksiyon
  const deleteTodo = (deleteId) => {
    setTodos(todos.filter((todo) => todo.id !== deleteId));
  };

  return (
    <div className="container">
      <header>
        <h1>TODO APP</h1>
        <p>Pratik için basit CRUD uygulaması</p>
      </header>

      <TodoForm addTodo={addTodo} />

      <div className="list">
        {isLoading ? (
          <h1>Yükleniyor..</h1>
        ) : error ? (
          <h1>Hata!</h1>
        ) : (
          todos.map((todo) => <ListItem key={todo.id} todo={todo} deleteTodo={deleteTodo} />)
        )}
      </div>
    </div>
  );
};

export default App;
