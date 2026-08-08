import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/todo-actions";

const Card = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <div
      className={`border rounded p-4 shadow-lg ${todo.isDone ? "border-green-600" : "border-zinc-700"}`}
    >
      <div className="flex flex-col gap-2">
        <h3 className={`text-xl font-bold ${todo.isDone && "line-through"}`}>{todo.text}</h3>

        <h6>{new Date(todo.createdAt).toLocaleString()}</h6>
      </div>

      <div className="flex gap-4 mt-4">
        <button
          className="btn bg-yellow-500"
          onClick={() => dispatch(toggleTodo({ id: todo.id, isDone: !todo.isDone }))}
        >
          {todo.isDone ? "Geri Al" : "Tamamla"}
        </button>
        <button className="btn bg-red-500" onClick={() => dispatch(deleteTodo(todo.id))}>
          Sil
        </button>
      </div>
    </div>
  );
};

export default Card;
