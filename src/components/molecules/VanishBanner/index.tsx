import React, { useState } from "react";
import { Container } from "react-bootstrap";

import styles from "./VanishBanner.module.scss";

export const VanishBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  const onVanishBanner = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsVisible(false);
  };

  if (!isVisible) {
    return <></>;
  }

  return (
    <>
      <Container>
        <article className={`${styles.vanishBanner} margin-section`}>
          <div className={styles.wrapVanishBanner}>
            <div className={styles.wrapTitle}>
              <h3>Speak out. Be heard</h3>
              <h2>Be counted</h2>
            </div>
            <div className={styles.text}>
              Rule of Thumb is a crowd sourced court of public opinion where
              anyone and everyone can speak out and speak freely. It&apos;s
              easy. You share your opinion. We analyze and put the data in a
              public report.
            </div>
            <button
              className={`${styles.close} btn-plain`}
              onClick={onVanishBanner}
            ></button>
            <div className="clr"></div>
          </div>
        </article>
      </Container>
    </>
  );
};
