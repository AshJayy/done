import React from 'react'
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

const NewTask = () => {
    return (
        <div>
            <Modal
                triggerLabel={'New Task'}
                title={'New Task'}
            >
                <form className={"flex flex-col gap-4"}>
                    <input type="text" placeholder={"Task Title"} className={"border p-2 rounded"}/>
                    <textarea placeholder={"Task Description"} className={"border p-2 rounded"}></textarea>
                    <Button>Create New Task</Button>
                </form>
            </Modal>
        </div>
    )
}
export default NewTask
