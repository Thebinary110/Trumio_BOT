import React, { useState, useEffect } from "react";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";

///INTERNAL IMPORT
import { useStateContext } from "../../Context/index";
const Sitting = () => {
  const [user, setUser] = useState();
  const { userMembership } = useStateContext();

  useEffect(() => {
    const str = localStorage.getItem("userDetail");
    const parsedObj = JSON.parse(str);

    if (parsedObj?.name) {
      setUser(parsedObj);
    }
  }, []);

  const [userNew, setUserNew] = useState({
    name: user?.name || "",
    surname: "",
    email: user?.email || "",
    password: user?.password || "",
    passwordConfirm: user?.passwordConfirm || "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUserNew({ ...userNew, [fieldName]: e.target.value });
  };

  const updateUser = () => {
    const jsonObj = JSON.stringify(userNew);
    localStorage.setItem("userDetail", jsonObj);
    window.location.reload();
  };

  return (
    <div
      class="tab-pane fade"
      id="settings"
      role="tabpanel"
      aria-labelledby="settings"
      tabindex="0"
    >
      <div class="main-wrapper p-0">
        <div class="fixed-header">
          <div class="d-flex align-items-center gap-2">
            <button
              class="navbar-toggler d-md-none d-block"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mainnavbarNav"
              aria-controls="mainnavbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="iconsax" data-icon="text-align-justify"></i>
            </button>
            <a href="index.html" class="logo-icon d-flex d-md-none">
              <img src="assets/svg/logo-icon.svg" class="img-fluid" />
            </a>
            <h3>Settings</h3>
          </div>
          <a class="premium-btn" data-cursor="pointer" href="">
            <i class="iconsax" data-icon="crown-2"></i>
            <MdPaid /> Get
            <span>premium</span>
          </a>
        </div>
        <div class="main-section d-flex gap-4 flex-column">
          <div class="container card p-0">
            <div class="card-header">
              <h3 class="text-white">My account</h3>
            </div>
            <div class="card-body px-sm-4 px-3">
              <div class="my-account">
                <div class="user-detail"></div>
                <div class="user-main">
                  <div class="user-profile">
                    <img src="" class="img-fluid" />
                    <i class="iconsax" data-icon="camera"></i>
                  </div>
                  <div class="user-option">
                    <h4>{user?.name}</h4>
                    <p>{user?.email}</p>
                  </div>
                </div>

                <form class="msger-inputarea mb-0">
                  <div class="row">
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label for="firstname" class="form-label">
                          First Name
                        </label>
                        <input
                          type="email"
                          class="msger-input"
                          id="firstname"
                          placeholder={user?.name}
                          onChange={(e) => handleFormFieldChange("name", e)}
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label for="lastname" class="form-label">
                          Last Name
                        </label>
                        <input
                          type="email"
                          class="msger-input"
                          id="lastname"
                          placeholder={user?.surname}
                          onChange={(e) => handleFormFieldChange("surname", e)}
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label for="emailid" class="form-label">
                          Email address
                        </label>
                        <input
                          type="email"
                          class="msger-input"
                          id="emailid"
                          placeholder={user?.email}
                          onChange={(e) => handleFormFieldChange("email", e)}
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-footer">
              <div class="setting-btn">
                <button onClick={() => updateUser()} class="select-plan">
                  Update
                </button>
                <button class="no-select-plan select-plan">Cancel</button>
              </div>
            </div>
          </div>

          {userMembership && userMembership.membershipId != 0 && (
            <div class="container card p-0">
              <div class="card-header">
                <h3 class="text-white">Membership</h3>
              </div>
              <div class="card-body px-sm-4 px-3">
                <div class="my-account">
                  <form class="msger-inputarea mb-0">
                    <div class="row">
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label for="firstname" class="form-label">
                            Membership Plain
                          </label>
                          <input
                            type="email"
                            class="msger-input"
                            id="firstname"
                            placeholder={
                              userMembership.membershipId == 1
                                ? "One Month"
                                : userMembership.membershipId == 2
                                ? "Six Months"
                                : userMembership.membershipId == 3
                                ? "One Year"
                                : ""
                            }
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label for="lastname" class="form-label">
                            MemberShip Address
                          </label>
                          <input
                            type="email"
                            class="msger-input"
                            id="lastname"
                            placeholder={userMembership.addressUser}
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label for="lastname" class="form-label">
                            MemberShip Cost
                          </label>
                          <input
                            type="email"
                            class="msger-input"
                            id="lastname"
                            placeholder={
                              userMembership.membershipId == 1
                                ? "1 Matic"
                                : userMembership.membershipId == 2
                                ? "3 Matic"
                                : userMembership.membershipId == 3
                                ? "5 Matic"
                                : ""
                            }
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label for="lastname" class="form-label">
                            MemberShip ID
                          </label>
                          <input
                            type="email"
                            class="msger-input"
                            id="lastname"
                            placeholder={userMembership.id}
                          />
                        </div>
                      </div>
                      <div class="col-sm-6 col-12">
                        <div class="mb-3">
                          <label for="lastname" class="form-label">
                            MemberShip Expired
                          </label>
                          <input
                            type="email"
                            class="msger-input"
                            id="lastname"
                            placeholder={`${userMembership.expireDate || ""}`}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}

          <div class="container card p-0">
            <div class="card-header">
              <h3 class="text-white">Change password</h3>
            </div>
            <div class="card-body px-sm-4 px-3">
              <div class="my-account">
                <form class="msger-inputarea mb-0">
                  <div class="row">
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label for="firstname" class="form-label">
                          New Password
                        </label>
                        <input
                          type="email"
                          class="msger-input"
                          id="firstname"
                          placeholder="new password"
                          onChange={(e) => handleFormFieldChange("password", e)}
                        />
                      </div>
                    </div>
                    <div class="col-sm-6 col-12">
                      <div class="mb-3">
                        <label for="lastname" class="form-label">
                          Confirm password
                        </label>
                        <input
                          type="email"
                          class="msger-input"
                          id="lastname"
                          placeholder=" Confirm password"
                          onChange={(e) =>
                            handleFormFieldChange("passwordConfirm", e)
                          }
                        />
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div class="card-footer">
              <div class="setting-btn">
                <button onClick={() => updateUser()} class="select-plan">
                  Update password
                </button>
                <button class="no-select-plan select-plan">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sitting;
