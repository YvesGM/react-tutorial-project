import { useState, useEffect } from "react"

/**
 * Custom React hook for managing a todo task list.
 *
 * Provides state and helper functions for adding
 * and removing tasks from the list.
 *
 * @returns {{
 *   todoList: {id:number,text:string}[],
 *   addTask: (task: string) => void,
 *   deleteTask: (id: number) => void
 * }} Task state and task management functions.
 */
export default function useTasks() {

    /**
     * List of todo tasks.
     *
     * @type {[{id:number,text:string}[], React.Dispatch<React.SetStateAction<{id:number,text:string}[]>>]}
     */
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        console.log("Task list updated:", todoList)
    }, [todoList]);

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
     * Removes a task from the list by ID.
     *
     * @param {number} id - ID of the task to remove.
     */
    function deleteTask(id) {
        setTodoList(prev => prev.filter((task) => task.id !== id))
    }

    return { todoList, addTask, deleteTask }

}