import Counter from "./components/Counter";
import TaskForm from "./components/TaskForm";
import TaskTable from "./components/TaskTable";
import Users from "./components/Users";

const App = () => {
  return (
    <div className="p-5 md:p-10 max-w-7xl mx-auto bg-zinc-100 min-h-screen">
      <Users />
    </div>
  );
};

export default App;
