import { taskEndpoints } from "@/app/lib/api/task";

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(),
}));

jest.mock('@/app/lib/api/task', () => ({
    taskEndpoints: {
        deleteTask: jest.fn(),
    },
}));

import { render, screen, fireEvent } from '@testing-library/react';
import TaskItem from '@/components/TaskItem';
import { useRouter } from 'next/navigation';

describe('DeleteTask', () => {
    it('should call deleteTask API and refresh the router on delete button click', async () => {

        const refreshMock = jest.fn();
        const mockRouter = {refresh: refreshMock, push: jest.fn(), back: jest.fn()};

        (useRouter as jest.Mock).mockReturnValue(mockRouter);
        (taskEndpoints.deleteTask as jest.Mock).mockResolvedValueOnce({ success: true });
        const task = {id: 1, title: 'Test Task', description: 'Test Description', isCompleted: false};
        render(<TaskItem task={task}/>);

        const deleteButton = screen.getByText('delete');
        fireEvent.click(deleteButton);

        await new Promise(process.nextTick);

        expect(refreshMock).toHaveBeenCalled();
    });
});