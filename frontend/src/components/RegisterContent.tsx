import { useState } from "react";
import { useNavigate } from "react-router";
import instance from "../utils/api";
import Popup from "./Popup";
import * as z from "zod";

export default function RegisterContent() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState("");
  const responseSchema = z.object({
    playerToken: z.string().min(1),
  });
  const formSchema = z.object({
    playerUsername: z.string().min(1),
  });
  return (
    <div className="font-jbmono text-2xl">
      <h1 className="text-center mt-3 mb-4">
        Please enter your username to continue
      </h1>
      <form
        className="flex flex-col justify-center items-center gap-5"
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            const { playerUsername } = formSchema.parse({
              playerUsername: username,
            });
            const response = await instance.post("/player", {
              username: playerUsername,
            });
            const { playerToken } = responseSchema.parse(response.data);
            localStorage.setItem("player-token", playerToken);
            navigate("/");
          } catch (err: unknown) {
            setShowPopup(true);
            setError("Please try again!");
          }
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
      {showPopup && (
        <Popup
          content={error}
          showPopup={showPopup}
          setShowPopup={setShowPopup}
        />
      )}
    </div>
  );
}
