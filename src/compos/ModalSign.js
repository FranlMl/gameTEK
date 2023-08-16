import { faL } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useState, useEffect } from "react";

const ModalSign = ({ closeModal }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post("");
      } catch (error) {
        console.log();
      }
    };
  }, []);

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <form action="">
          <button
            onClick={() => {
              closeModal(false);
            }}
          >
            {" "}
            X{" "}
          </button>

          <h1> Modal </h1>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />

          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </form>
      </div>
    </div>
  );
};

export default ModalSign;
