import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDragon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import ModalSign from "./ModalSign";

const Header = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="header">
      <div className="header-box">
        <div className="header-box1">
          <FontAwesomeIcon icon={faDragon} className="dragon" />
          <h1> GameTEK</h1>
        </div>

        <div className="header-box2">
          <button>My Collection</button>

          <button
            onClick={() => {
              setModal(true);
            }}
          >
            {" "}
            Login
          </button>
        </div>

        <div className="redline"></div>

        {modal && <ModalSign closeModal={setModal} />}
      </div>
    </div>
  );
};

export default Header;
