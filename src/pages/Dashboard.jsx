import { useEffect } from "react";
import { CustomAxios } from "../Api/CustomAxios";
import axios from "axios";
import { usePost } from "../hooks/usePost";

function Dashboard() {
  const { fetchData } = usePost();
  useEffect(() => {
    let f = async () => {
      let data = await fetchData();
      console.log(data);
    };

    f();
  }, []);
  return <p>testing 23434</p>;
}

export default Dashboard;
