import Typography from "@mui/material/Typography";

const DescriptionCard = ({ description, open }) => {
    console.log(description);
    return open ? (
        <Typography gutterBottom variant="body1" component="div">
            {/* {movie.description} */}
            {description}
        </Typography>
    ) : (
        <></>
    );
};

export default DescriptionCard;
