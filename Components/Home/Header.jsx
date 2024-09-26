import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";

///INTERNAL IMPORT
import { useStateContext } from "../../Context/index";
const Header = () => {
  const { address, connectWallet } = useStateContext();
  const menuList = [
    {
      name: "Home",
      link: "/",
      style: "active",
    },
    {
      name: "Chat",
      link: "/chat",
      style: "",
    },
    {
      name: "About",
      link: "/",
      style: "",
    },
    {
      name: "Service",
      link: "/",
      style: "",
    },
    {
      name: "Price",
      link: "/",
      style: "",
    },
    {
      name: "Contact",
      link: "/",
      style: "",
    },
  ];
  return (
    <header>
      <button
        class="navbar-toggler d-xl-none d-inline navbar-menu-button"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#primaryMenu"
      >
        <span class="navbar-toggler-icon">
          <HiMenuAlt3 />
        </span>
      </button>
      <a href="index.html">
        <img src="assets/images/logo.svg" class="img-fluid" alt="logo" />
      </a>
      <nav class="header-nav-middle">
        <div class="main-nav navbar navbar-expand-xl navbar-light navbar-sticky">
          <div class="offcanvas offcanvas-collapse order-xl-2" id="primaryMenu">
            <div class="offcanvas-header navbar-shadow">
              <h5 class="mb-0">Back</h5>
              <button
                class="btn-close lead"
                type="button"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav">
                {menuList.map((menu, i) => (
                  <li class={`nav-item ${menu.style}`}>
                    <a class="nav-link" href={`${menu.link}`}>
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </nav>
      <a
        data-cursor="pointer"
        href="/login"
        class="btn btn-theme d-sm-inline-block d-none"
      >
        <span>Login Now</span>
      </a>
      <span className="new_space"></span>
      {address ? (
        <a
          href="/chat"
          data-cursor="pointer"
          class="btn btn-theme d-sm-inline-block d-none"
        >
          <span>ASK GPT</span>
        </a>
      ) : (
        <a
          onClick={() => connectWallet()}
          data-cursor="pointer"
          class="btn btn-theme d-sm-inline-block d-none"
        >
          <span>Connect</span>
        </a>
      )}
    </header>
  );
};

export default Header;
