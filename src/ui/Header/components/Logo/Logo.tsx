import styles from "../../Header.module.css";
import logo from "../../../../assets/logo/deadfulLogo.svg";

const Logo = () => {
    return (
        <div className={styles.logo}>
            <img src={logo} alt="deadfulLogo" />
        </div>
    );
};

export default Logo;
