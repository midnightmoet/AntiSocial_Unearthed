import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import { useMemo } from "react"; 
import { useSelector } from "react-redux"; 
import {CssBaseline, ThemeProvider} from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";



const App = () => {
  const mode = useSelector(state => state.mode); // dark or light
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); // theme settings

  return (
    <div className="app">
      <BrowserRouter> {/* browser router */}
        <ThemeProvider theme={theme}> {/* theme provider */}
        <CssBaseline /> {/* reset css */}
        <Routes> 
          <Route path="/" element={<LoginPage />} /> 
          <Route path="/home" element={<HomePage />} /> 
          <Route path="/profile/:userId" element={<ProfilePage />} /> 
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
