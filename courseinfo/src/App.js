import React from "react";

import Course from "./components/Course";

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      { name: "Fundamentals of React", exercises: 10, id: 1 },
      { name: "Using props to pass data", exercises: 7, id: 2 },
      { name: "State of a component", exercises: 14, id: 3 },
    ],
  };

  // return (
  //   <div>
  //     <Header course={course.name} />
  //     <Content contents={course.parts} />
  //     <Total
  //       count={course.parts.reduce(
  //         (prevValue, currentValue) => prevValue + currentValue.exercises,
  //         0
  //       )}
  //     />
  //   </div>
  // );
  return <Course course={course} />;
};

export default App;
