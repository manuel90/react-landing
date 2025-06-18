"use client";

import React, { useState } from "react";

import styles from "./MainMenu.module.scss";

export const MainMenu: React.FC = () => {
  const [isOpened, setIsOpened] = useState(false);

  const onToggleMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <nav className={styles.menuNav}>
        <span className={styles.menuBurguer} onClick={onToggleMenu}>
          Menu
        </span>
        <ul className={isOpened ? styles.open : ""}>
          <li>
            <a href="#">Past Trials</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Log In / Sign Up</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
