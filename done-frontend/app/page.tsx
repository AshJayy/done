import TaskList from "@/features/TaskList";
import NewTask from "@/features/NewTask";
import { taskEndpoints } from "@/app/lib/api/task";
import Image from "next/image";

export default async function Home() {

    const tasks = await taskEndpoints.getTasks();

    return (
        <main className={"p-10"}>
            <span className={"flex flex-row justify-start items-center"}>
                <Image src={"/checkbox.svg"} alt={"Logo"} width={40} height={40} priority/>
                <h1 className={"font-bold text-2xl"}>done</h1>
            </span>
            <div className={"flex flex-col justify-between m-10 p-8 w-fit border-2 border-neutral-700 rounded-lg bg-neutral-900 "}>
                <h1 className={"font-bold text-2xl m-2"}>Task List</h1>
                <TaskList tasks={tasks}/>
                <NewTask/>
            </div>
        </main>
    );
}
