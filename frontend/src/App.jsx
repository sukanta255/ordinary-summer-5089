import { Box } from "@chakra-ui/react";
import AllRoutes from "./components/Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <Box style={{fontFamily: 'Jost'}}>
      <Navbar />
      <AllRoutes />
    </Box>
  );
}

export default App;
