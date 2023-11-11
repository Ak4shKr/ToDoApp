import { useEffect } from "react";
import { getAllTodos } from "../redux/actions/index";
import { useDispatch, useSelector } from "react-redux";
import Todo from "./Todo.jsx";

export const Todos = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getAllTodos());
  }, [dispatch]);
  return (
    <article>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            <Todo todo={todo} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default Todos;
