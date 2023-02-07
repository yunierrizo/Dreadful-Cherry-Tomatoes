// import logo from "./rviewer-logo.svg";
import styles from "./Footer.module.css";
import logo from "../../assets/logo/deadfulLogo.svg";
import appStoreLogo from "../../assets/button/app store.svg";
import googlePlayLogo from "../../assets/button/google play.svg";
import Typography from "@mui/material/Typography";

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img src={logo} alt="deadfulLogo" />
            </div>

            <div className={styles.download}>
                <a href="#">
                    <img src={appStoreLogo} alt="appStoreLogo" />
                </a>
                <a href="#">
                    <img src={googlePlayLogo} alt="googlePlayLogo" />
                </a>
            </div>

            <Typography variant="body2">
                © Copyright 2022 Dreadful Tomatoes. All rights reserved.
            </Typography>

            {/* <img width={80} src={logo} className={styles.rviewerLogo} alt="Rviewer logo"/> */}
        </footer>
    );
}
