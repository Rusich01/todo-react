import { create } from "zustand";
import { persist } from "zustand/middleware";

type TodoPersistState = {
  listTodos: Todo[];
  todoCompleted: Todo[];
};
interface TodoStore {
  waitListsTodo: Todo[];
  listTodos: Todo[];
  todoCompleted: Todo[];
  isOpened: boolean;
  isOpenedModal: {
    open: boolean;
    idTodo: null | string;
  };
  selectedTodoId: string | null;

  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
  toggleTodo: (id: string) => void;
  doneTodo: (id: string) => void;
  removeCompletedTodo: (id: string) => void;
  removeWaitListsTodo: () => void;
  addWaitListsTodo: (waitTodo: string) => void;
  openMessage: () => void;
  closeMessage: () => void;
  openModal: (id: string) => void;
  closeModal: () => void;
}
interface Todo {
  id: string;
  todo: string;
  completed: boolean;
}

export const useTodoStore = create<TodoStore>()(
  persist(
    (set) => ({
      listTodos: [],
      waitListsTodo: [],
      todoCompleted: [],
      selectedTodoId: null,

      addWaitListsTodo: (waitTodo) =>
        set((state) => ({
          waitListsTodo: [
            ...state.waitListsTodo,
            {
              id: Date.now().toString(),
              todo: waitTodo,
              completed: false,
            },
          ],
        })),

      addTodo: (newTodo) =>
        set((state) => ({
          listTodos: [
            ...state.listTodos,
            {
              id: Date.now().toString(),
              todo: newTodo,
              completed: false,
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

      doneTodo: (id) =>
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

      removeTodo: (id) =>
        set((state) => ({
          listTodos: state.listTodos.filter((item) => item.id !== id),
        })),
      removeCompletedTodo: (id) =>
        set((state) => ({
          todoCompleted: state.todoCompleted.filter((item) => item.id !== id),
        })),
      removeWaitListsTodo: () =>
        set({
          waitListsTodo: [],
        }),

      isOpened: false,
      openMessage: () => set({ isOpened: true }),
      closeMessage: () => set({ isOpened: false }),

      isOpenedModal: { open: false, idTodo: null },
      openModal: (id) => set({ isOpenedModal: { open: true, idTodo: id } }),
      closeModal: () => set({ isOpenedModal: { open: false, idTodo: null } }),
    }),
    {
      name: "todo-storage",
      partialize: (state): TodoPersistState => ({
        listTodos: state.listTodos,
        todoCompleted: state.todoCompleted,
      }),
    }
  )
);
