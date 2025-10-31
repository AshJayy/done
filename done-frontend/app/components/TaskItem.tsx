"use client"
import React from 'react'
import { Task } from "@/app/lib/models/task";
import CheckBox from "@/app/components/CheckBox";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        // task.isCompleted = e.target.checked;
        console.log(`Task with id ${task.id} changed to ${e.target.checked}`);
    }

    return (
        <span>
            <CheckBox onChange={handleChange} />
            {task.title}
        </span>
    )
}
export default TaskItem
