import React, { useState } from "react";

const Form = (props) => {
  const [goal, setGoal] = useState("");

  const formHandler = (event) => {
    event.preventDefault();
    const userInputval = { goal, id: Math.random().toString() };
    console.log(userInputval);
    props.getDataFromForm(userInputval);
    setGoal("");
  };

  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col items-center h-40 mt-12 rounded-lg shadow-md w-96 left-1/2 shadow-slate-700 bg-slate-200"
    >
      <label className="self-start mt-2 ml-4 text-2xl">Goal :</label>
      <input
        type="text"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
        className="self-center w-11/12 h-8 px-2 mt-2"
        placeholder="Enter your goals!"
      />

      <button
        type="submit"
        className="self-end w-20 py-2 mt-6 mr-4 text-white transition rounded-md bg-slate-500 hover:bg-slate-900 hover:-translate-y-1 "
      >
        Add
      </button>
      {/* <p>{goal}</p> */}
    </form>
  );
};

export default Form;
