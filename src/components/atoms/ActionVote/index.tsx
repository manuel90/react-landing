import React from "react";

import { ButtonVote } from "@/components/atoms/ButtonVote";

import useActionVote from "./useActionVote";

import styles from "./ActionVote.module.scss";
import { ValsPercentange } from "@/interfaces";

export type ActionVoteProps = {
  id: number;
  setIsVoting: (isVoting: boolean) => void;
  valsThumbs: ValsPercentange;
  setValsThumbs: (newVals: ValsPercentange) => void;
};

export const ActionVote: React.FC<ActionVoteProps> = ({
  id,
  setIsVoting,
  valsThumbs,
  setValsThumbs,
}) => {
  const { selection, selectThumb, onVote } = useActionVote(
    id,
    setIsVoting,
    valsThumbs,
    setValsThumbs
  );
  return (
    <>
      <div className={styles.wrapSelection}>
        <span
          className={`${styles.wrapRadioThumb} ${styles.thumbUp} ${
            selection == "up" ? styles.selected : ""
          }`}
          onClick={() => selectThumb("up")}
        >
          <i></i>
        </span>
        <span
          className={`${styles.wrapRadioThumb} ${styles.thumbDown} ${
            selection == "down" ? styles.selected : ""
          }`}
          onClick={() => selectThumb("down")}
        >
          <i></i>
        </span>
      </div>
      <ButtonVote onClick={onVote}>Vote Now</ButtonVote>
      <div className="clr"></div>
    </>
  );
};
