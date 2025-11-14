import React from 'react';
import { Button } from '../ui/button';
import { Link } from 'react-router';
import type { Todo } from '@/types';
import { useUpdateTodoMutation } from '@/hooks/mutations/use-update-todo-mutation';
import { useDeleteTodoMutation } from '@/hooks/mutations/use-delete-todo-mutation';

function TodoItem({id,contents,isDone}:Todo) {
    const {mutate:deleteTodo,isPending:deletePending} = useDeleteTodoMutation();
    const {mutate:updateTodo} = useUpdateTodoMutation();
    const handleCheckboxClick = ()=>{
        updateTodo({
            id,
            isDone : !isDone,
        })
    }

    const handleDeleteClick = ()=>{
        if(window.confirm('삭제하시겠습니까?')){
            deleteTodo(id);
        }
    }

    if(deletePending) return <div>삭제중...</div>

    return (
        <div className='flex items-center justify-between border p-2'>
            <div className='flex gap-5'>
                <input type="checkbox" checked={isDone} onChange={handleCheckboxClick} />
                <Link to={`/todo/${id}`}>{contents}</Link>
            </div>
            <Button onClick={handleDeleteClick} variant={'destructive'}>삭제</Button>
        </div>
    );
}

export default TodoItem;