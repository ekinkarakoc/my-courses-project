import Course from "./Course";

const Courses = (props) => {
  const { courses, removeOneCourse } = props;

  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="courseShow">
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <Course course={course} removeOneCourse={removeOneCourse} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
