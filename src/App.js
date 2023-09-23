import { ThemeProvider, Box } from "@mui/material";
import Gallery from "./Pages/Gallery";
import { theme } from "./theme";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";


function App() {
  // const { authUser, userLogout } = UserAuth();
  // const navigate = useNavigate();

  // const handleLogout = async () => {
  //   try {
  //     await userLogout();
  //     navigate("/");
  //     console.log("You are currently logged out");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{background: '#031323'}}>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>

      {/* <p>
        {authUser && authUser.email}
        <button onClick={handleLogout}>Sign out</button>
      </p> */}

</Box>
    </ThemeProvider>
  );
}

export default App;
