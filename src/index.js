import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import App from "./App";
import Courses from './routes/courses';
import Course from './routes/course';
import Tutorial from './components/Tutorial';


const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="courses" element={<Courses />} />
        <Route path="python/level/:courseId/section/:pageNumber" element={<Tutorial />} />
        <Route path='python/level/:courseId' element={<Course />} /> 
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);