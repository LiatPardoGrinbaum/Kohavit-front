import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Box } from "@mui/material";
import { theme } from "./theme";
import Navbar from "./components/Navbar/Navbar";
import HomeMain from "./pages/HomeMain";

const App: React.FC = () => {
  return (
    <Box className="appContainer" bgcolor={theme.palette.primary.light}>
      <BrowserRouter>
        <Navbar />

        <Switch>
          <Route path="/" exact component={HomeMain} />

          {/* <Route path="/eyebrows" component={Eyebrows} />
          <Route path="/lips" component={Lips} />
          <Route path="/qa" component={QandA} />  */}
        </Switch>
      </BrowserRouter>
    </Box>
  );
};

export default App;
