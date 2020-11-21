import React, { useState } from "react";

function SignIn() {
  const initialState = {
    Email: "",
    Password: "",
  };

  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setValue((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    setValue(initialState);
    e.preventDefault();
  };

  return (
    <form onSignIn={handleSubmit}>
      <label htmlFor="Email">Email:</label>
      <br />
      <input
        type="email"
        id="Email"
        className="email"
        value={value.Email}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="Password">Password:</label>
      <br />
      <input
        type="password"
        id="Password"
        className="password"
        value={value.Password}
        onChange={handleChange}
        required
      />
      <br />
      <input type="submit" id="submit" value="Submit" className="submit" />
    </form>
  );
}

export default SignIn;
