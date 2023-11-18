import React, { useState } from "react";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        maxWidth: "250px",
        margin: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <label>User Name</label>
        <input type="text" placeholder="username" value={userName} onChange={(e) => setUserName(e.target.value)} />
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <label>Password</label>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>

      <button disabled={!userName || !password}>Login</button>
    </form>
  );
}

export default Login;
