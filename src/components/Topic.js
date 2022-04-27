import TopicList from "./TopicList";

const Topic = (props) => {
  return (
    <>
      {props.topic.map((topic) => {
        <Topic
          key={topic.id}
          id={topic.id}
          fName={topic.fName}
          address={topic.description}
        />;
      })}
    </>
  );
};

export default Employee;
