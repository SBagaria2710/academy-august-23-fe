import { useState } from "react";

function Form() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [formState, setFormState] = useState({ firstName: "", lastName: "" });

  // const handleFirstChange = (event) => {
  //   setFirstName(event.target.value);
  // };

  // const handleLastChange = (event) => {
  //   setLastName(event.target.value);
  // };

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formState);
    // console.log("First Name = ", firstName);
    // console.log("Last Name = ", lastName);
  }

  return (
    <div>
      <h1>This is a Form!</h1>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="firstName"
          value={formState.firstName}
        ></input>
        <br />
        <label>Last Name</label>
        <input
          onChange={(event) => handleChange(event)}
          type="text"
          name="lastName"
          value={formState.lastName}
        ></input>
        <br />
        <button>Submit Form Data</button>
      </form>
    </div>
  );
}

export default Form;
