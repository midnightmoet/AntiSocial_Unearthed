import { useState } from "react";
import {
  Box,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); // for mobile menu
  const dispatch = useDispatch(); // for dispatching actions
  const navigate = useNavigate(); // for navigation
  const user = useSelector((state) => state.user); // for user info
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); // for mobile menu

  // THEME - LIGHT/DARK MODE
  const theme = useTheme(); // for dark mode
  const neutralLight = theme.palette.neutral.light; // for light mode
  const dark = theme.palette.neutral.dark; // for dark mode
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light; // for light mode
  const alt = theme.palette.background.alt; // for dark mode

  const fullName = `${user.firstName} ${user.lastName}`; // for user's full name

  return;
  <FlexBetween padding="1rem 6%" backgroundColor={alt}>
    <FlexBetween gap="1.75rem">
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem)"
        color="primary"
        onClick={() => navigate("/")}
        sx={{
          "&:hover": {
            color: primaryLight,
            cursor: "pointer",
          },
        }}
      >
        AntiSocial
      </Typography>
      {isNonMobileScreens && (
        <FlexBetween
          backgroundColor={neutralLight}
          borderRadius="9px"
          gap="3rem"
          padding="0.1rem 1.5rem"
        >
          <InputBase placeholder="Search..." />
          <IconButton>
            <Search />
          </IconButton>
        </FlexBetween>
      )}
    </FlexBetween>
    {/* DESKTOP NAVIGATION, redux allows for dakr/light mode  */}
    {isNonMobileScreens ? (
      <FlexBetween gap="2rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{fontSize: "25px"}}/>
          ) : (
            <LightMode sx={{fontSize: "25px", color: dark}}/>
          )}
        </IconButton>
        <Message sx={{fontSize: "25px"}}/>
        <Notifications sx={{fontSize: "25px"}}/>
        <Help sx={{fontSize: "25px"}}/>
      </FlexBetween>
    ) : (
      <IconButton></IconButton>
    )}
  </FlexBetween>;
};

export default Navbar;
