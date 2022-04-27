import "./App.css";
import TopicForm from "./components/TopicForm";
import axios from "axios";

function App() {
  async function sendTopicData(topic) {
    // try {
    //   axios
    //     .post("http://localhost:8888/addUsers", {
    //       id: 1,
    //       name: topic.fName,
    //       address: topic.description,
    //     })
    //     .then(console.log(topic));
    // } catch (error) {
    //   console.log(error);
    // }
    const userFetch = await fetch("http://localhost:8888/user/1");

    const petData = await userFetch.json();
    console.log(petData);
  }

  return (
    <>
      <TopicForm onAddTopic={sendTopicData} />
    </>
  );
}

export default App;
