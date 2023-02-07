import { useState } from "react";
import styles from "./Home.module.css";
import MoviesGrid from "./components/MoviesGrid/MoviesGrid";

interface Movies {
    entries: Array<{
        description: string;
        images: {
            posterArt: {
                width: number;
                height: number;
                url: string;
            };
        };
        releaseYear: number;
        title: string;
    }>;
}

export function Home({ title }) {
    const [movies, setMovies] = useState<Movies>();
    return (
        <div className={styles.home}>
            {title !== "" ? (
                <h3>Search Result ({movies?.entries.length}):</h3>
            ) : (
                <h3>Popular Movies</h3>
            )}

            <MoviesGrid title={title} movies={movies} setMovies={setMovies} />
        </div>
    );
}
