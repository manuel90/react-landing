import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <>
      <footer className={styles.footer}>
        &copy;
        <a
          className={styles.link}
          href="https://manuel90.github.io"
          target="_blank"
        >
          by Manuel
        </a>
      </footer>
    </>
  );
};
