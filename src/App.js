import {
  FaGoogle,
  FaToggleOn,
  FaTwitter,
  FaFacebook,
  FaGithub,
} from "react-icons/fa";
import "./App.css";
import useLocalStorage from "use-local-storage";

function App() {
  const [theme, setTheme] = useLocalStorage("theme" ? "dark" : "light");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="login">
        <h1>Login</h1>
      </div>
      <div className="container">
        <div className="top">
          <a href="3">
            <FaFacebook className="icon" />
          </a>
          <a href="3">
            <FaTwitter className="icon" />
          </a>
          <a href="3">
            <FaGoogle className="icon" />
          </a>
          <a href="4">
            <FaGithub className="icon" />
          </a>
        </div>
        <p className="divider">
          <span>Or</span>
        </p>
        <form>
          <label>E-mail</label>
          <input placeholder="Enter Your Name" type="email" />
          <label>Password</label>
          <input placeholder="Enter Your Password" type="password" />
          <div className="remember">
            <input type="checkbox" checked="checked" />
            <p>Remember Me</p>
          </div>
          <button className="login_btn">Log in</button>
        </form>
        <div className="bottom">
          <p>Forget Password?</p>
          <a href="/">Reset Password</a>
        </div>
        <p className="create_acc">Create Account</p>
      </div>
      <div className="toggle_theme">
        <h2>Light Theme</h2>
        <FaToggleOn className="toggle_icon icon" onClick={toggleTheme} />
      </div>
    </div>
  );
}

export default App;
