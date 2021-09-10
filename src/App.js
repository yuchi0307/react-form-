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
  
  let content = (<p style={{textAlign: 'center'}}>No users found. Maybe add one?</p>)
  
  if(usersInfo.length!==0){
    content =  (<UserList users={usersInfo} />)
  }

  return (
    <div>
      <section >
        <AddUsers onAddUser={addUserHandler} />
        {content}    
      </section>
    </div>
  );
}

export default App;
