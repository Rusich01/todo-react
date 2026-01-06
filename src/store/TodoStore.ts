import { create } from "zustand";
import { persist } from "zustand/middleware";
interface TodoStore {
  listTodos: Todo[];
  awaitListTodo: Todo[];

  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
}
interface Todo {
  id: string;
  todo: string;
  completed: boolean;
  isLoading?: boolean;
}

export const useTodoStore = create<TodoStore>()(
  persist<TodoStore>(
    (set) => ({
      listTodos: [],
      awaitListTodo: [],

      addTodo: (newTodo) =>
        set((state) => ({
          listTodos: [
            ...state.listTodos,
            {
              id: Date.now().toString(),
              todo: newTodo,
              completed: false,
              isLoading: true,
            },
          ],
        })),

      removeTodo: (id) =>
        set((state) => ({
          listTodos: state.listTodos.filter((item) => item.id !== id),
        })),
    }),
    { name: "todo-storage" }
  )
);
