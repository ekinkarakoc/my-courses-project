const Course = (props) => {
  const { course } = props;

  return (
    <div>
      <div>{course.title}</div>
    </div>
  );
};

export default Course;
