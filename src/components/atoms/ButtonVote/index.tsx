import React from "react";

import styles from "./ButtonVote.module.scss";

export const ButtonVote: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> = (props) => {
  return (
    <>
      <button {...props} className={`btn-plain ${styles.btnVoteNow}`}>
        {props.children}
      </button>
    </>
  );
};
