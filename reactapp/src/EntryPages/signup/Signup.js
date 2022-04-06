import { useState, useEffect } from "react";
import "./signup.css";

function App() {
  const initialValues = {
    email: "",
    username: "",
    mobilenumber: "",
    password: "",
    confirmpassword: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.mobilenumber) {
      errors.mobilenumber = "Mobilenumber is required";
    } else if (!values.mobilenumber.length == 10) {
      errors.mobilenumber = "Mobilenumber should be 10 digits";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    if (!values.confirmpassword) {
      errors.confirmpassword = "Confirmpassword is required";
    } else if (values.confirmpassword != values.password) {
      errors.confirmpassword = "ConfirmPassword is not matched";
    }
    return errors;
  };

  return (
    <div className="container">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <input
              id="email"
              type="text"
              name="email"
              placeholder="Enter email"
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className="field">
            <input
              id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.username}</p>
          <div className="field">
            <input
              id="mobileNumber"
              type="text"
              name="mobilenumber"
              placeholder="Enter Mobilenumber"
              value={formValues.mobilenumber}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.mobilenumber}</p>
          <div className="field">
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className="field">
            <input
              id="confirmPassword"
              type="password"
              name="confirmpassword"
              placeholder="Confirm Password"
              value={formValues.confirmpassword}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.confirmpassword}</p>
          <button className="fluid ui button blue" id="submitButton">
            Submit
          </button>
        </div>
      </form>
      <p>
        Already a user?
        <a href="/login" id="signinLink">
          Login
        </a>
      </p>
    </div>
  );
}

export default App;
