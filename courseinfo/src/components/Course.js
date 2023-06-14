import React from "react";

import Content from "./Content";
import Header from "./Header";
import Total from "./Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />
      <Content contents={course.parts} />
      <Total
        count={course.parts.reduce(
          (prevValue, currentValue) => prevValue + currentValue.exercises,
          0
        )}
      />
    </div>
  );
};

export default Course;
