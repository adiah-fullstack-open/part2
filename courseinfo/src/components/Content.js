import Part from "./Part";

const Content = ({ contents }) => {
  return contents.map((content) => (
    <Part
      key={content.name}
      part={content.name}
      exercises={content.exercises}
    />
  ));
};

export default Content;
