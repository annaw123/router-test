let courses = [
    {
        id: 1,
        name: 'Python level 1',
        about: '<p>Indroduction....</p>',
        pages: [
            {
                title: 'Welcome!',
                content: '<p>This is the first page</p>'
            },
            {
                title: 'For Next Loops',
                content: '<p>Just loop it, man!</p>'
            },
            {
                title: 'If statements',
                content: '<p>You can do everything with if statements</p>'
            }
        ]
    },
    {
        id: 2,
        name: 'Python level 2',
        about: '<p>Advancing...</p>',
        pages: [
            {
                title: 'Welcome!',
                content: '<p>Advanced stuff, eh!</p>'
            },
            {
                title: 'Page 2',
                content: '<p>You know it all now</p>'
            }
        ]
    }
];

export async function getCourses() {
    let response = await fetch("http://localhost:8080/api/courses")
    let courses = await response.json();
    return courses;
}

export function getCourse(id) {
    return courses.find(
      course => course.id === id
    );
}
