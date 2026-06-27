import api from "../api";

const ListItem = ({ todo, deleteTodo }) => {
  // sil butonuna tıklanınca çalışır
  const handleClick = (e) => {
    // kullanıcının onayını al
    if (!confirm("Silmek istediğinizden emin misiniz?")) return;

    // api'a todo'yu kaldırmak için istek at
    fetch(`http://localhost:4000/todos/${todo.id}`, { method: "DELETE" })
      // api isteği başarılı olursa state'i güncelle
      .then(() => deleteTodo(todo.id))
      .catch(() => alert("silme işlemi başarısız"));

    // axios
    api
      .delete(`/todos/${todo.id}`)
      // api isteği başarılı olursa state'i güncelle
      .then(() => deleteTodo(todo.id))
      .catch(() => alert("silme işlemi başarısız"));
  };

  return (
    <div className="list-item">
      <div className="item-content">
        <h2>{todo.title}</h2>
      </div>

      <div className="item-details">
        <span>{todo.category}</span>
        <span>
          {new Date(todo.date).toLocaleString("tr", {
            day: "2-digit",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>

      <div className="item-actions">
        <button onClick={handleClick}>Sil</button>
      </div>
    </div>
  );
};

export default ListItem;
