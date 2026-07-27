import Form from "./components/Form";
import List from "./components/List";

const App = () => {
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
