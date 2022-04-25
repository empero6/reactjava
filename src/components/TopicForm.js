import useInput from "../hooks/use-input";
import classes from "./Topic.module.css";

const TopicForm = (props) => {
  const {
    value: firstNameInput,
    isValid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: descriptionInput,
    isValid: descriptionIsValid,
    hasError: descriptionHasError,
    valueChangeHandler: descriptionChangeHandler,
    inputBlurHandler: descriptionBlurHandler,
    reset: resetDescriptionInput,
  } = useInput((value) => value.trim() !== "");

  // const {
  //   value: lastNameInput,
  //   isValid: lastNameIsValid,
  //   hasError: lastNameHasError,
  //   valueChangeHandler: lastNameChangeHandler,
  //   inputBlurHandler: lastNameBlueHandler,
  //   reset: resetLastNameInput,
  // } = useInput((value) => value.trim() !== "");

  // const {
  //   value: emailInput,
  //   isValid: emailInputIsValid,
  //   hasError: emailInputHasError,
  //   inputBlurHandler: emailInputBlurHandler,
  //   valueChangeHandler: emailInputChangeHandler,
  //   reset: resetEmailInput,
  // } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && descriptionIsValid) {
    formIsValid = true;
  }

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const topic = {
      fName: firstNameInput,
      description: descriptionInput,
      // eEmail: emailInput,
    };

    props.onAddTopic(topic);

    resetFirstNameInput();
    resetDescriptionInput();
    // resetEmailInput();
    // resetLastNameInput();
  };

  const firstNameInputClass = firstNameHasError
    ? "form-control invalid"
    : "form-control";

  const descriptionInputclass = descriptionHasError
    ? "form-control invalid"
    : "form-control";

  // const lastNameInputClass = lastNameHasError
  //   ? "form-control invalid"
  //   : "form-control";

  // const emailInputClass = emailInputHasError
  //   ? "form-control invalid"
  //   : "form-control";

  return (
    <form onSubmit={formSubmitHandler} className={classes["form-control"]}>
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

      <div className={descriptionInputclass}>
        <label htmlFor="description">Description</label>
        <input
          type="text"
          id="description"
          onChange={descriptionChangeHandler}
          value={descriptionInput}
          onBlur={descriptionBlurHandler}
        />
        {descriptionHasError && <p>Enter a valid description</p>}
      </div>

      {/* <div className={lastNameInputClass}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            onChange={lastNameChangeHandler}
            value={lastNameInput}
            onBlur={lastNameBlueHandler}
          />
          {lastNameHasError && <p>Enter a valid last name</p>}
        </div> */}

      {/* <div className={emailInputClass}>
          <label htmlFor="name">E-Mail Address</label>
          <input
            type="text"
            id="email"
            value={emailInput}
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
          />
          {emailInputHasError && <p>Enter a valid email</p>}
        </div> */}

      <button>Submit</button>
    </form>
  );
};

export default TopicForm;
