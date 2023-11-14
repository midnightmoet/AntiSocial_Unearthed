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
  Icon,
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
import { Form, useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  //const fullName = `${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 10%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color= {dark}
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: "purple",
              cursor: "pointer",
              fontSize: "clamp(1.25rem, 2.25rem, 2.75rem)",
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
            <InputBase placeholder="Search ... " />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <DarkMode sx = {{color: "blue" ,fontSize: "25px"}} />
          ) : (
            <LightMode sx = {{color: "yellow" , fontSize: "25px"}} />
          )}
          </IconButton>
          <Message sx={{fontSize: "25px"}} />
          <Notifications sx={{fontSize: "25px"}} />
          <Help sx={{fontSize: "25px"}} />
          <FormControl variant="standard" value="Lisa Miner">
            <Select
              sx={{ fontSize: "25px" }}
              defaultValue="en"
              onChange={(e) => dispatch(setLogout())}
            >
              <MenuItem value="en">Logout</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton></IconButton>
      )}
    </FlexBetween>
  );
};

export default Navbar;


// figure out the error about first name and last name being null in the navbar then change form control value to {fullName}