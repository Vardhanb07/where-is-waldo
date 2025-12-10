import { useState } from "react";
import { useNavigate } from "react-router";
import instance from "../utils/api";

export default function RegisterContent() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  return (
    <div className="font-jbmono text-2xl">
      <h1 className="text-center mt-3 mb-4">
        Please enter your username to continue
      </h1>
      <form
        className="flex flex-col justify-center items-center gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          const response = await instance.post("/player", {
            username: username,
          });
          localStorage.setItem("playerId", response.data.playerId);
          navigate("/");
        }}
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            name="username"
            id="username"
            className="border outline-0 p-3"
            required
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="border px-4 py-2 cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
}
