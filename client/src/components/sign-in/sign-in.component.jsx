import React, { useState } from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = userCredentials;

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2> I already have an account</h2>
      <span>Sign into with your email and password </span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="email"
          label="Email"
          value={email}
          id="email"
          name="email"
          handleChange={handleChange}
          required
        />

        <FormInput
          type="password"
          value={password}
          id="password"
          label="Password"
          name="password"
          handleChange={handleChange}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">SIGN IN</CustomButton>
          <CustomButton type="button" onClick={googleSignInStart}>
            Sign in With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
