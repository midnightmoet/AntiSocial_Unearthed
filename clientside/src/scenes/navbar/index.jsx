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
import {setMode, setLogout} from "state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "components/FlexBetween";

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch(); //used to dispatch actions
  const navigate = useNavigate(); //used to navigate to different routes
  const user = useSelector((state) => state.user); //used to access user data from redux store
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px"); //used to determine if screen is mobile or not
  const theme = useTheme(); //used to access theme object

  // Colors
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const fullName = `${user.firstName} ${user.lastName}`; //used to display user's full name

  return (
    <div>
      <h1>Navbar</h1>
    </div>
  );
};

export default Navbar;
