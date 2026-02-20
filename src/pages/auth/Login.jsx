import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../assets/images/logo.png";
import bgImage from "../../assets/images/login-bg.jpg";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [formData, setFormData] = useState({
    userId: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Dummy credentials and set auth context
    if (formData.userId === "admin" && formData.password === "123456") {
      const user = { userId: formData.userId, role: "admin" };
      login(user);
      navigate("/admin");
      return;
    }

    if (formData.userId === "student" && formData.password === "123456") {
      const user = { userId: formData.userId, role: "student" };
      login(user);
      navigate("/student");
      return;
    }

    if (formData.userId === "faculty" && formData.password === "123456") {
      const user = { userId: formData.userId, role: "faculty" };
      login(user);
      navigate("/faculty");
      return;
    }

    alert("Invalid Credentials");
  };

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="login-container">
        <div className="login-card">

          <div className="login-header">
            <img src={logo} alt="University Logo" />
          </div>

          <form onSubmit={handleSubmit}>

            <div className="input-group">
              <input
                type="text"
                name="userId"
                placeholder="Enter User ID"
                value={formData.userId}
                onChange={handleChange}
                required
              />
            </div>

            <div className="input-group">
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="login-btn">
              Sign In
            </button>

            {/* <div className="login-links">
              <a href="#">Forgot password?</a>
              <p>Terms & Conditions | Privacy Policy</p>
            </div> */}

          <div className="login-links">
            <Link to="/forgot-password">Forgot Password?</Link>
            <p>
              <Link to="/terms">Terms & Conditions</Link> |{" "}
              <Link to="/privacy">Privacy Policy</Link>
            </p>
          </div> 
 

          </form>

        </div>
      </div>
    </div>
  );
};

export default Login;
