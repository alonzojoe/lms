const Login = () => {
  return (
    <>
      <h3 className="mb-1 fw-bold">Welcome to System Name! 👋</h3>
      <p className="mb-4">Please sign-in to your account.</p>

      <form
        id="formAuthentication"
        className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework"
        action="index.html"
        method="POST"
        noValidate="novalidate"
      >
        <div className="mb-3 fv-plugins-icon-container">
          <label htmlFor="email" className="form-label">
            Email or Username
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            name="email-username"
            autoFocus=""
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
        </div>
        <div className="mb-3 form-password-toggle fv-plugins-icon-container">
          <div className="d-flex justify-content-between">
            <label className="form-label" htmlFor="password">
              Password
            </label>
            {/* <a href="auth-forgot-password-cover.html">
        <small>Forgot Password?</small>
      </a> */}
          </div>
          <div className="input-group input-group-merge has-validation">
            <input
              type="password"
              id="password"
              className="form-control"
              name="password"
              aria-describedby="password"
            />
            <span className="input-group-text cursor-pointer">
              <i className="ti ti-eye-off"></i>
            </span>
          </div>
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              id="remember-me"
            />
            <label className="form-check-label" htmlFor="remember-me">
              {" "}
              Remember Me{" "}
            </label>
          </div>
        </div>
        <button className="btn btn-primary d-grid w-100 waves-effect waves-light">
          Sign in
        </button>
        <input type="hidden" />
      </form>

      <p className="text-center">
        <span>New on our platform?</span>{" "}
        <a href="auth-register-cover.html">
          <span>Create an account</span>
        </a>
      </p>

      <div className="divider my-4"></div>
    </>
  );
};

export default Login;
