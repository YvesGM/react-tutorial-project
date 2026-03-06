/**
 * Input component used for entering new tasks.
 *
 * Acts as a controlled input element and updates
 * the parent component state through the `onChange` handler.
 *
 * @param {Object} props - Component properties.
 * @param {string} props.value - Current input value.
 * @param {Function} props.onChange - Change event handler.
 *
 * @returns {JSX.Element} Rendered task input field.
 */
export default function TaskListInput({ value, onChange }) { 
    return (
        <input className="task_list_input" value={value} onChange={onChange} placeholder="Enter a new task..." />
    )
}