import api from "../api";

const TodoForm = ({ addTodo }) => {
  // form gönderilince çalışır
  const handleSubmit = (e) => {
    e.preventDefault();

    // başlık ve kategori inputundaki girdilere eriş
    const title = e.target[0].value;
    const category = e.target[1].value;

    // api'a gönderilecek yeni todo nesnesini hazırla
    const newTodo = {
      title,
      category,
      date: Date.now(),
    };

    // api'a yeni todo oluşturmak için istek at
    api
      .post("/todos", newTodo)
      // istek başarılı olursa state'i güncelle
      .then((res) => addTodo(res.data))
      .catch((err) => alert("İşlem başarısız oldu"));

    // formu sıfırla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Yeni Öğe Ekle</h1>

      <div className="form-group">
        <label>Başlık</label>
        <input type="text" required />
      </div>

      <div className="form-group">
        <label>Kategori</label>
        <select required>
          <option value="">Seçiniz</option>
          <option value="iş">İş</option>
          <option value="spor">Spor</option>
          <option value="alışveriş">Alışveriş</option>
          <option value="finans">Finans</option>
          <option value="sosyal">Sosyal</option>
          <option value="kişisel gelişim">Kişisel Gelişim</option>
        </select>
      </div>

      <div className="btn-group">
        <button type="submit">Gönder</button>
      </div>
    </form>
  );
};

export default TodoForm;
