"use client"
import React from 'react'
import { Task } from "@/app/lib/models/task";
import CheckBox from "@/app/components/CheckBox";
import { taskEndpoints } from "@/app/lib/api/task";
import Button from "@/app/components/Button";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log(`Delete task with id ${task.id}`);
    }
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedTask = await taskEndpoints.updateTask({
            ...task,
            isCompleted: e.target.checked
        })
        console.log(`Task with id ${task.id} changed to ${updatedTask}`);
    }

    return (
        <div className={"flex justify-between items-center w-60 p-2 hover:bg-neutral-800 transition-colors duration-500 rounded-md group"}>
            <div className={"flex items-center gap-4"}>
                <CheckBox onChange={handleChange} />
                <span>{task.title}</span>
            </div>
            <Button className={"hidden group-hover:block text-xs text-neutral-500"} onClick={handleDelete}>delete</Button>
        </div>
    )
}
export default TaskItem
