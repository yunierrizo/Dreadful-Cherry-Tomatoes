// import logo from "./rviewer-logo.svg";
import styles from "./Header.module.css";
import Logo from "./components/Logo/Logo";
import Search from "./components/Search/Search";

export function Header() {
    return (
        <header className={styles.header}>
            <Logo />

            <Search />
            {/* <img width={80} src={logo} className={styles.rviewerLogo} alt="Rviewer logo"/> */}
        </header>
    );
}
