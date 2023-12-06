import {
    Badge,
    IconButton,
    InputBase,
    Typography,
    alpha,
    styled,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import NotificationsIcon from "@mui/icons-material/Notifications";
import StyledAvatar from "../../views/home/components/StyledAvatar";
import SearchIcon from '@mui/icons-material/Search';

type Props = {};

function Header({}: Props) {
    //TODO: get redux state with the username

    const Search = styled("div")(({ theme }) => ({
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(3),
            width: "auto",
        },
    }));

    const SearchIconWrapper = styled("div")(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: "inherit",
        "& .MuiInputBase-input": {
            border: "1px solid white",
            borderRadius: "10px",
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create("width"),
            width: "100%",
            [theme.breakpoints.up("md")]: {
                width: "20ch",
            },
        },
    }));

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            padding="22px"
            sx={(theme) => ({
                backgroundColor: theme.palette.secondary.dark,
                borderBottom: `2px solid ${theme.palette.secondary.main}`,
            })}
        >
            <Box display="flex" alignItems="center">
                {/* <Box padding="0px" sx={{backgroundColor: "red"}}>
                    <Typography variant="h2" sx={{ textDecoration: "bold" }}>
                        T
                    </Typography>
                </Box> */}
                <Typography variant="h4" sx={{ textDecoration: "bold" }}>
                    TaskMasterPro
                </Typography>
            </Box>
            <Box display="flex" gap="10px" alignItems="center">
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search Tasks/Teams"
                        inputProps={{ "aria-label": "search" }}
                    />
                </Search>
                <StyledAvatar name={"Test"} />
                <IconButton
                    aria-label="show 4 new mails"
                >
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon sx={{fontSize: "34px"}} />
                    </Badge>
                </IconButton>
            </Box>
        </Box>
    );
}

export default Header;
