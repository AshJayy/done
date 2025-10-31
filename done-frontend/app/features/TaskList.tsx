import React from 'react'
import { Task } from "@/app/data/models/task";
import TaskItem from "@/app/components/TaskItem";

interface TaskListProps {
    tasks: Task[];
}

const TaskList = ({tasks}: TaskListProps) => {
    return (
        <div className={"flex flex-col"}>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task}  />
            ))}
        </div>
    )
}
export default TaskList
