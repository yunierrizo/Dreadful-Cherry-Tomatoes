import styles from "./Home.module.css";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";

export function Home() {
    return (
        <div className={styles.home}>
            <h3>Popular Movies</h3>

            <MoviesGrid />
        </div>
    );
}
