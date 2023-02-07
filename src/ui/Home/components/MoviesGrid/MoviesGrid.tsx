import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";
// import Pagination from "@mui/material/Pagination";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "../../Home.module.css";

const MoviesGrid = ({ title, movies, setMovies }) => {
    const [open, setOpen] = useState({ movieIndex: null, open: false });
    // const perPage = 10;

    useEffect(() => {
        axios.get(process.env.REACT_APP_API_URI || "").then((response) => {
            if (title !== "") {
                const array = [
                    {
                        description: "",
                        images: {
                            posterArt: {
                                width: 0,
                                height: 0,
                                url: "",
                            },
                        },
                        releaseYear: 0,
                        title: "",
                    },
                ];

                response.data.entries.find((item) => {
                    if (
                        item.title.toLowerCase().includes(title.toLowerCase())
                    ) {
                        array.push(item);
                    }
                });
                array.shift();
                setMovies({ entries: array });
            } else {
                setMovies(response.data);
            }
        });
    }, [title]);

    const handleOpen = (index, open) => {
        // return <DescriptionCard open={true} description={movie.description} />;
        setOpen({ movieIndex: index, open: open });
    };

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
