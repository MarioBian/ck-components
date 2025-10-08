import styles from "./Header.module.css";
import logoUrl from "../../../assets/logo.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <img src={logoUrl} alt="Gomoku" className={styles.logo} />
      </div>
    </header>
  );
};

export default Header;
