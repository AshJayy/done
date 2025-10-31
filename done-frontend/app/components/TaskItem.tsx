"use client"
import React from 'react'
import { Task } from "@/app/lib/models/task";
import CheckBox from "@/app/components/CheckBox";
import { taskEndpoints } from "@/app/lib/api/task";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedTask = await taskEndpoints.updateTask({
            ...task,
            isCompleted: e.target.checked
        })
        console.log(`Task with id ${task.id} changed to ${updatedTask}`);
    }

    return (
        <span>
            <CheckBox onChange={handleChange} />
            {task.title}
        </span>
    )
}
export default TaskItem
