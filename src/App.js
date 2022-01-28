import Navbar from './components/Navbar';
import Header from './components/Header';
// import Tutorial from './Components/Tutorial';
import Footer from "./components/Footer";

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
      <Navbar />
      <Header />
      <nav>
        <Link to="/courses">Courses</Link>
      </nav>
      <Outlet />
      <Footer />
    </div>
  );
}