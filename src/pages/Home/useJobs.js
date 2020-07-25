import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import getJobs from "services/getJobs";
import { getParams } from "utils/navigation";
function useJobs() {
  const { search } = useLocation();
  const [jobs, setJobs] = useState();
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const query = getParams({ search });
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
