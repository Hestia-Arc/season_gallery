import { Box, ThemeProvider } from "@mui/material";
import Header from "./components/Header";
import Gallery from './components/Main/Gallery'
import Footer from './components/Footer'
import {theme} from './theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box >
      <Header/>
      <Gallery/>
      <Footer/>
    </Box>

    </ThemeProvider>
    
  );
}

export default App;
