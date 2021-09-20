import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/redux";

const AddTask = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = () => {
    if (title !== "") {
      dispatch(addTask({ title }));
      setTitle("");
    } else {
      setError("Title is required");
    }
  };

  return (
    <div>
      <div className="max-w-xl mx-auto bg-blue-600 p-4 my-6 rounded-md ">
        <h1 className="text-center text-3xl capitalize font-semibold text-white ">
          ADD TASK
        </h1>
        <div className="flex flex-col justify-center items-center ">
          <div>
            <p className="text-white">Title</p>
            <input
              className="max-w-lg w-64 p-1 rounded focus:outline-none block"
              type="text"
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
                setError("");
              }}
            />
            {error && <p className="text-red-700 -my-1 text-sm">{error}</p>}
            <button
              className="py-1 px-4 focus:outline-none bg-pink-600 text-white rounded my-3"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddTask;