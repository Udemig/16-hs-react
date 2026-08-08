import { useSelector } from "react-redux";
import Card from "./Card";

const List = () => {
  // store'da tutulan verilere abone olma
  const storeState = useSelector((store) => store.todoReducer);

  return (
    <div className="grid gap-10 mt-10">
      {storeState.todos.map((todo) => (
        <Card key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
