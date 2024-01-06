import { FC } from "react";
import Button from "../../components/general/Button";
import { useNavigate } from "react-router-dom";

import styles from "./tool.module.css";

const Tool: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className={styles.main}>
        <ul>
          <li>
            <div
              className={styles.item}
              onClick={(_) => {
                navigate("./image-minimize");
              }}
            >
              图片压缩
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Tool;
