import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    Paper,
    Typography,
} from "@mui/material";
import { primary, secondary } from "../../../utils/theme/theme";
import StyledAvatar from "./StyledAvatar";
import { useAppSelector } from "../../../utils/redux/store";
import ItemDateLabel from "./ItemDateLabel";
import ItemLabel from "./ItemLabel";

// The interface for task items
interface TaskItemProps {
    dueDate: string;
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
    const colorMode = useAppSelector((state) => state.users.colorMode);

    return (
        <Paper
            elevation={3}
            sx={(theme) => ({
                padding: "10px",
                marginBottom: "8px",
                borderRadius: "10px",
                "&:hover": {
                    border: colorMode == 'dark' ? `1px solid ${theme.palette.primary.contrastText}` : "none",
                },
            })}
        >
            <Box justifyContent="space-between" alignItems="center" display="flex">
                <Box>
                    <Typography variant="body1">{description}</Typography>
                    <Box
                        display="flex"
                        alignContent="center"
                        alignItems="center"
                        gap="5px"
                        marginTop="10px"
                    >
                        <ItemDateLabel dueDate={dueDate} />
                        {labels.length > 0 && labels.map((label) => (
                            <ItemLabel key={label} label={label} />
                        ))}
                    </Box>
                </Box>
                <Box>
                    <AvatarGroup max={4}>
                        {/* Map your avatars here */}
                        {assignees.map((assignee) => (
                            <StyledAvatar key={assignee} name={assignee} />
                        ))}
                    </AvatarGroup>
                </Box>
            </Box>
        </Paper>
    );
};
