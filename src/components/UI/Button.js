import styles from "./Button.module.css";

// 作為可以重複利用的子層按鈕
const Button = (props) => {
  return (
    <button
      className={styles.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
