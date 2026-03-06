/**
 * Task list component.
 *
 * Renders a list of tasks inside an unordered list element.
 *
 * @param {Object} props - Component properties.
 * @param {string[]} props.tasks - Array of task strings to render.
 *
 * @returns {JSX.Element} Rendered list of tasks.
 */
export default function TaskList({ tasks }) {
  return (
    <ul className="task_list">
      {tasks.map((task, index) => (
        <li key={index}>{task}</li>
      ))}
    </ul>
  );
}
