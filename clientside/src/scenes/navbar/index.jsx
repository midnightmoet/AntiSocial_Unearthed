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
  Close
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


  return <div>Navbar</div>;
};

export default Navbar;

