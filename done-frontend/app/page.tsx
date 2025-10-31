import TaskList from "@/app/features/TaskList";
import NewTask from "@/app/features/NewTask";
import { taskEndpoints } from "@/app/lib/api/task";

export default async function Home() {

    const tasks = await taskEndpoints.getTasks();

    return (
        <main className={"p-20"}>
            <div className={"flex flex-col justify-between p-8 w-fit border-2 border-neutral-700 rounded-lg bg-neutral-900 "}>
                <h1 className={"font-bold text-2xl m-2"}>Task List</h1>
                <TaskList tasks={tasks}/>
                <NewTask/>
            </div>
        </main>
    );
}
