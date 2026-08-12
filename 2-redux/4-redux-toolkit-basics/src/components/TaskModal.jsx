import { createTask, updateTask } from "../redux/slices/crudSlice";
import { INPUTS } from "../utils/constants";
import { useDispatch } from "react-redux";

const TaskModal = ({ isOpen, close, task }) => {
  const dispatch = useDispatch();
  if (!isOpen) return;

  const handleSubmit = (e) => {
    e.preventDefault();

    // inputlardaki verilere eriş
    const formData = new FormData(e.target);

    // inputlardaki verilere nesne formatına eriş
    const taskData = Object.fromEntries(formData.entries());

    // reducer'a haber ver
    dispatch(task ? updateTask({ id: task.id, ...taskData }) : createTask(taskData));

    // modal'ı kapat
    close();
  };

  return (
    <div className="fixed bg-black/20 inset-0 backdrop-blur-xs grid place-items-center z-10 p-10">
      <div className="bg-white p-5 rounded-md min-w-100">
        <div className="flex justify-end">
          <button onClick={close}>X</button>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
          {INPUTS.map((item, key) => (
            <div key={key} className="flex flex-col gap-1">
              <label htmlFor={item.name}>{item.label}</label>
              <input
                type={item.type}
                name={item.name}
                id={item.name}
                defaultValue={task?.[item.name]}
              />
            </div>
          ))}

          <div className="flex gap-5 justify-end mt-5">
            <button type="button" className="bg-zinc-500" onClick={close}>
              İptal
            </button>
            <button type="submit">{task ? "Kaydet" : "Oluştur"}</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
