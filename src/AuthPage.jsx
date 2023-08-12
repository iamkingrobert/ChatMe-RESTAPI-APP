import axios from "axios";
import "./AuthPage.css";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const { value } = e.target[0];
    axios
      .post("https://chatme-backend.onrender.com/authenticate", { username: value })
      .then((r) => props.onAuth({ ...r.data, secret: value }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">ChatMe RestAPI App</div>

        <div className="form-subtitle">
          On this app you can Sign-Up and Sign-In with just your Username.
        </div>

        <div className="auth">
          <div className="auth-label">Username</div>
          <input className="auth-input" name="username" />
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
        <div className="form-subtitle">Example: @iamkingrobert</div>
      </form>
    </div>
  );
};

export default AuthPage;
