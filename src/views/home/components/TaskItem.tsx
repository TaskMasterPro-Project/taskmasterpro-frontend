import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { primary } from "../../../utils/theme/theme";
import StyledAvatar from "./StyledAvatar";

// The interface for task items
interface TaskItemProps {
    dueDate: Date;
    description: string;
    labels: string[];
    assignees: string[];
}

// Single Task Item component
export const TaskItem: React.FC<TaskItemProps> = ({
    dueDate,
    description,
    labels,
    assignees,
}) => {
    return (
        <Paper
            elevation={3}
            sx={{ padding: "10px", marginBottom: "8px", borderRadius: "10px" }}
        >
            <Grid container justifyContent="space-between" alignItems="center">
                <Grid item>
                    <Typography variant="body1">{description}</Typography>
                    <Box
                        display="flex"
                        alignContent="center"
                        alignItems="center"
                        gap="5px"
                    >
                        <Typography
                            variant="caption"
                            display="block"
                            sx={(theme) => ({
                                backgroundColor: primary.primary700,
                                padding: "5px 10px",
                                borderRadius: "10px",
                            })}
                        >
                            {dueDate.toString()}
                        </Typography>
                        {/* Map your labels here */}
                        {labels.map((label) => (
                            <Typography
                                key={label}
                                variant="caption"
                                display="block"
                                sx={(theme) => ({
                                    backgroundColor:
                                        theme.palette.secondary.main,
                                    padding: "5px 10px",
                                    borderRadius: "10px",
                                })}
                            >
                                {label}
                            </Typography>
                        ))}
                    </Box>
                </Grid>
                <Grid item>
                    <AvatarGroup max={4}>
                        {/* Map your avatars here */}
                        {assignees.map((assignee) => (
                            <StyledAvatar key={assignee} name={assignee} />
                        ))}
                    </AvatarGroup>
                </Grid>
            </Grid>
        </Paper>
    );
};
