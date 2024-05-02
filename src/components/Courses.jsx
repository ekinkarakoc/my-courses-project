import Course from "./Course";

const Courses = (props) => {
  const { courses } = props;

  return (
    <div>
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div>
        {courses.map((course) => {
          return (
            <div key={course.id}>
              <Course course={course} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;
