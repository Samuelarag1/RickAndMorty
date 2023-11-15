import { React, useState } from "react";

export default function Forms({ login }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    login(userData);
  };

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Login</h1>
      <form
        onSubmit={handleSubmit}
        style={{ textAlign: "center", lineHeight: "40px" }}
      >
        <label>Username:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <br />

        <label>Password:</label>
        <input
          type="Password"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <br />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
