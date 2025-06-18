import React from "react";
import Link from "next/link";

import { Container } from "react-bootstrap";

import { MainMenu } from "@/components/molecules/MainMenu";
import { MainFeed } from "@/components/molecules/MainFeed";

import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.wrapHeader}>
      <div className={`${styles.bg} ${styles.bgPope}`}>
        <div className={styles.gradient}></div>
        <div className={styles.wrapHeaderContent}>
          <Container>
            <div className={styles.wrapLogo}>
              <div className={styles.wrapLogo}>
                <h1>
                  <Link href="/">Rule of Thumb.</Link>
                </h1>
              </div>
              <MainMenu />
            </div>
          </Container>
        </div>
        <MainFeed />
      </div>
    </header>
  );
};
