import { useState, useEffect } from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar/Navbar";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function App() {
  let navigate = useNavigate();
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
    if (
      formValues.email === "admin@admin.com" &&
      formValues.password === "admin"
    ) {
      navigate("/admin");
    } else if (
      formValues.email === "user@user.com" &&
      formValues.password === "user"
    ) {
      navigate("/home");
    } else {
      alert("User not registered");
    }
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
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="bg">
      <div>
        <Navbar />
      </div>
      <div className="container" id="loginBox">
        <div></div>
        <form onSubmit={handleSubmit}>
          <div className="ui divider"></div>
          <div className="uiform">
            <p>Login</p>
            <div className="field">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter email"
                value={formValues.email}
                onChange={handleChange}
              />
            </div>
            <p className="error">{formErrors.email}</p>
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
            <p className="error">{formErrors.password}</p>
            <Button variant="primary" id="loginButton" onClick={handleSubmit}>
              Login
            </Button>
          </div>
          <p className="sgup">
            New User?{" "}
            <a href="/Signup" id="signupLink">
              Signup
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default App;
