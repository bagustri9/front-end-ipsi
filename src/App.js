import { useLocation } from "react-router";
import Aplikasi from "./user/Aplikasi";
import {BrowserRouter as Router} from 'react-router-dom'
const App = () => {

  // const location = useLocation()
  // console.log(location)
  return (
    <Router>
      <Aplikasi />
    </Router>
  );
};

export default App;
