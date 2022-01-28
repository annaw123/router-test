import { useParams, useNavigate } from "react-router-dom";
import { getCourse } from "../data";
import "./coursepage.css";

export default function Course() {
    let navigate = useNavigate();
    let params = useParams();
    let course = getCourse(parseInt(params.courseId, 10));
    return (
        <div className="shadow_box">
            <h2>{course.name}</h2>
            <div dangerouslySetInnerHTML={{ __html: course.about }} />
            <div>
                <button onClick={() => {
                        navigate(`/python/level/${course.id}/section/1`);
                    }} className="btn_orange_fill">
                        Start course</button>
            </div>
        </div>
    );
}