import React from 'react';
import { Button } from '../ui/button';
import { useDeleteTodo } from '@/store/todos';
import { Link } from 'react-router';

function TodoItem({id,contents}:{id:number,contents:string}) {
    const deleteTodo = useDeleteTodo();
    const handleDeleteClick = ()=>{
        deleteTodo(id);
    }
    return (
        <div className='flex items-center justify-between border p-2'>
            <Link to={`/todo/${id}`}>
                {contents}
            </Link>
            <Button onClick={handleDeleteClick} variant={'destructive'}>삭제</Button>
        </div>
    );
}

export default TodoItem;