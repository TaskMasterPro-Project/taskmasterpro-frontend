import { purple, blue, green, yellow, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
        },
        secondary: {
            main: "#FF4500",
        },
        background: {
            default: "#DAE0E6",
        },
    }
});

export default theme;
