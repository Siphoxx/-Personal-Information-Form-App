import { useState } from "react";

function Form() {
  // State variables to store form data
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [age, setAge] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");

  // Handler for name input changes
  const changeNameHandler = (event) => {
    const nameValue = event.target.value; // Get the current value from input

    // Validate: only allow letters, spaces, hyphens, and apostrophes
    const validateNameValue = nameValue.match(/[A-Za-z\s\-']/g) || [];

    // Join the valid characters back into a string
    const filteredNameValue = validateNameValue.join("");

    // Update the name state with filtered value
    setName(filteredNameValue);
  };

  // Handler for surname input changes
  const changeSurnameHandler = (event) => {
    const surnameValue = event.target.value;

    // Validate: only allow letters, spaces, hyphens, and apostrophes
    const validateSurnameValue = surnameValue.match(/[A-Za-z\s\-']/g) || [];

    // Join the valid characters back into a string
    const filteredSurnameValue = validateSurnameValue.join("");

    // Update the surname state with filtered value
    setSurname(filteredSurnameValue);
  };

  // Handler for age input changes
  const changeAgeHandler = (event) => {
    const ageValue = event.target.value;

    // Validate: remove any non-numeric characters
    const validateAgeValue = ageValue.replace(/[^0-9]/g, "");

    // Limit age to 3 digits maximum (e.g., 100)
    const limitedAge = validateAgeValue.slice(0, 3);

    // Update the age state with filtered and limited value
    setAge(limitedAge);
  };

  // Handler for profession input changes
  const changeProfessionHandler = (event) => {
    const professionValue = event.target.value; // Get the current value from input

    // Validate: only allow letters, spaces, hyphens, and apostrophes
    const validateProfessionValue =
      professionValue.match(/[A-Za-z\s\-']/g) || [];

    // Join the valid characters back into a string
    const filterProfessionValue = validateProfessionValue.join("");

    // Update the profession state with filtered value
    setProfession(filterProfessionValue);
  };

  // Handler for email input changes
  const changeEmailHandler = (event) => {
    const emailValue = event.target.value; // Get the current value from input

    // Validate: remove characters not allowed in emails
    const validateEmailValue = emailValue.replace(/[^a-zA-Z0-9@._%+-]/g, "");

    // Update the email state with filtered value
    setEmail(validateEmailValue);

    // Email format validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test if the email is in valid format
    const isValid = emailRegex.test(validateEmailValue);
  };

  // Handler for form submission
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent default form submission (page reload)

    // Create form data object from state
    const formData = {
      name: name,
      surname: surname,
      age: age,
      profession: profession,
      email: email,
    };

    console.log(formData); // Log form data for debugging

    // Send form data to PHP backend API
    fetch("http://localhost/personell/backend/api/submit-form.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", //Tell PHP we're sending JSON
      },
      body: JSON.stringify(formData), // Tell PHP we're sending JSON
    })
      .then((Response) => Response.json()) // Convert PHP response to JSON
      .then((data) => {
        console.log("Success", data);

        // Check if the operation was successful
        if (data.success) {
          // Show success message with user ID
          alert("Data saved successfully! User ID: " + data.inserted_id);
          // Reset the form
          setName("");
          setSurname("");
          setAge("");
          setProfession("");
          setEmail("");
        } else {
          // Show error message from server
          alert("Error: " + data.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Network error: " + error.message);
      });
  };

  // JSX returned by the component
  return (
    <div>
      <h3>Personal Information</h3>

      {/* Form element with submit handler */}
      <form action="POST" onSubmit={submitHandler}>
        <label htmlFor="nameInput">
          <input
            id="nameInput"
            placeholder="Name"
            onChange={changeNameHandler} // Calls handler on every keystroke
            value={name} // Controlled component - value comes from state
            required // HTML5 validation - field must be filled
          />
        </label>
        <br></br>

        {/* Surname input field */}
        <label htmlFor="surnameInput">
          <input
            id="surnameInput"
            placeholder="Surname"
            onChange={changeSurnameHandler}
            value={surname}
            required
          ></input>
        </label>
        <br></br>
        {/* Age input field */}
        <label htmlFor="ageInput">
          <input
            id="ageInput"
            placeholder="Age"
            onChange={changeAgeHandler}
            value={age}
            required
          />
        </label>
        <br></br>

        {/* Profession input field */}
        <label htmlFor="professionInput">
          <input
            id="professionInput"
            placeholder="Profession"
            onChange={changeProfessionHandler}
            value={profession}
            required
          />
        </label>
        <br></br>

        {/* Email input field */}
        <label htmlFor="emailInput">
          <input
            id="emailInput"
            placeholder="Email"
            onChange={changeEmailHandler}
            value={email}
            required
          />
        </label>
        <br></br>
        {/* Submit button */}
        <button>Submit🎉</button>
      </form>
    </div>
  );
}

export default Form; // Export the component for use in other files
