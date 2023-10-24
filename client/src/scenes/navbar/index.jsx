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
import { Form, useNavigate } from "react-router-dom";
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

    {/* DESKTOP NAVIGATION THIS ALLOWS THE FLIP OF THE SWITCH PER SAY */}
    {isNonMobileScreens ? (
      <FlexBetween gap="2rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{fontSize: "25px"}}/>
          ) : (
            <LightMode sx={{color: dark, fontSize: "25px"}}/>
          )}
        </IconButton>
        <Message sx={{fontSize: "25px"}}/>
        <Notifications sx={{fontSize: "25px"}}/>
        <Help sx={{fontSize: "25px"}}/>
        <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                Logout
              </MenuItem>
            </Select>
        </FormControl>
      </FlexBetween>
    ) : (
      <IconButton
        onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
      >
        <Menu />
      </IconButton>
    )}

    {/* Mobile Navigation */}
    {!isNonMobileScreens && isMobileMenuToggled && (
      <Box
        position = "fixed"
        right="0"
        bottom="0"
        height="100%"
        zIndex="10"
        maxWidth= "500px"
        minWidth="300px"
        backgroundColor={background}
      >
        {/* Close Icon */}
        <Box display="flex" justifyContent="flex-end" p="1rem">
          <IconButton
            onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
          >
            <Close />
          </IconButton>
        </Box>

        {/* MENU ITEMS */}
        <FlexBetween gap="2rem">
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx={{fontSize: "25px"}}/>
          ) : (
            <LightMode sx={{color: dark, fontSize: "25px"}}/>
          )}
        </IconButton>
        <Message sx={{fontSize: "25px"}}/>
        <Notifications sx={{fontSize: "25px"}}/>
        <Help sx={{fontSize: "25px"}}/>
        <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => dispatch(setLogout())}>
                Logout
              </MenuItem>
            </Select>
        </FormControl>
        </FlexBetween>
      </Box>
    )}
  </FlexBetween>;
};

export default Navbar;

// -------------------Notes on Navbar-------------------//

// clamp used with font size to make it responsive (font size will be 1rem on mobile, 2rem on tablet, 2.25rem on desktop)
