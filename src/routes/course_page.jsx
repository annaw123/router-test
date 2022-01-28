import { useParams, useNavigate } from "react-router-dom";
import { getCourse } from "../data";

import "./coursepage.css"

function CoursePage() {
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
            navigate(`/python/level/${course.id}/section/${nextPageNumber}`);
        }} className="btn_orange_fill">
            Next</button>)
    }
    return (
        <div className="shadow_box">
            <h2>If statements</h2>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
            
            <div>
                {buttons}
            </div>
        </div>
    );
}

export default CoursePage;

// <div className="shadow_box">
// COURSE NAME / PAGE TITLE
//             <h2 className="darkgreen">Python Level 1</h2>
// CONTENT
//             <p>Welcome to our Python course! We're so glad you're here.</p>
//             <h3>What you'll learn</h3>
//             <p>In this level, we take a deep dive into the fundamentals of the Python language.</p>
//             <ul>
//                 <li>Printing to the console</li>
//                 <li>Handling errors</li>
//                 <li>Maths in the console</li>
//                 <li>Variables and inputs</li>
//                 <li>Adding comments to programs</li>
//                 <li>String manipulation</li>
//             </ul>
//             <h3>What you'll make</h3>
//             <p>Together, our class project will be to make a mad libs generator - click here to play</p>
//             <p>Your challenge project will be to make the band name generator- click here to play</p>
//             <button className="btn_orange_fill">What is Python?</button>
//         </div>