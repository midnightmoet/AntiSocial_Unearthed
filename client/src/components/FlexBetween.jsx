import { Box } from "@mui/material";
import {styled} from "@mui/system";

const FlexBetween = styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween

// This allows to use this component as a styled component by simply importing it and using it as a component