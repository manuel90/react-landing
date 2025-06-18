import React from "react";

import styles from "./ThumbPercentage.module.scss";

export type ThumbPercProps = {
  percentage: number;
  type?: string;
};

export const ThumbPercentage: React.FC<ThumbPercProps> = ({
  percentage,
  type = "",
}) => {
  return (
    <div className={`${styles.wrapPercThumb} ${type ? styles[type] : ""}`}>
      <span className={styles.iconThumb}></span>
      <span className={styles.lblPerc}>{Math.floor(percentage)}%</span>
      <div className="clr"></div>
    </div>
  );
};
