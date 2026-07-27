import { useDispatch } from "react-redux";

const Form = () => {
  // dispatch fonksiyonuna eriş
  const dispatch = useDispatch();

  // form gönderilince
  const handleSubmit = (e) => {
    e.preventDefault();

    // inputtaki yazıya eriş
    const text = e.target[0].value.trim();

    // kaydidilecek todo nesnesini oluştur
    const newTodo = {
      id: new Date().getTime(),
      text,
      isDone: false,
      createdAt: new Date().getTime(),
    };

    // reducer'a action gönder
    dispatch({ type: "CREATE", payload: newTodo });

    // formu sıfırla
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 my-6">
      <input
        type="text"
        className="bg-zinc-800 border border-zinc-700 text-white rounded-md p-2 flex-1 outline-none"
      />

      <button className="bg-yellow-600 px-4 py-2 rounded-md cursor-pointer">Ekle</button>
    </form>
  );
};

export default Form;
