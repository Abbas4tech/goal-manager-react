import React from "react";

const GoalList = ({ getGoalData, deleteHandler }) => {
  console.log(getGoalData);

  return (
    <>
      <ul className="flex flex-col items-center h-20 mt-5 w-96">
        {getGoalData.map((goal) => (
          <li
            key={goal.id}
            className="flex items-center justify-between w-full p-3 m-1 text-white rounded-md bg-slate-400"
          >
            <p className="text-2xl ">{goal.goal}</p>
            <button
              className="p-2 rounded-md bg-slate-600 hover:bg-slate-900"
              onClick={() => deleteHandler(goal.id)}
            >
              Delete!
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default GoalList;
