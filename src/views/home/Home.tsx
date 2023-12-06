import React, { useEffect, useState } from "react";
import { Box, Button, Divider, Grid, Paper, Typography } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { getProjects, getUpcomingTasks } from "../../utils/axios/apiClient";
import { Project } from "../../utils/models/Project";
import { Task } from "../../utils/models/Task";
import { TaskItem } from "./components/TaskItem";

// Main Page component
const HomePage: React.FC = () => {
    const [projects, setProjects] = useState<Project[]>([]);
    const [tasks, setTasks] = useState<Task[]>([]);
    useEffect(() => {
        getProjects().then((res) => {
            setProjects(res);
        });
        getUpcomingTasks().then((res) => {
            setTasks(res);
        });
    }, []);

    return (
        <Box
            sx={(theme) => ({
                backgroundColor: theme.palette.background.default,
                height: "100vh",
                display: "flex",
                flexDirection: "column",
            })}
        >
            <Box flexGrow={1} sx={(theme) => ({borderBottom: `1px solid ${theme.palette.secondary.main}`})}>
                <Grid container display="flex" height="100%" padding="40px 0">
                    <Grid item xs={3}>
                        {/* This will be your projects list */}
                        <Box
                            sx={(theme) => ({
                                height: "100%",
                                padding: "16px",
                                backgroundColor:
                                    theme.palette.background.default,
                            })}
                        >
                            <Typography
                                variant="h5"
                                marginTop="4px"
                                marginBottom="15px"
                            >
                                Your Projects
                            </Typography>
                            <Box
                                display="flex"
                                flexDirection="column"
                                gap="10px"
                            >
                                {/* Map your projects here */}
                                {projects.map((project) => (
                                    <Paper
                                        key={project.id}
                                        sx={(theme) => ({
                                            padding: "20px",
                                            borderRadius: "10px",
                                            backgroundColor:
                                                theme.palette.secondary.main,
                                        })}
                                    >
                                        <Typography variant="body1">
                                            {project.name}
                                        </Typography>
                                    </Paper>
                                ))}
                            </Box>
                            <Button
                                startIcon={
                                    <AddCircleIcon
                                        sx={(theme) => ({
                                            color: theme.palette.primary.main,
                                        })}
                                    />
                                }
                                sx={{ marginTop: "16px", color: "#fff" }}
                            >
                                Create New Project
                            </Button>
                            {/* List your projects here */}
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={(theme) => ({
                                height: "100%",
                                padding: "6px",
                                borderRadius: "25px",
                                backgroundColor: theme.palette.secondary.main,
                            })}
                        ></Box>
                    </Grid>
                    <Box flexGrow={1}>
                        {/* This will be your tasks list */}
                        <Box sx={{ height: "100%", padding: "16px" }}>
                            <Typography
                                variant="h5"
                                sx={(theme) => ({
                                    borderBottom: `3px solid ${theme.palette.secondary.main}`,
                                    borderRadius: "3px",
                                    marginBottom: "15px",
                                })}
                            >
                                Your Upcoming Tasks
                            </Typography>
                            {/* <Divider sx={{ margin: "5px 0", height: "10px" }} /> */}
                            {/* Map your tasks here */}
                            {tasks.map((task) => (
                                <TaskItem
                                    key={task.id}
                                    dueDate={task.dueDate}
                                    description={task.description}
                                    labels={task.labels}
                                    assignees={task.assignees}
                                />
                            ))}

                            <Button
                                startIcon={
                                    <AddCircleIcon
                                        sx={(theme) => ({
                                            color: theme.palette.primary.main,
                                        })}
                                    />
                                }
                                sx={{ marginTop: "16px", color: "#fff" }}
                            >
                                Create New Task
                            </Button>
                        </Box>
                    </Box>
                </Grid>
            </Box>
            <Box className="footer" display="flex" justifyContent="flex-end" margin="5px">
                    <Button
                        endIcon={
                            <ArrowCircleRightIcon
                                sx={(theme) => ({
                                    color: theme.palette.primary.main,
                                })}
                            />
                        }
                        sx={{ marginTop: "6px", color: "#fff" }}
                    >
                        Open Project Board
                    </Button>
            </Box>
        </Box>
    );
};

export default HomePage;
