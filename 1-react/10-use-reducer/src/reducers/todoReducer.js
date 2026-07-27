// başlangıç state'i
export const initialState = {
  todos: [],
  todoCategory: [],
};

// reducer fonksiyonu
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "EKLE":
      // yeni todo nesnesi oluştur
      const newTodo = { text: action.payload, id: new Date().getTime() };

      // yeni todo nesnesini todos dizisine ekle
      const updatedTodos = state.todos.concat(newTodo);

      // state'in yeni değerini return et
      return { ...state, todos: updatedTodos };

    case "SİL":
      // akisyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // state'in yeni değerini return et
      return { ...state, todos: filtredTodos };

    default:
      return state;
  }
};
