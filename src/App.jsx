import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  //******************** */ FETCHİNG İTEMMS//////////////*******
  const fetch = async () => {
    setLoading(true);
    await axios
      .get("http://localhost:3000/courses")
      .then((res) => setCourses(res.data));
    setLoading(false);
  };

  useEffect(() => {
    fetch();
  }, []);
  //******************** */ FETCHİNG İTEMMS//////////////*******

  //******************** */ DELETE ACTİON//////////////*******
  const deleteApp = (id) => {
    const newCourses = courses.filter((course) => {
      return course.id !== id;
    });
    setCourses(newCourses);
  };
  //******************** */ DELETE ACTİON//////////////*******
  return (
    <>
      <div className="App">
        {loading ? (
          <Loading />
        ) : (
          <>
            {courses.length === 0 ? (
              <div className="refreshDiv">
                <h1>Kursların Hesini Sildinnn</h1>
                <button onClick={() => fetch()}>YENİLEEE</button>
              </div>
            ) : (
              <Courses courses={courses} removeOneCourse={deleteApp} />
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
