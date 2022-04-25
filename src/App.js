import "./App.css";
import TopicForm from "./components/TopicForm";
import axios from "axios";

function App() {
  async function sendTopicData(topic) {
    try {
      axios
        .post("https://testing-6fe69-default-rtdb.firebaseio.com/Topic.json", {
          firstName: topic.fName,
          description: topic.description,
        })
        .then(console.log(topic));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <TopicForm onAddTopic={sendTopicData} />
    </>
  );
}

export default App;
