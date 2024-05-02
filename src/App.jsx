import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <>
      <div className="App">
        {loading ? <Loading /> : <Courses courses={courses} />}
      </div>
    </>
  );
}

export default App;
