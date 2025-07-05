import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth"; // ✅ path check kar lena


function AuthModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();
const { storetokenInLs } = useAuth(); // ✅ context se token setter

  const isValidSCETEmail = (email) => {
    const regex = /^[a-z]+\.(it|co|ai)\d{2}@scet\.ac\.in$/i;
    return regex.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!isValidSCETEmail(email)) {
      setErrorMsg("⚠ Please use valid SCET email (e.g. krisha.it22@scet.ac.in)");
      return;
    }

    if (!isLogin && username.trim().length < 3) {
      setErrorMsg("⚠ Username must be at least 3 characters");
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/auth/${isLogin ? "login" : "signup"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(isLogin ? { email, password } : { username, email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMsg("❌ " + (data.extraDetails || data.message || "Authentication failed"));
        return;
      }

      // Save token and user
      storetokenInLs(data.token);
      localStorage.setItem("scet-user", JSON.stringify(data.user));


      if (!isLogin) {
   // Clear fields after signup
  setUsername("");
  setEmail("");
  setPassword("");
  setIsLogin(true);
  setErrorMsg("✅ Signup successful! Please login.");

      } else {
        onClose?.(); // Modal close
        navigate("/dashboard");
      }
    } catch (err) {
      setErrorMsg("❌ Server Error. Try again.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white rounded-2xl w-full max-w-md p-6 shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-gray-600 text-2xl"
        >
          &times;
        </button>

        <h2 className="text-xl font-bold text-center text-gray-800 mb-4">
          {isLogin ? "Login to SCET Nexus" : "Create SCET Account"}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4 text-black">
          {!isLogin && (
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
              className="w-full px-4 py-2 border rounded"
              required
            />
          )}

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="SCET Email"
            className="w-full px-4 py-2 border rounded"
            required
          />

          <div className="relative">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full px-4 py-2 border rounded pr-10"
              required
            />
            <button
              type="submit"
              className="absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700"
            >
              →
            </button>
          </div>

          {errorMsg && (
            <p className="text-sm text-center text-red-600">{errorMsg}</p>
          )}
        </form>

        <p className="text-center mt-4 text-sm text-gray-600">
          {isLogin ? "First time here?" : "Already registered?"}{" "}
          <span
            className="text-blue-600 cursor-pointer hover:underline"
            onClick={() => {
              setIsLogin(!isLogin);
              setErrorMsg("");
            }}
          >
            {isLogin ? "Sign up" : "Login"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default AuthModal;
