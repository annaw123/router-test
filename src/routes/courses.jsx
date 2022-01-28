import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { getCourses } from "../data";

export default function Courses() {
    let [courses, setCourses] = useState([])
    useEffect(() => {
        console.log("Aargh!")
        fetch("http://localhost:8080/api/courses")
        .then(res => res.json())
        .then(
            (result) => {
              setCourses(
                result
              );
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
          )

    }, []);
    // let courses = await getCourses();
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
                                color: isActive ? "red" : "black"
                            };
                        }}
                        to={`/python/level/${course.id}/section/1`}
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