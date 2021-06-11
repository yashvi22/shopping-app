import React from "react";
import { connect } from "react-redux";
import CustomButton from "../button/button.component";
import FormInput from "../form-input/form-input.component";
import "./sign-in.styles.scss";
import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {emailSignInStart}= this.props
    const { email, password } = this.state;

    emailSignInStart(email,password)
   
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    const { googleSignInStart } = this.props;
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
            <CustomButton type="button" onClick={googleSignInStart}>
              Sign in With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
