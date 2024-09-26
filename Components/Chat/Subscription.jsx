import React, { useState, useEffect } from "react";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";
import { ethers } from "ethers";
///
import { useStateContext } from "../../Context/index";
const Subscription = () => {
  const { contractMembership, buyMembership } = useStateContext();

  const callMemberShip = async (memberShip_id) => {
    console.log(memberShip_id);
    const bookMembership = await buyMembership(memberShip_id);
  };

  return (
    <div
      class="tab-pane fade"
      id="subscription"
      role="tabpanel"
      aria-labelledby="subscription"
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
            <h3>Subscription</h3>
          </div>
          <a class="premium-btn" data-cursor="pointer" href="">
            <i class="iconsax" data-icon="crown-2"></i>
            <MdPaid /> Get
            <span>premium</span>
          </a>
        </div>
        <div class="main-section">
          <div class="container card p-0">
            <div class="card-header">
              <h3 class="text-white">Choose Period of Plan :</h3>
              <div class="header-option d-none d-md-flex">
                <label for="currency" class="form-label text-white">
                  Currency :
                </label>
                <select
                  class="form-select"
                  aria-label="Default select example"
                  id="currency"
                >
                  <option selected>Us Dollar</option>
                  <option value="1">Euro</option>
                  <option value="2">Yuan</option>
                </select>
              </div>
            </div>
            <div class="card-body px-sm-4 px-3">
              <div class="row justify-content-center">
                {contractMembership?.map((membership, i) => (
                  <div key={i + 1} class="col-xl-4 col-md-6 col-12">
                    <div class="card inner-card">
                      <div class="card-header">
                        <img
                          src={`assets/svg/pricing/${
                            membership.memberShip_name == "One Month"
                              ? "weekly.svg"
                              : membership.memberShip_name == "Six Month"
                              ? "monthly.svg"
                              : "yearly.svg"
                          }`}
                          class="img-fluid"
                          alt=""
                        />
                        <h4 class="text-white mb-0">
                          {membership.memberShip_name}
                        </h4>
                      </div>
                      <div class="card-body">
                        <h3>{membership.memberShip_cost} MATIC</h3>
                        <ul>
                          <li>Intelligent AI chatbot</li>
                          <li>Unlimited answer of question</li>
                          <li>Avoid buying coin forever</li>
                          <li>No ad in background</li>
                          <li>Early access to new features</li>
                        </ul>
                        <button
                          onClick={() =>
                            callMemberShip(membership.memberShip_id)
                          }
                          class="select-plan"
                        >
                          Select this plan
                        </button>
                      </div>
                    </div>
                  </div>
                ))}

                {/* <div class="col-xl-4 col-md-6 col-12">
                  <div class="card inner-card">
                    <div class="card-header">
                      <img
                        src="assets/svg/pricing/monthly.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <h4 class="text-white mb-0">Monthly Plan</h4>
                    </div>
                    <div class="card-body">
                      <h3>$3.99 only/-</h3>
                      <ul>
                        <li>Intelligent AI chatbot</li>
                        <li>Unlimited answer of question</li>
                        <li>Avoid buying coin forever</li>
                        <li>No ad in background</li>
                        <li>Early access to new features</li>
                      </ul>
                      <button class="no-select-plan select-plan">
                        <i class="iconsax" data-icon="thick-arrow-right"></i>
                        Select this plan
                      </button>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-md-6 col-12">
                  <div class="card inner-card">
                    <div class="card-header">
                      <img
                        src="assets/svg/pricing/yearly.svg"
                        class="img-fluid"
                        alt=""
                      />
                      <h4 class="text-white mb-0">Lifetime Plan</h4>
                    </div>
                    <div class="card-body">
                      <h3>$3.99 only/-</h3>
                      <ul>
                        <li>Intelligent AI chatbot</li>
                        <li>Unlimited answer of question</li>
                        <li>Avoid buying coin forever</li>
                        <li>No ad in background</li>
                        <li>Early access to new features</li>
                      </ul>
                      <button class="no-select-plan select-plan">
                        <i class="iconsax" data-icon="thick-arrow-right"></i>
                        Select this plan
                      </button>
                    </div>
                  </div>
                </div> */}
              </div>
              <div class="subscription-continue">
                <button class="no-select-plan select-plan">Continue</button>
                <a href="#" class="text-white">
                  Continue with limited version
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
