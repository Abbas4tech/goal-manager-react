import React, { useState } from "react";
import Form from "./components/Form";
import GoalList from "./components/GoalList";
import Heading from "./components/Heading";

const goalData = [
  {
    goal: "Do Homework",
    id: Math.random().toString(),
  },
  {
    goal: "Take a bath",
    id: Math.random().toString(),
  },
];

function App() {
  const [goalsData, setGoalsData] = useState(goalData);
  const dataFromForm = (data) => {
    console.log(data);
    setGoalsData([data, ...goalsData]);
  };

  const deleteHandler = (id) => {
    setGoalsData(goalsData.filter((goal) => goal.id !== id));
  };

  return (
    <>
      <Heading />
      <section className="flex flex-col items-center justify-between w-11/12 max-w-2xl mx-auto my-8">
        <Form getDataFromForm={dataFromForm} />
        <GoalList getGoalData={goalsData} deleteHandler={deleteHandler} />
      </section>
    </>
  );
}

export default App;
