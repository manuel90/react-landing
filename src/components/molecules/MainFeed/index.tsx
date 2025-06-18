import React from "react";

import styles from "./MainFeed.module.scss";
import Link from "next/link";

export const MainFeed: React.FC = () => {
  return (
    <div className={styles.boxMainFeed}>
      <div className={styles.wrapContent}>
        <div className={styles.wrapText}>
          <small>What&apos;s your opinion on</small>
          <h3>Pope Francis?</h3>
          <p>
            He&apos;s talking togh clergy sexual abuse, but is he just another
            papal pervert protector? (thumbs down) or a true pedophile punishing
            pontiff? (thumbs up)
          </p>
          <span className={styles.moreInfo}>
            <Link href="#more" target="_blank">
              More information
            </Link>
          </span>
          <h5>What&apos;s Your Veredict?</h5>
        </div>
        <div className={styles.bgPope}></div>
        <div className={styles.bgGray}></div>
      </div>
      <div className={styles.wrapButtons}>
        <button
          className={`${styles.btn} ${styles.btnThumb} ${styles.btnThumbUp}`}
        >
          <i></i>
        </button>
        <button
          className={`${styles.btn} ${styles.btnThumb} ${styles.btnThumbDown}`}
        >
          <i></i>
        </button>
      </div>
    </div>
  );
};
