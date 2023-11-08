import axios from "axios";

const instance = axios.create({
  baseURL: "https://wander-inn-server.vercel.app",
  withCredentials: true,
});

const useAxios = () => {
  return instance;
};

export default useAxios;
