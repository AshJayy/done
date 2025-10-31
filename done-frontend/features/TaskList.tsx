import React from 'react'
import { Task } from "@/app/lib/models/task";
import TaskItem from "@/components/TaskItem";

interface TaskListProps {
    tasks: Task[];
}

const TaskList = ({tasks}: TaskListProps) => {
    return (
        <div className={"flex flex-col justify-start min-h-60 w-60"}>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task}  />
            ))}
        </div>
    )
}
export default TaskList
