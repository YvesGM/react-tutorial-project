import { useState } from "react"

/**
 * Custom React hook for managing a todo task list.
 *
 * Provides state and helper functions for adding
 * and removing tasks from the list.
 *
 * @returns {{
 *   todoList: string[],
 *   addTask: (task: string) => void,
 *   deleteTask: (index: number) => void
 * }} Task state and task management functions.
 */
export default function useTasks() {

    /**
     * List of todo tasks.
     *
     * @type {[string[], Function]}
     */
    const [todoList, setTodoList] = useState([])

    /**
     * Adds a new task to the list.
     *
     * Prevents empty tasks from being added.
     *
     * @param {string} task - Task text entered by the user.
     */
    function addTask(task) {
        if (!task.trim()) return; // Prevent adding empty tasks

        const newTask = {
            id: Date.now(),
            text: task
        }

        setTodoList(prev => [...prev, newTask])
    }

    /**
     * Removes a task from the list by index.
     *
     * @param {number} index - Index of the task to remove.
     */
    function deleteTask(index) {
        setTodoList(prev => prev.filter((_, i) => i !== index))
    }

    return { todoList, addTask, deleteTask }

}