import useInput from "../hooks/use-input";
import classes from "./Employee.module.css";

const EmployeeForm = (props) => {
  const {
    value: firstNameInput,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastNameInput,
    isValid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameBlueHandler,
    reset: resetLastNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: emailInput,
    isValid: emailInputIsValid,
    hasError: emailInputHasError,
    inputBlurHandler: emailInputBlurHandler,
    valueChangeHandler: emailInputChangeHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailInputIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const Employee = {
      fName: firstNameInput,
      lName: lastNameInput,
      eEmail: emailInput,
    };

    console.log(Employee);

    props.onAddEmployee(Employee);

    resetEmailInput();
    resetFirstNameInput();
    resetLastNameInput();
  };

  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const lastNameInputClass = lastNameHasError
    ? "form-control invalid"
    : "form-control";

  const emailInputClass = emailInputHasError
    ? "form-control invalid"
    : "form-control";

  return (
    <form onSubmit={formSubmitHandler} className={classes["form-control"]}>
      <div>
        <div className={firstNameInputClass}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            onChange={firstNameChangeHandler}
            value={firstNameInput}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasError && <p>Enter a valid first name</p>}
        </div>
        <div className={lastNameInputClass}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            value={lastNameInput}
            onBlur={lastNameBlueHandler}
          />
          {lastNameHasError && <p>Enter a valid last name</p>}
        </div>

        <div className={emailInputClass}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="email"
            value={emailInput}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailInputHasError && <p>Enter a valid email</p>}
        </div>
      </div>

      <button>Submit</button>
    </form>
  );
};

export default EmployeeForm;
