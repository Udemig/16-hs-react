import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, setCount } from "../redux/slices/counterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const { count } = useSelector((store) => store.counterReducer);

  return (
    <div className="grid place-items-center gap-10 my-10">
      <button onClick={() => dispatch(setCount(0))}>Sıfırla</button>
      <button onClick={() => dispatch(decrease())}>Azalt</button>
      <h1>{count}</h1>
      <button onClick={() => dispatch(increase())}>Arttır</button>
    </div>
  );
};

export default Counter;
