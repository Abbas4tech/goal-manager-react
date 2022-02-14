import React from "react";
import Button from "./UI/Button";

const GoalList = ({ getGoalData, deleteHandler }) => {
  console.log(getGoalData);

  return (
    <>
      <ul className="flex flex-col items-center w-full mx-auto mt-4">
        {getGoalData.length === 0 ? (
          <li className="flex items-center justify-center w-full p-3 m-1 text-white rounded-md bg-slate-400">
            <p className="font-bold">No Goal Found!</p>
          </li>
        ) : (
          getGoalData.map((goal) => (
            <li
              key={goal.id}
              className="flex items-center justify-between w-full p-1 my-1 text-white rounded-md bg-slate-400"
            >
              <p className="px-2 font-bold">{goal.goal}</p>
              {/* <button
                className="p-2 rounded-md bg-slate-600 hover:bg-slate-900"
                onClick={() => deleteHandler(goal.id)}
              >
                Delete!
              </button> */}
              <Button onPress={() => deleteHandler(goal.id)}>Delete</Button>
            </li>
          ))
        )}
      </ul>
    </>
  );
};

export default GoalList;
