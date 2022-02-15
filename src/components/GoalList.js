import React from "react";
import Button from "./UI/Button";

const GoalList = ({ getGoalData, deleteHandler }) => {
  console.log(getGoalData);

  return (
    <>
      <ul className="flex flex-col items-center w-full mx-auto mt-4">
        {getGoalData.length === 0 ? (
          <li className="flex items-center justify-center w-full p-3 m-1 text-white rounded-md bg-slate-400">
            <p className="p-2 text-xl font-bold text-slate-900">
              No Goals Found!
            </p>
          </li>
        ) : (
          getGoalData.map((goal) => (
            <li
              key={goal.id}
              className="flex items-center justify-between w-full p-1 my-1 text-white rounded-md bg-slate-400"
            >
              <p className="px-2 font-bold">{goal.goal}</p>
              <Button onPress={() => deleteHandler(goal.id)}>Delete</Button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default GoalList;
