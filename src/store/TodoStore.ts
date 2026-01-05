import { create } from "zustand";
interface TodoStore {
  listTodo: Todo[];
  awaitListTodo: Todo[];
  isLoading: boolean;

  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}
interface Todo {
  id: string;
  todo: string;
  completed: boolean;
}

export const useTodostore = create<TodoStore>((set) => ({
  listTodo: [],
  awaitListTodo: [],
  isLoading: false,

  addTodo: (newTodo) =>
    set((state) => ({
      listTodo: [
        ...state.listTodo,
        {
          id: Date.now().toString(),
          todo: newTodo,
          completed: true,
        },
      ],
    })),

  removeTodo: (id) =>
    set((state) => ({
      listTodo: state.listTodo.filter((item) => item.id !== id),
    })),
}));
