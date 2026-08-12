import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/crudSlice";
import { useState } from "react";
import TaskModal from "./TaskModal";

const TableRow = ({ task }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <tr>
        <td>{task.title}</td>
        <td>{task.author}</td>
        <td>{task.assigned}</td>
        <td>{task.deadline}</td>
        <td className="flex flex-wrap gap-2">
          <button onClick={() => setIsOpen(true)}>düzenle</button>
          <button className="bg-red-500" onClick={() => dispatch(deleteTask(task.id))}>
            sil
          </button>
        </td>
      </tr>

      <TaskModal isOpen={isOpen} close={() => setIsOpen(false)} task={task} />
    </>
  );
};

export default TableRow;
