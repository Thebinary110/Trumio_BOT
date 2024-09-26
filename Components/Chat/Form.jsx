import React from "react";
import { BiTransferAlt, BiMenu } from "react-icons/bi";
import { MdDeleteSweep, MdPaid, MdSend } from "react-icons/md";
import { AiFillAudio, AiFillPicture } from "react-icons/ai";
const Form = ({ close, proMember, address, freeTrail }) => {
  const today = Date.now();
  let date = new Date(today);
  const expiredDate = date.toLocaleDateString("en-US");

  return (
    <form id="form_input_data" class="msger-inputarea ">
      {proMember?.addressUser == address &&
        proMember?.expireDate !== expiredDate && (
          <>
            <button
              class="navbar-toggler d-lg-none d-block msger-send-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <BiMenu className="icon_size" />
            </button>
            <input
              name="prompt"
              type="text"
              class="msger-input"
              placeholder="Ask any question here..."
              rows="1"
              cols="1"
            />
            <a href="" class="scan-icon">
              <AiFillPicture className="icon_size" />
            </a>
            <a href="" class="mic-icon">
              <AiFillAudio className="icon_size" />
            </a>
            <button
              onClick={(e) => close(e)}
              type="submit"
              class="msger-send-btn"
            >
              <MdSend className="icon_size" />
            </button>
          </>
        )}
      {freeTrail <= 4 && (
        <>
          <button
            class="navbar-toggler d-lg-none d-block msger-send-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <BiMenu className="icon_size" />
          </button>
          <input
            name="prompt"
            type="text"
            class="msger-input"
            placeholder="Ask any question here..."
            rows="1"
            cols="1"
          />
          <a href="" class="scan-icon">
            <AiFillPicture className="icon_size" />
          </a>
          <a href="" class="mic-icon">
            <AiFillAudio className="icon_size" />
          </a>
          <button
            onClick={(e) => close(e)}
            type="submit"
            class="msger-send-btn"
          >
            <MdSend className="icon_size" />
          </button>
        </>
      )}
    </form>
  );
};

export default Form;
