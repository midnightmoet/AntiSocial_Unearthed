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
import state, { setMode, setLogout } from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false); // for mobile menu
  const dispatch = useDispatch(); // for dispatching actions
  const navigate = useNavigate(); // for navigation
  const user = useSelector((state) => state.user); // for user
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)"); // for non-mobile screens
  const theme = useTheme(); // for theme from theme.js file created
  const neutralLight = theme.palette.neutral.light; // for neutral light color
  const dark = theme.palette.neutral.dark; // for dark color
  const background = theme.palette.background.default; // for background color
  const primaryLight = theme.palette.primary.light; // for primary light color
  const alt = theme.palette.background.alt; // for alt color

  const fullName = `${user.firstName} ${user.lastName}`; // for full name

  return;
  <FlexBetween padding="1rem 6%" backgroundColor={alt}>
    <FlexBetween gap="1.75rem">
      <Typography
        fontWeight="bold"
        fontSize="clamp(1rem, 2rem, 2.25rem"
        color="primary"
        onClick={() => navigate("/home")}
        sx={{ "&:hover": { color: primaryLight, cursor: "pointer" }, }}
      >
        AntiSocial UnEarthed
      </Typography>
      {isNonMobileScreens && (
              <FlexBetween backgroundColor={neutralLight} borderRadius="9px" gap="3rem" padding="0.1rem 1.5rem">
                <InputBase placeholder="Search"/>
                <IconButton>
                  <Search/>
                </IconButton>
              </FlexBetween>
      )}

    </FlexBetween>

    {/* DESKTOP NAV */}
    {isNonMobileScreens ? (
      <FlexBetween gap="2rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{fontSize: "25px"}}/>
          ) : (
            <LightMode sx={{color: dark, fontSize: "25px"}}/>
          )}
        </IconButton>
      </FlexBetween>
    ) : (
      <IconButton></IconButton>
    )}
  </FlexBetween>;
};

export default Navbar;

// -------------------Notes on Navbar-------------------//

// clamp used with font size to make it responsive (font size will be 1rem on mobile, 2rem on tablet, 2.25rem on desktop)
