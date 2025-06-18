"use client";

import React, { useState } from "react";

import styles from "./MainMenu.module.scss";
import Link from "next/link";

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
            <Link href="#">Past Trials</Link>
          </li>
          <li>
            <Link href="#">How It Works</Link>
          </li>
          <li>
            <Link href="#">Log In / Sign Up</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
