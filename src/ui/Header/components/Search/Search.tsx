import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import styles from "../../Header.module.css";

const TextFieldStyles = {
    margin: "0 10rem",
    backgroundColor: "white",
    borderRadius: "5.57802px",
};

const Search = () => {
    return (
        <div className={styles.search}>
            <TextField
                style={TextFieldStyles}
                // label="Title"
                placeholder="Title"
                variant="outlined"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon style={{ color: "#c42521" }} />
                        </InputAdornment>
                    ),
                }}
                fullWidth
            />
        </div>
    );
};

export default Search;
