import { FC } from "react";
import Button from "../../components/general/Button";
import { NavLink } from "react-router-dom";

import styles from "./app.module.css";

const App: FC = () => {
  return (
    <div className={styles.main}>
      <ul>
        <li>
          <NavLink
            to="/tool"
            style={({ isActive, isPending, isTransitioning }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: "inherit",
                textDecoration: "none",
                viewTransitionName: isTransitioning ? "slide" : "",
              };
            }}
          >
            <Button>工具库</Button>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default App;
