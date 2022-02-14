import React, { useState } from "react";
import Button from "./UI/Button";

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
      className="w-full p-4 rounded-lg shadow-md x-auto left-1/2 shadow-slate-700 bg-slate-200"
    >
      <label className="block mb-2 text-xl font-bold">Goal :</label>
      <input
        type="text"
        value={goal}
        onChange={(event) => setGoal(event.target.value)}
        className="w-full p-1 mb-2"
        placeholder="Enter your goals!"
      />

      <Button type="submit">Add</Button>
      {/* <p>{goal}</p> */}
    </form>
  );
};

export default Form;
