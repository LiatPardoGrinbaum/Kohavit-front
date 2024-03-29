import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar/Navbar";
import HomeMain from "./pages/HomeMain";
import Treatments from "./pages/Treatments";
import Eyebrows from "./pages/Eyebrows";
import Lips from "./pages/Lips";
import Freckles from "./pages/Freckles";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Box className="appContainer" bgcolor={theme.palette.primary.light}>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomeMain} />
          <Route path="/treatments" component={Treatments} />
          <Route path="/eyebrows" component={Eyebrows} />
          <Route path="/lips" component={Lips} />
          <Route path="/freckles" component={Freckles} />

          {/* <Route path="/eyebrows" component={Eyebrows} />
          <Route path="/lips" component={Lips} />
          <Route path="/qa" component={QandA} />  */}
        </Switch>
        <Footer />
      </BrowserRouter>
    </Box>
  );
};

export default App;
