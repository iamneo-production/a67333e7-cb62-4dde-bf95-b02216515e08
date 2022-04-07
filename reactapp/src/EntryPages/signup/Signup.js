import { useState, useEffect } from "react";
import "./signup.css";
import axios from "axios";
import { Button } from "react-bootstrap";
import Navbar from "../Navbar/Navbar";
function App() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
  });
  const { email, username, mobileNumber, password, confirmpassword } = user;
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const FormHandle = (e) => {
    e.preventDefault();
    addDataToServer(user);
    console.log(user);
  };
  const addDataToServer = (data) => {
    axios.post("http://localhost:8080/signup", data).then(
      (response) => {
        console.log(response);
        alert("Book Added Successfully");
      },
      (error) => {
        console.log(error);
        alert("Operation failed");
      }
    );
  };
  const initialValues = {
    email: "",
    username: "",
    mobileNumber: "",
    password: "",
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
      if (!values.mobileNumber) {
        errors.mobileNumber = "MobileNumber is required";
      } else if (!values.mobileNumber.length == 10) {
        errors.mobileNumber = "MobileNumber should be 10 digits";
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
      <div>
        <div>
          <Navbar />
        </div>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="ui divider"></div>
            <div className="ui form">
              <p>Sign Up</p>
              <div className="field">
                <input
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  value={formValues.email}
                  onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <p>{formErrors.username}</p>
            <div className="field">
              <input
                id="mobileNumber"
                type="text"
                name="mobileNumber"
                placeholder="Enter MobileNumber"
                value={formValues.mobileNumber}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <p>{formErrors.mobileNumber}</p>
            <div className="field">
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={(e) => onInputChange(e)}
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
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <p>{formErrors.confirmpassword}</p>
            <Button variant="primary" id="loginButton" onClick={FormHandle}>
              Signup
            </Button>
            <p className="sgin">
              Already a user?
              <a href="/login" id="signinLink">
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App
