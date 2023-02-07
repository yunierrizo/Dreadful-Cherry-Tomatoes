import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../Home.module.css";
import DescriptionCard from "../DescriptionCard/DescriptionCard";

const CardTitleStyles = {
    background: "#000000de",
    position: "absolute",
    bottom: "0px",
    color: "white",
    width: "100%",
    padding: "16px 0",
};

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

const MoviesGrid = () => {
    const [movies, setMovies] = useState<Movies>();
    const [open, setOpen] = useState({ movieIndex: null, open: false });
    // const perPage = 10;

    useEffect(() => {
        axios
            .get(process.env.REACT_APP_API_URI || "")
            .then((response) => setMovies(response.data));
    }, []);

    const handleOpen = (index, open) => {
        // return <DescriptionCard open={true} description={movie.description} />;
        setOpen({ movieIndex: index, open: open });
    };

    console.log(movies?.entries[0].description);
    return (
        <>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
            >
                {movies?.entries.map((movie, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                        <Card sx={{ maxWidth: 345 }}>
                            <CardActionArea
                                onMouseEnter={() => handleOpen(index, true)}
                                onMouseLeave={() => handleOpen(index, false)}
                            >
                                <CardMedia
                                    component="img"
                                    height="300"
                                    image={movie.images.posterArt.url}
                                    alt={movie.title}
                                />

                                {open.open && open.movieIndex === index ? (
                                    <CardContent
                                        className={styles.cardDescription}
                                    >
                                        <Typography variant="h6">
                                            {movie.title}
                                        </Typography>

                                        <Typography variant="body1">
                                            {movie.releaseYear}
                                        </Typography>

                                        <Typography variant="body1">
                                            {movie.description}
                                        </Typography>
                                    </CardContent>
                                ) : (
                                    <CardContent className={styles.cardTitle}>
                                        <Typography
                                            gutterBottom
                                            variant="body1"
                                            component="div"
                                        >
                                            {movie.title}
                                        </Typography>
                                    </CardContent>
                                )}
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>

            {/* <Pagination count={10} color="primary" /> */}
        </>
    );
};

export default MoviesGrid;
