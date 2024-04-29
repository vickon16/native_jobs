import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";

type Props = {
  endpoint: string;
  query: { [key: string]: string };
};

const useFetch = ({ endpoint, query }: Props) => {
  const [data, setData] = useState<TJobData["data"]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    params: { ...query },
    headers: {
      "X-RapidAPI-Key": process.env.EXPO_PUBLIC_RAPID_API_KEY,
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        setError(error.message);
        console.log(error.message);
      } else {
        setError("An Error Occurred");
      }
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();

  return { data, isLoading, error, refetch };
};

export default useFetch;
