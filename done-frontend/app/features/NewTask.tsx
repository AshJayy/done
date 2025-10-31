"use client"
import React from 'react'
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";
import { taskEndpoints } from "@/app/lib/api/task";
import { useRouter } from 'next/navigation';

const NewTask = () => {
    const router = useRouter();

    const [newTask, setNewTask] = React.useState({title: '', description: ''});
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target as HTMLInputElement & HTMLTextAreaElement;
        setNewTask(prev => ({ ...prev, [name]: value }));
    }

    const createTask = async (e?: React.MouseEvent<HTMLButtonElement>) => {
        e?.preventDefault();
        if (!newTask.title.trim()) return;
        setLoading(true);
        try {
            await taskEndpoints.createTask(newTask.title, newTask.description);
            setOpen(false);
            setNewTask({ title: '', description: '' });
            router.refresh();
        } catch (err) {
            console.error('Failed to create task', err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <Modal
                triggerLabel={'New Task'}
                title={'New Task'}
                open={open}
                onOpenChange={setOpen}
            >
                <div className={"flex flex-col gap-4"}>
                    <input type="text" name="title" placeholder={"Task Title"} className={"border p-2 rounded"}
                           value={newTask.title}
                           onChange={handleChange}
                    />
                    <textarea name="description" placeholder={"Task Description"} className={"border p-2 rounded"}
                              value={newTask.description}
                              onChange={handleChange}
                    ></textarea>
                    <Button onClick={createTask} disabled={loading}>{loading ? 'Creating...' : 'Create New Task'}</Button>
                </div>
            </Modal>
        </div>
    )
}
export default NewTask
