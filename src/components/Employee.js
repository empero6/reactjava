import EmployeeList from "./EmployeeList";

const Employee = (props) => {
  return (
    <>
      {props.employees.map((employee) => {
        <Employee
          key={employee.id}
          id={employee.id}
          name={employee.name}
          title={employee.title}
        />;
      })}
    </>
  );
};

export default Employee;
