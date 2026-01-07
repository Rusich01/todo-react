import { create } from "zustand";
import { persist } from "zustand/middleware";
interface TodoStore {
  listTodos: Todo[];
  awaitListTodo: Todo[];
  todoCompleted: Todo[];

  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  removeCompletedTodo: (id: string) => void;
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
      todoCompleted: [],

      addTodo: (newTodo: string) =>
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

      toggleTodo: (id) =>
        set((state) => {
          const listTodosId = state.listTodos.find((item) => item.id === id);
          const todoCompletedId = state.todoCompleted.find(
            (item) => item.id === id
          );

          if (listTodosId) {
            return {
              listTodos: state.listTodos.filter((t) => t.id !== id),
              todoCompleted: [
                ...state.todoCompleted,
                { ...listTodosId, completed: true },
              ],
            };
          }
          if (todoCompletedId) {
            return {
              todoCompleted: state.todoCompleted.filter(
                (item) => item.id !== id
              ),

              listTodos: [
                ...state.listTodos,
                { ...todoCompletedId, completed: false },
              ],
            };
          }
          return state;
        }),

      doneTodo: (id: string) =>
        set((state) => {
          const todo = state.listTodos.find((item) => item.id === id);
          if (!todo) return state;

          const updatedListTodos = state.listTodos.filter(
            (item) => item.id !== id
          );
          const updatedTodoCompleted = [
            ...state.todoCompleted,
            { ...todo, completed: true },
          ];

          return {
            listTodos: updatedListTodos,
            todoCompleted: updatedTodoCompleted,
          };
        }),

      removeTodo: (id: string) =>
        set((state) => ({
          listTodos: state.listTodos.filter((item) => item.id !== id),
        })),
      removeCompletedTodo: (id: string) =>
        set((state) => ({
          todoCompleted: state.todoCompleted.filter((item) => item.id !== id),
        })),
    }),
    { name: "todo-storage" }
  )
);
