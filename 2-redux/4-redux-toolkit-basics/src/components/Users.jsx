import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUsers } from "../redux/slices/userSlice";

const Users = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers()); // asenkron thunk aksiyonu
  }, []);

  return <div>Users</div>;
};

export default Users;
