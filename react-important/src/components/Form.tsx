import React from "react";

export const sleep = (ms: number = 1000) => new Promise((resolve) => setTimeout(resolve, ms));

interface Todo {
  id: number;
  title: string;
  image: string;
  desc: string;
  isDone: boolean;
}

interface Props {
  isUpdate: boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const Form: React.FC<Props> = ({ isUpdate, setIsUpdate, todos, setTodos }) => {
  const [image, setImage] = React.useState("");

  const handleAddTodo = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsUpdate(true);

      const formData = new FormData(e.currentTarget);
      const title = formData.get("title") as string;
      const desc = formData.get("desc") as string;
      const isDone = formData.get("isDone") === "on";

      const newTodo = {
        id: Date.now(),
        title,
        image,
        desc,
        isDone,
      };
      (e.currentTarget as HTMLFormElement).reset();
      localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
      await sleep();
    } catch (error) {
      console.error("Failed to add todo", error);
    } finally {
      setIsUpdate(false);
      setImage("");
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="w-full mt-6">
      <div className="relative grid place-items-center w-full h-32 rounded-lg shadow-xl shadow-slate-200/50 border-2 border-slate-500">
        {image ? (
          <img
            src={image}
            loading="lazy"
            alt="image"
            className="w-full h-full object-cover rounded-lg max-h-32"
          />
        ) : (
          <span className="text-slate-300 font-semibold">Please input image links</span>
        )}
      </div>
      <input
        onChange={(e) => setImage(e.target.value)}
        type="text"
        name="image"
        required
        placeholder="Image links..."
        className="mt-4 w-full py-3 rounded pl-4 text-blue-500"
      />
      <input
        type="text"
        name="title"
        required
        placeholder="Todo title"
        className="mt-4 w-full py-3 rounded pl-4 font-semibold"
      />
      <textarea
        name="desc"
        id="desc"
        placeholder="Todo description"
        required
        className="mt-4 w-full h-32 rounded-lg text-slate-800 p-2"
      />
      <label htmlFor="isDone" className="flex gap-2">
        <input type="checkbox" name="isDone" id="isDone" />
        <span className="text-xl font-semibold text-slate-200">Have done todo</span>
      </label>
      <button
        type="submit"
        className="mt-4 w-full py-2 rounded-full bg-gradient-to-r from-red-600 to-orange-600 text-slate-100 font-bold"
      >
        {isUpdate ? "isAdding..." : "Submit new todo"}
      </button>
    </form>
  );
};

export default Form;
