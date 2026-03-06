/**
 * Button component used for removing tasks from the task list.
 *
 * Displays custom content via `children` and triggers the
 * provided click handler when pressed.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Button label content.
 * @param {Function} props.onClick - Click event handler used to delete a task.
 *
 * @returns {JSX.Element} Rendered delete-task button.
 */
export default function DeleteTaskButton({ children, onClick}) {
    return (
        <button className="delete_task_button" onClick={onClick}>
            {children}
        </button>
    )
}