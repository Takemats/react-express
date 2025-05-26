import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const url = "/users";
  const logoutUrl = "/logout"; // Define your logout URL
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(url, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        console.log("err");
      });
  }, []);

  const handleLogout = () => {
    fetch(logoutUrl, { method: "GET" })
      .then((res) => {
        if (res.ok) {
          console.log("Logout successful");
          setUsers([]);
        } else {
          console.log("Logout failed");
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Error during logout");
      });
  };

  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user, index) => (
        <div key={index}>{user.name}</div>
      ))}
      <button onClick={handleLogout}>ログアウト</button>
    </div>
  );
};

export default App;
