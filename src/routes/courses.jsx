import { NavLink, Outlet } from "react-router-dom";
import { getCourses } from "../data";

export default function Courses(){
    let courses = getCourses();
    return (
        <div style={{ display: "flex" }}>
            <nav
                style={{
                    borderRight: "solid 1px",
                    padding: "1rem"
                }}
            >
                {courses.map(course => (
                    <NavLink
                        style={({ isActive }) => {
                            return {
                                display: "block",
                                margin: "1rem 0",
                                color: isActive ? "red" : ""
                            };
                        }}
                        to={`/course/${course.id}`}
                        key={course.id}
                    >
                        {course.name}
                    </NavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    );
}