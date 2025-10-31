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
        <div className={"flex justify-start gap-4 w-60 p-2 hover:bg-neutral-800 transition-colors duration-500 rounded-md"}>
            <CheckBox onChange={handleChange} />
            <span>{task.title}</span>
        </div>
    )
}
export default TaskItem
