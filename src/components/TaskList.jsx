// Draws one <li> per task. It only reads the list it is given.
// The API sends dueDate as a full timestamp, so show the date part.
function TaskList({ tasks }) {
  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task.id}>
          <span>{task.title}</span>
          <span className="due">
            {task.dueDate ? task.dueDate.slice(0, 10) : "No due date"}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
