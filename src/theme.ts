import { createTheme } from "@mui/material/styles";
import './fonts/font.css';



// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#0A196F",
      900: "#102587",
      800: "#1A37A7",
      700: "#264BC8",
      600: "#3563E9",
      500: "#658DF1",
      400: "#85A8F8",
      300: "#AEC8FC",
      200: "#D6E4FD",
      100: "#FFFFFF",
    },
    secondary: {
      main: "#040815",
      800: "#080C19",
      700: "#0D121F",
      600: "#131825",
      500: "#1A202C",
      400: "#596780",
      300: "#90A3BF",
      200: "#C3D4E9",
      100: "#E0E9F4",
    },
    success: {
      900: "#3B6506",
      800: "#4C7A0B",
      700: "#659711",
      600: "#7FB519",
      500: "#9CD323",
      400: "#BCE455",
      300: "#D3F178",
      200: "#E8FAA6",
      100: "#F5FCD2",
    },
    error: {
      100: "#FFE7D3",
      200: "#FFC8A6",
      300: "#FFA37A",
      400: "#FF7F59",
      500: "#FF4423",
      600: "#DB2719",
      700: "#B71112",
      800: "#930B16",
      900: "#7A0619",
    },
    warning: {
      100: "#FFF8D7",
      200: "#FFEFB0",
      300: "#FFE488",
      400: "#FFD96B",
      500: "#FFC73A",
      600: "#DBA32A",
      700: "#B7821D",
      800: "#936312",
      900: "#7A4D0B",
    },
    info: {
      100: "#DCF3FF",
      200: "#BAE5FF",
      300: "#98D3FF",
      400: "#7EC2FF",
      500: "#54A6FF",
      600: "#3D81DB",
      700: "#2A60B7",
      800: "#1A4393",
      900: "#102E7A",
    },
  },
  typography: {
    fontFamily: "Jakarta", // Set the default font family
  },
});

export default theme;
