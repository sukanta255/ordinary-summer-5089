import { Box } from "@chakra-ui/react";
import AllRoutes from "./components/Routes/AllRoutes";
import SignUp from "./Pages/SignUp";

function App() {
  return (
    <Box style={{fontFamily: 'Jost'}}>
      {/* <AllRoutes /> */}
      <SignUp />
    </Box>
  );
}

export default App;
