import { FC, MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

const Button: FC<{
  children?: ReactNode;
  onClick?: MouseEventHandler;
}> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
};

export default Button;
