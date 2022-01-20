// import Navbar from './Components/Navbar';
// import Header from './Components/Header';
// import Tutorial from './Components/Tutorial';
// import Footer from "./Components/Footer";

// import "./App.css";

// function App() {
//   return (
//     <div>
//       <Navbar />
//       <Header />
//       <Tutorial />
//       <Footer />
//     </div>
//   );
// }

import { Outlet, Link } from "react-router-dom";
import "./index.css";

export default function App() {
  return (
    <div>
      <h1>Mission Encodeable</h1>
      <p>It won't be this ugly for long, we promise!</p>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem"
        }}
      >
        <Link to="/courses">Courses</Link>
      </nav>
      <Outlet />
    </div>
  );
}