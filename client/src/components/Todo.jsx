const Todo = ({ todo }) => {
  return (
    <li>
      <span>{todo.data}</span>
    </li>
  );
};

export default Todo; // Export 'Todo' as the default export
