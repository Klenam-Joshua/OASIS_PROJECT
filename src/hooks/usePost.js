import { useState } from "react";
import { CustomAxios } from "../Api/CustomAxios";

export const usePost = () => {
  const [error, setError] = useState("");

  const fetchData = async () => {
    let result = null;
    try {
      setError("");
      let data = await CustomAxios.get("/Cabins?select=*");
      result = data;
    } catch (error) {
      console.log(error.response, error.message);
      setError(error.message);
    }

    return result;
  };

  const deletePost = async (id) => {
    let result = null;

    result = await CustomAxios.delete(`/Cabins?id=eq.${id}`);

    return result;
  };

  return { fetchData, deletePost };
};
