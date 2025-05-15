import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
//
// export default App;
import { useMediaQuery } from "react-responsive";
import HomeDesktop from "./components/HomeDesktop/HomeDesktop";
import HomeMobile from "./components/HomeMobile/HomeMobile";

function App() {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return isMobile ? <HomeMobile /> : <HomeDesktop />;
}

export default App;
