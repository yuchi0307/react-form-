import { useState } from "react";
import styles from "./AddUsers.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUsers = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [enteredValue, setEnterdValue] = useState({ enteredName, enteredAge });

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

  const submitHandler = (event) => {
    event.preventDefault();
    if (enteredName !== "" && enteredAge > 0) {
      setEnterdValue(enteredName, enteredAge);
    }
    props.onAddUser(enteredValue);
  };

  return (
    <Card className={styles.input}>
        {/* 這邊的className是由Card組件prop而來的 
        因為Card 是我們客製化的組件，不如普通html會有className等屬性在react中讀得懂css應用，
        客製化組件完全不知道className什麼碗糕。*/}
      <form onSubmit={submitHandler}>
        <label>User Name</label>
        <input id="username" type="text" onChange={onNameChangeHandler}></input>
        <br></br>
        <label>Age</label>
        <input id="age" type="number" onChange={onAgeChangeHandler}></input>
        <br></br>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
