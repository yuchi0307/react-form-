import { useState } from "react";
import styles from "./AddUsers.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error ,setError] = useState();

  const onNameChangeHandler = (e) => {
    if (e.target.value.trim().length > 0) {
      setEnteredName(e.target.value);
    }
  };

  const onAgeChangeHandler = (e) => {
    if (e.target.value > 0) {
      setEnteredAge(e.target.value.toString());
    }
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: ':((',
        message: 'non-empty input :p'});
      return;
    }

    if (+enteredAge < 0) {
      setError({
        title: 'Booo!',
        message: 'age should > 0'
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
    
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && 
        <ErrorModal 
        title={error.title}
        message={error.message} 
        onConfirm={errorHandler}/>}
        
      <Card className={styles.input}>
        {/* 這邊的className是由Card組件prop而來的 
        因為Card 是我們客製化的組件，不如普通html會有className等屬性在react中讀得懂css應用，
        客製化組件完全不知道className什麼碗糕。*/}
        <form onSubmit={addUserHandler}>
          <label>User Name</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={onNameChangeHandler}
          ></input>
          <br></br>
          <label>Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={onAgeChangeHandler}
          ></input>
          <br></br>
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
