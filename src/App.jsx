import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="signup-box">
        <h1>SIGN UP</h1>

        <label>Username</label>
        <input type="text" placeholder="enter username" />

        <label>Password</label>
        <input type="password" placeholder="enter password" />

        <button className="signup-btn">signup</button>

        <p className="forgot">
          forgot password? <span>reset password</span>
        </p>

        <p className="social-text">Signup with social media accounts</p>

        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default App;
