import DeleteTaskButton from "../components/ui/DeleteTaskButton"

/**
 * Task list component.
 *
 * Renders a list of tasks and provides delete
 * functionality for each task entry.
 *
 * @param {Object} props - Component properties.
 * @param {{id:number,text:string}[]} props.tasks - Array of task objects.
 * @param {(id:number)=>void} props.deleteTask - Function used to remove tasks.
 *
 * @returns {JSX.Element} Rendered task list.
 */
export default function TaskList({ tasks, deleteTask }) {
  return (
    <ul className="task_list">
      {tasks.map((task) => (
        <li key={task.id}>
            {task.text}
            <DeleteTaskButton onClick={() => deleteTask(task.id)}>
                x
            </DeleteTaskButton>
        </li>
      ))}
    </ul>
  );
}
