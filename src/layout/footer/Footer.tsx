import { Box } from "@mui/system";
import React from "react";

type Props = {};

function Footer({}: Props) {
    return (
        <Box
            display="flex"
            padding="10px"
            sx={(theme) => ({
                backgroundColor: theme.palette.secondary.main,
            })}
        >
            Footer
        </Box>
    );
}

export default Footer;
