import React, { useEffect } from "react";
import "./App.css";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import theme from "./utils/theme/theme";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import {
    Box,
    Container,
    CssBaseline,
    StyledEngineProvider,
    ThemeProvider,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { useAppSelector } from "./utils/redux/store";
import { useDispatch } from "react-redux";
import { setUser } from "./utils/redux/users";

function App() {
    const location = useLocation();
    const dispatch = useDispatch();
    const currentUser = useAppSelector((state) => state.users.user);

    useEffect(() => {
        const localUser = localStorage.getItem("user");
        if (localUser && !currentUser) {
            dispatch(setUser(JSON.parse(localUser)));
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledEngineProvider injectFirst>
                <Header></Header>
                {location.pathname === "/" ? (
                    <Navigate to="/home" replace={true} />
                ) : (
                    <Container maxWidth="xl">
                        <Box sx={{ margin: "30px 0px" }}>
                            <Outlet></Outlet>
                        </Box>
                    </Container>
                )}
                <Footer></Footer>
            </StyledEngineProvider>
        </ThemeProvider>
    );
}

export default App;
