import React from "react";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";
const History = () => {
  return (
    <div
      class="tab-pane fade"
      id="history"
      role="tabpanel"
      aria-labelledby="history"
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
            <h3>History</h3>
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
              <h3 class="text-white">Detailed History</h3>
              <form class="auth-form d-none d-md-block">
                <div class="form-group">
                  <i class="iconsax" data-icon="search-normal-2"></i>
                  <input
                    type="search"
                    class="form-control"
                    placeholder="Search here"
                  />
                </div>
              </form>
            </div>
            <div class="card-body px-sm-4 px-3">
              <ul class="history-sec">
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>What is app development ?</p>
                      <p class="d-sm-none d-inline-block">2 min ago</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Chat</li>
                      <li>2 min ago</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>Dino has sent you message.</p>
                      <p class="d-sm-none d-inline-block">50 min ago</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Image</li>
                      <li>50 min ago</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>Marvel has sent you an image.</p>
                      <p class="d-sm-none d-inline-block">Yesterday</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Personal</li>
                      <li>Yesterday</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>Wishes of father’s day</p>
                      <p class="d-sm-none d-inline-block">26 Mar, 2023</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Translation</li>
                      <li>26 Mar, 2023</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>Marvel has sent you an image.</p>
                      <p class="d-sm-none d-inline-block">25 Mar, 2023</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Social media</li>
                      <li>25 Mar, 2023</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>“How are you ?” Translate it</p>
                      <p class="d-sm-none d-inline-block">25 Mar, 2023</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Essay writing</li>
                      <li>25 Mar, 2023</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>
                        Include a hashtag in your caption for the goa photo and
                        some music suggestions.
                      </p>
                      <p class="d-sm-none d-inline-block">25 Mar, 2023</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Chat</li>
                      <li>25 Mar, 2023</li>
                    </ul>
                  </div>
                </li>
                <li class="history-main">
                  <div class="history-detail text-truncate">
                    <i class="iconsax" data-icon="message-text"></i>
                    <div>
                      <p>Write essay about “Cow”</p>
                      <p class="d-sm-none d-inline-block">23 Mar, 2023</p>
                    </div>
                  </div>
                  <div class="history-time d-sm-flex d-none">
                    <ul>
                      <li>Image</li>
                      <li>23 Mar, 2023</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
