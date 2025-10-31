"use client"
import React from 'react'
import { Task } from "@/app/data/models/task";
import CheckBox from "@/app/components/CheckBox";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: number) => {
        console.log(`Task with id ${id} changed to ${e.target.checked}`);
    }

    return (
        <span>
            <CheckBox id={task.id} handleChange={handleChange} />
            {task.title}
        </span>
    )
}
export default TaskItem
