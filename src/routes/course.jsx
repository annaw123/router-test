import { useParams, useNavigate, Outlet } from "react-router-dom";
import { getCourse } from "../data";

export default function Course() {
    let navigate = useNavigate();
    let params = useParams();
    let course = getCourse(parseInt(params.courseId, 10));
    return (
        <main style={{ padding: "1rem" }}>
            <h2>{course.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: course.about }} />
            <div>
                <button onClick={() => {
                        navigate(`/course/${course.id}/page/1`);
                    }}>
                        Start course</button>
            </div>
        </main>
    );
}