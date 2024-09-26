import React, { useState, useEffect } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { BiTransferAlt, BiMenu } from "react-icons/bi";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";
import { AiFillAudio, AiFillPicture } from "react-icons/ai";
///INTERNAL IMPORT
import { Form } from "./index";
import { useStateContext } from "../../Context/index";
const Chat = () => {
  const [active, setActive] = useState("Ask anything");
  const [hide, setHide] = useState(true);
  const { Free, address } = useStateContext();
  const [proMember, setProMember] = useState({});
  const [freeTrail, setFreeTrail] = useState();

  const close = (e) => {
    e.preventDefault();
    setHide(false);
  };

  const productList = [
    "Ask anything",
    "Content writer",
    "Code generator",
    "Translate anything",
    "Social media",
    "Email generator",
    "Personal advise",
    "Password generator",
    "Travel/hangout",
    "Essay writer",
  ];

  const loadData = () => {
    const UserDetail = localStorage.getItem("UserDetail");
    const member = JSON.parse(UserDetail);
    setProMember(member);
    //FREE TRAIL
    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail);

    console.log(freeTrail);
  };

  useEffect(() => {
    loadData();
  }, []);

  const display = Free?.replace(/['"]+/g, "");

  return (
    <div
      class="tab-pane fade show active"
      id="chat"
      role="tabpanel"
      aria-labelledby="chat"
      tabindex="0"
    >
      <div class="main-wrapper">
        <nav class="navbar navbar-expand-lg bg-light p-0">
          <button
            class="navbar-toggler d-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="mobil_custom_menu" />
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <div class="inner-menu-panel">
              <button
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                class="inner-close d-block d-lg-none"
              >
                Back
              </button>
              <div class="search-box">
                <i class="iconsax" data-icon="search-normal-2"></i>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search here.."
                />
              </div>
              <ul class="inner-links-list" id="innerLink">
                {productList.map((product, i) => (
                  <li
                    key={i + 1}
                    onClick={() => setActive(product)}
                    class={product == active ? "active" : ""}
                  >
                    <a href="#!" data-title="Ask anything">
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div class="chat-header">
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
              <BiMenu className="mobil_custom_menu" />
            </button>
            <a href="index.html" class="logo-icon d-flex d-md-none">
              <img src="assets/svg/logo-icon.svg" class="img-fluid" />
            </a>
            <h3 id="targetDiv">{active}</h3>
          </div>
          <div class="header-option">
            {display == "Pro Member" ? (
              <a href="#">{display}</a>
            ) : (
              <a class="del-btn" data-cursor="pointer" href="">
                Free Left ( <span id="freeTry">{Free || 0}</span> / 5 )
              </a>
            )}

            <a
              class="premium-btn"
              id="subscriptionBtn"
              data-cursor="pointer"
              href="#!"
            >
              <MdPaid /> Get
              <span>premium</span>
            </a>
          </div>
        </div>
        <div class="main-chat">
          <div class="no-chat">
            {hide ? (
              <div>
                <img src="assets/svg/no-chat.svg" class="img-fluid" alt="" />
                <h3>
                  {" "}
                  {active == "Ask anything" ? "" : "Ask"} {active} chatbot
                </h3>
              </div>
            ) : (
              ""
            )}
          </div>

          <div id="chat_container"></div>

          <Form
            close={close}
            proMember={proMember}
            address={address}
            freeTrail={freeTrail}
          />
        </div>
      </div>
    </div>
  );
};

export default Chat;
