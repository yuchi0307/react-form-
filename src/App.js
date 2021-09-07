import React, { useState } from "react";
import AddUsers from "./components/Users/AddUsers";
import UserList from "./components/Users/UserList";



function App(props) {
  const [usersInfo, setUsersInfo] = useState([]);
  

  const addUserHandler = (uName, uAge) => {
    setUsersInfo((prevUsers) => {
     return [...prevUsers, { id:Math.random().toString(), name:uName, age:uAge} ];
    });

  };
  

  return (
    <div>
      <section >
        <AddUsers onAddUser={addUserHandler} />
        <UserList users={usersInfo} />        
      </section>
    </div>
  );
}

export default App;
