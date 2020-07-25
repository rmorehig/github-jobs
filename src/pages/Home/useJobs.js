import { useState, useEffect } from "react";
import getJobs from "services/getJobs";
import { useLocation } from "react-router-dom";

function useJobs() {
  const [jobs, setJobs] = useState();
  const [status, setStatus] = useState("idle");
  const { search } = useLocation();

  useEffect(() => {
    const query = new URLSearchParams(search).toString();
    setStatus("loading");
    getJobs({ query }).then((jobs) => {
      setJobs(jobs);
      setStatus("success");
    });
  }, [search, setJobs, setStatus]);

  return {
    jobs,
    status,
  };
}

export default useJobs;
