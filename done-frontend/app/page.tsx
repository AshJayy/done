import TaskList from "@/app/features/TaskList";
import NewTask from "@/app/features/NewTask";
import { taskEndpoints } from "@/app/lib/api/task";

export default async function Home() {

    const tasks = await taskEndpoints.getTasks();

    return (
        <main className={"p-20"}>
            <h1>Task List</h1>
            <TaskList tasks={tasks}/>
            <NewTask/>
        </main>
    );
}
