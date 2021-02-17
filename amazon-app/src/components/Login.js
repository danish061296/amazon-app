import React from 'react';
import '../css/Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // if success, redirect to home page
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    // creata a user and log in, then redirect to home page
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push('/');
      })
      .catch((e) => alert(e.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login-image"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>
      <div className="login-container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email</h5>
          <input
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin} type="submit" className="login-button">
            Continue
          </button>
          <p>
            By continuing, you agree to Amazon's Conditions of Use and Privacy
            Notice.
          </p>
        </form>
      </div>
      <div className="signup-container">
        <p className="login-new-account">New to Amazon?</p>
        <button onClick={handleSignup} className="signup-button">
          Create your Amazon account
        </button>
      </div>
      <div className="login-footer">
        <div className="login-footer-notes">
          <div className="login-terms">
            <p>Condition of Use</p>
            <p>Privacy Notice</p>
            <p>Help</p>
          </div>
          <p className="login-copyright">© 2021, Danish Siddiqui, Amazon-app</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
