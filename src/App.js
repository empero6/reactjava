import "./App.css";
import TopicForm from "./components/TopicForm";
import axios from "axios";

function App() {
  async function sendTopicData(topic) {
    try {
      axios
        .post("http://localhost:8888/addUsers", {
          id: Math.floor(Math.random() * 100),
          name: topic.fName,
          address: topic.description,
        })
        .then(console.log(topic));
    } catch (error) {
      console.log(error);
    }
  }

  async function getTopicData() {
    axios
      .get("http://localhost:8888/users/")
      .then(function (response) {
        const employeeData = response.data;
        console.log(employeeData);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <TopicForm onAddTopic={sendTopicData} />
      <button onClick={getTopicData}>Get Data</button>
    </>
  );
}

export default App;
