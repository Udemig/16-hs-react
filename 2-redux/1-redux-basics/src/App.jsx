import { useEffect } from "react";
import Form from "./components/Form";
import List from "./components/List";
import axios from "axios";
import { useDispatch } from "react-redux";
import ACTION_TYPES from "./redux/actions/action-types";
import { getTodos } from "./redux/actions/todo-actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, []);

  return (
    <div className="h-screen container mx-auto p-10">
      <h1 className="text-2xl text-center font-bold">
        <span className="text-yellow-600">Redux</span> CRUD
      </h1>

      <Form />

      <List />
    </div>
  );
};

export default App;
