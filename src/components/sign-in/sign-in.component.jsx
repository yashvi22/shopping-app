import React from "react";
import CustomButton from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import { auth, signInWithGoogle } from "../../firebase/firebase.util";
import "./sign-in.styles.scss";

export default class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.log(error)
    }
    
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2> I already have an account</h2>
        <span>Sign into with your email and password </span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            label="Email"
            value={this.state.email}
            id="email"
            name="email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            type="password"
            value={this.state.password}
            id="password"
            label="Password"
            name="password"
            handleChange={this.handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit">SIGN IN</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
