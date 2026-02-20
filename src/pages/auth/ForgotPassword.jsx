const ForgotPassword = () => {
  return (
    <div className="simple-page">
      <h2>Reset Password</h2>

      <p>Please enter your registered email address.</p>

      <input
        type="email"
        placeholder="Enter your email"
        className="simple-input"
      />

      <button className="simple-btn">Send Reset Link</button>
    </div>
  );
};

export default ForgotPassword;