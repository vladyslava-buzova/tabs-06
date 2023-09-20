import { useEffect, useState } from "react";
import Jobs from "./jobs.jsx";
import BtnContainer from "./btnContainer";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading, serIsLoading] = useState(true);
  const [jobs, setJobs] = useState([]);

const fetchJobs = async() => {
  const response = await fetch(url);
  const newJobs = await response.json();
  setJobs(newJobs)
  serIsLoading(false)
}

  useEffect(() => {
    fetchJobs();
  }, [])

  if(isLoading) {
    return (
      <section className="jobs-center">
        <div className="loding"></div>
      </section>
    )
  }
  
  return (
    <section className="jobs-center">
      {/* botton control */}
      <BtnContainer jobs={jobs}/>
      <Jobs jobs={jobs}/>
    </section>
  );

};
export default App;
