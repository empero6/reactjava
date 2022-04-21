import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import axios from "axios";
import { useCallback } from "react";

function App() {
  const sendEmployeeData = useCallback(async () => {});

  async function addEmployeeHandle(employee) {
    axios
      .post(
        "https://testing-6fe69-default-rtdb.firebaseio.com/Employees.json",
        {
          firstName: employee.fName,
          lastName: employee.lName,
          email: employee.eEmail,
        }
      )
      .then(console.log(employee));
  }

  return (
    <>
      <EmployeeForm onAddEmployee={addEmployeeHandle} />
    </>
  );
}

export default App;
