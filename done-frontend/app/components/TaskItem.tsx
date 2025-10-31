"use client"
import React from 'react'
import { Task } from "@/app/lib/models/task";
import CheckBox from "@/app/components/CheckBox";
import { taskEndpoints } from "@/app/lib/api/task";
import Button from "@/app/components/Button";
import { useRouter } from "next/navigation";

interface TaskItemProps {
    task: Task
}

const TaskItem = ({task}: TaskItemProps) => {
    const router = useRouter();

    const handleDelete = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await taskEndpoints.deleteTask(task.id);
        router.refresh();
    }
    const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const updatedTask = await taskEndpoints.updateTask({
            ...task,
            isCompleted: e.target.checked
        })
        console.log(`Task with id ${task.id} changed to ${updatedTask}`);
    }

    return (
        <div className={"flex flex-col w-full p-2 hover:bg-neutral-800 transition-colors duration-500 rounded-md group"}>
            <div className={"flex items- justify-start gap-4"}>
                <CheckBox onChange={handleChange} />
                <span>{task.title}</span>
            </div>
            <div className={"hidden group-hover:flex justify-between items-center gap-4"}>
                <p className={"text-sm"}>{task.description}</p>
                <Button className={"text-xs text-neutral-500 hover:font-bold"} onClick={handleDelete}>delete</Button>
            </div>
        </div>
    )
}
export default TaskItem
