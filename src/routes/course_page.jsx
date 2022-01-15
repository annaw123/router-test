import { useParams, useNavigate } from "react-router-dom";
import { getCourse } from "../data";

export default function CoursePage() {
    let params = useParams();
    let navigate = useNavigate();
    let course = getCourse(parseInt(params.courseId, 10));
    let pageNumber = parseInt(params.pageNumber, 10);
    let pageIndex = pageNumber - 1;
    let nextPageNumber = pageNumber + 1;
    let page = course.pages[pageIndex];
    let hasNextPage = (nextPageNumber <= course.pages.length);
    let buttons = [];
    if (hasNextPage) {
        buttons.push(<button onClick={() => {
            navigate(`/course/${course.id}/page/${nextPageNumber}`);
        }}>
            Next</button>)
    }
    return (
        <main style={{ padding: "1rem" }}>
            <h1>{course.name}</h1>
            <h2>{page.title}</h2>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
            
            <div>
                {buttons}
            </div>
        </main>
    );
}