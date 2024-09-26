import React, { useState, useEffect } from "react";

const Login = () => {
  const [user, setUser] = useState();

  useEffect(() => {
    const str = localStorage.getItem("userDetail");
    const parsedObj = JSON.parse(str);

    if (parsedObj?.name) {
      setUser(parsedObj);
    }
  }, []);

  console.log(user);
  return (
    <div
      class="tab-pane fade show active"
      id="login-tab-pane"
      role="tabpanel"
      aria-labelledby="login-tab"
      tabindex="0"
    >
      <div class="auth-form">
        {user ? (
          ""
        ) : (
          <>
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
              />
            </div>
            <div class="mb-2 form-group">
              <i class="iconsax" data-icon="lock-2"></i>
              <label for="password" class="form-label">
                Password
              </label>
              <input
                placeholder="Enter your password"
                type="password"
                class="form-control"
                id="password"
              />
            </div>
          </>
        )}

        <a
          href={user ? "/chat" : ""}
          data-cursor="pointer"
          class="btn-solid w-100 text-center mt-3"
        >
          {user ? "Start Chatting" : "Log me in"}
        </a>

        {user ? (
          ""
        ) : (
          <h4 class="text-title text-center mt-2">
            Don’t have an account ?<a data-cursor="pointer">Sign up</a>
          </h4>
        )}
      </div>
    </div>
  );
};

export default Login;
