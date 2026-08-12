import { useState } from "react";
import TaskModal from "./TaskModal";

const TaskForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-end">
      <button onClick={() => setIsOpen(true)}>Yeni Görev Ekle</button>

      <TaskModal isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
};

export default TaskForm;
