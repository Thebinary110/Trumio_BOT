import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUser({ ...user, [fieldName]: e.target.value });
  };

  const createAccount = (e) => {
    e.preventDefault();
    if (user.name || user.email || user.password || user.passwordConfirm) {
      const jsonObj = JSON.stringify(user);
      localStorage.setItem("userDetail", jsonObj);
      window.location.reload();
    }
  };

  return (
    <div
      class="tab-pane fade"
      id="signup-tab-pane"
      role="tabpanel"
      aria-labelledby="signup-tab"
      tabindex="0"
    >
      <div class="auth-form">
        <div class="mb-3 form-group">
          <i class="iconsax" data-icon="user-1"></i>
          <label for="name" class="form-label">
            Name
          </label>
          <input
            type="name"
            placeholder="Enter your name"
            class="form-control"
            id="name"
            onChange={(e) => handleFormFieldChange("name", e)}
          />
        </div>
        <div class="mb-3 form-group">
          <i class="iconsax" data-icon="mail"></i>
          <label for="emailid" class="form-label">
            Email ID
          </label>
          <input
            type="email"
            placeholder="Enter your mail id"
            class="form-control"
            id="emailid"
            onChange={(e) => handleFormFieldChange("email", e)}
          />
        </div>
        <div class="mb-3 form-group">
          <i class="iconsax" data-icon="lock-2"></i>
          <label for="password" class="form-label">
            Password
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            class="form-control"
            id="password"
            onChange={(e) => handleFormFieldChange("password", e)}
          />
        </div>
        <div class="mb-3 form-group">
          <i class="iconsax" data-icon="lock-2"></i>
          <label for="password1" class="form-label">
            Confirm Password
          </label>
          <input
            placeholder="Enter your password"
            type="password"
            class="form-control"
            id="password1"
            onChange={(e) => handleFormFieldChange("passwordConfirm", e)}
          />
        </div>
        <a
          class="btn-solid w-100 text-center mt-4"
          onClick={(e) => createAccount(e)}
        >
          Sign up
        </a>
        <h4 class="text-title text-center mt-2">
          Already have an account
          <a data-cursor="pointer">Sign in</a>
        </h4>
      </div>
    </div>
  );
};

export default SignUp;
