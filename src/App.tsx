import Todo from "./components/MainTodo/Todo";

const App = () => {
  return (
    <div className="min-h-screen bg-linear-to-r from-[rgb(79,154,184)] via-[rgb(87,199,133)] to-[#77d484]">
      {/* <h1 className="w-full bg-[rgb(100,180,249)] inline-block text-center py-3 text-[20px] rounded-bl-[10px] rounded-br-[10px] border-b text-current shadow-xl ">
        технології які використовувалися:
      </h1> */}
      <Todo />
    </div>
  );
};

export default App;
