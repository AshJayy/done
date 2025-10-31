import TaskList from "@/app/features/TaskList";
import { mockTasks } from "@/app/data/models/task";

export default function Home() {
    const tasks = mockTasks;
  return (
    <main className={"p-20"}>
      <h1>Task List</h1>
        <TaskList tasks={tasks} />
    </main>
  );
}
