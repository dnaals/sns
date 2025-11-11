import React from 'react';
import { Button } from '../ui/button';
import { useDeleteTodo } from '@/store/todos';

function TodoItem({id,contents}:{id:number,contents:string}) {
    const deleteTodo = useDeleteTodo();
    const handleDeleteClick = ()=>{
        deleteTodo(id);
    }
    return (
        <div className='flex items-center justify-between border p-2'>
            {contents}<Button onClick={handleDeleteClick} variant={'destructive'}>삭제</Button>
        </div>
    );
}

export default TodoItem;