import ACTION_TYPES from "../actions/action-types";

const initialState = {
  loading: true,
  error: null,
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.CREATE:
      // aksiyonun payload'ı ile gelen yeni nesneyi diziye ekle
      const newTodos = state.todos.concat(action.payload);

      // state'in son halini return et
      return { ...state, todos: newTodos };

    case ACTION_TYPES.DELETE:
      // aksiyonun payload'ı ile gelen id'li elemanı diziden kaldır
      const filtredTodos = state.todos.filter((todo) => todo.id !== action.payload);

      // state'in son halini return et
      return { ...state, todos: filtredTodos };

    case ACTION_TYPES.TOGGLE:
      // aksiyonun payload'ı ile gelen todo'nun isDone değerini güncelle
      const updatedTodos = state.todos.map((todo) =>
        todo.id === action.payload ? { ...todo, isDone: !todo.isDone } : todo,
      );

      // state'in son halini return et
      return { ...state, todos: updatedTodos };

    case ACTION_TYPES.LOADING:
      return { ...state, loading: true };

    case ACTION_TYPES.ERROR:
      return { ...state, loading: false, error: action.payload };

    case ACTION_TYPES.SUCCESS:
      return { ...state, loading: false, error: null, todos: action.payload };

    default:
      return state;
  }
};

export default todoReducer;
