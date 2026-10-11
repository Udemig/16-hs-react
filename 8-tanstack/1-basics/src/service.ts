import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// custom hook
export const useGetUsers = () =>
  useQuery({
    queryKey: ["users"],
    queryFn: () => axios.get("https://dummyjson.com/users1"),
    // data state'inde api'dan gelen hangi verinin saklanacağını belirle
    select: (res) => res.data.users,
    retry: 5,
    retryDelay: (attempt) => attempt * 1000,
  });
