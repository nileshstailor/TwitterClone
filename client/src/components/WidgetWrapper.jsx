import { Box } from "@mui/material";
import { styled } from "@mui/system";

const WidgetWrapper = styled(Box) (({ theme }) => ({
    padding : "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor : theme.palette.background.alt,
    borderRaidus : "0.75em"
}));

export default WidgetWrapper;
