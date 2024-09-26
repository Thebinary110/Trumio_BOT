import React from "react";
import { FaStar } from "react-icons/fa";
import { MdPaid, MdSettings, MdClose } from "react-icons/md";

const Modal = () => {
  return (
    <div class="modal rating-modal fade" id="staticBackdrop">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Pro Membership
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <MdClose className="mobil_custom_menu" />
            </button>
          </div>

          <div class="modal-body">
            <p>Six Months Plan</p>
            <p>
              The most popular plan, loved by billions of users, at an
              affordable price
            </p>
            <p>Only: 3 MATIC</p>
            <ul
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="200"
              class="star-rating"
            >
              {[1, 2, 3, 4, 5].map((el, i) => (
                <li>
                  <FaStar />
                </li>
              ))}
            </ul>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="modal-submit m-0"
              data-bs-dismiss="modal"
            >
              Upgrade
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
