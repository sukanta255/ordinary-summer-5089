import { Box } from "@chakra-ui/react";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <Box fontFamily={"Jost"}>
      <AuthProvider>
        <Navbar />
        <AllRoutes />
      </AuthProvider>
      <Footer />
    </Box>
  );
}

export default App;
