import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box fontFamily={"Jost"}>
      <Navbar />
      <AllRoutes />
      <Footer />
    </Box>
  );
}

export default App;
