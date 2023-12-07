import { Avatar } from "@mui/material";
import React from "react";

type Props = {
    name: string;
}

function StyledAvatar(props: Props) {
    return (
        <Avatar
            key={props.name}
            alt={props.name}
            sx={(theme) => ({
                bgcolor: theme.palette.secondary.main, // sets the background color to transparent
                color: "white",
                "&.MuiAvatar-colorDefault": {
                    color: "white",
                    border: "1px solid white",
                },
            })}
        />
    );
}

export default StyledAvatar;
