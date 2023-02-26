import { Box } from "@chakra-ui/react";
import AllRoutes from "./components/Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Box style={{fontFamily: 'Jost'}}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
