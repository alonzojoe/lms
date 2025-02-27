import { useId } from "react";

const Register = () => {
  const elId = useId();

  return (
    <>
      <h3 className="mb-1 fw-bold">Account Registration</h3>
      <p className="mb-4">Create your account</p>

      <form className="mb-3 fv-plugins-bootstrap5 fv-plugins-framework">
        <div className="mb-3 fv-plugins-icon-container">
          <label htmlFor={`${elId}-name`} className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id={`${elId}-name`}
            name="name"
            autoFocus=""
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
        </div>
        <div className="mb-3 fv-plugins-icon-container">
          <label htmlFor={`${elId}-email`} className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id={`${elId}-email`}
            name="email"
            autoFocus=""
          />
          <div className="fv-plugins-message-container fv-plugins-message-container--enabled invalid-feedback"></div>
        </div>
        <div className="mb-3 form-password-toggle fv-plugins-icon-container">
          <div className="d-flex justify-content-between">
            <label className="form-label" htmlFor={`${elId}-password`}>
              Password
            </label>
            {/* <a href="auth-forgot-password-cover.html">
            <small>Forgot Password?</small>
          </a> */}
          </div>
          <div className="input-group input-group-merge has-validation">
            <input
              type="password"
              id={`${elId}-password`}
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

        <div className="mb-3 form-password-toggle fv-plugins-icon-container">
          <div className="d-flex justify-content-between">
            <label className="form-label" htmlFor={`${elId}-cpassword`}>
              Confirm Password
            </label>
            {/* <a href="auth-forgot-password-cover.html">
            <small>Forgot Password?</small>
          </a> */}
          </div>
          <div className="input-group input-group-merge has-validation">
            <input
              type="password"
              id={`${elId}-cpassword`}
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
        <button className="btn btn-primary d-grid w-100 waves-effect waves-light">
          Sign up
        </button>
        <input type="hidden" />
      </form>

      <p className="text-center">
        <span>Already have an account?</span>{" "}
        <a href="auth-register-cover.html">
          <span>Click here to log in</span>
        </a>
      </p>

      <div className="divider my-4"></div>
    </>
  );
};

export default Register;
