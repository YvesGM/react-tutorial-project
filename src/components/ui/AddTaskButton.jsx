/**
 * Button component used to add a new task to the task list.
 *
 * Displays a label via `children` and triggers the provided
 * click handler when pressed.
 *
 * @param {Object} props - Component properties.
 * @param {React.ReactNode} props.children - Button label content.
 * @param {Function} props.onClick - Click event handler.
 *
 * @returns {JSX.Element} Rendered add-task button.
 */
export default function AddTaskButton({ children, onClick}) {
    return (
        <button className="add_task_button" onClick={onClick}>
            {children}
        </button>
    )
}