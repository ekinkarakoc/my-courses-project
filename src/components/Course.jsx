const Course = (props) => {
  const { course, removeOneCourse } = props;

  const deleteCourse = (id) => {
    removeOneCourse(id);
  };

  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{course.title}</h2>
        <h4 className="cardPrice">{course.price} TL</h4>
      </div>
      <p>{course.content}</p>
      <button
        className="cardDeleteBtn"
        onClick={() => {
          deleteCourse(course.id);
        }}
      >
        Sil
      </button>
    </div>
  );
};

export default Course;
