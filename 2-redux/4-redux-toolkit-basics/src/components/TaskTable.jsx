import { useSelector } from "react-redux";
import TableRow from "./TableRow";

const TaskTable = () => {
  const { tasks } = useSelector((store) => store.crudReducer);

  return (
    <div className="relative overflow-x-auto bg-white shadow-xs rounded-lg border border-zinc-200 my-5">
      <table className="w-full text-sm text-left">
        <thead className="bg-zinc-200 border-b border-zinc-200">
          <tr>
            <th>Görev</th>
            <th>Oluşturan</th>
            <th>Atanan</th>
            <th>Tarih</th>
            <th>İşlemler</th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task) => (
            <TableRow key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskTable;
