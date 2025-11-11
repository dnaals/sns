import TodoEditor from '@/components/todo-list/TodoEditor';
import TodoItem from '@/components/todo-list/TodoItem';
import { useTodos } from '@/store/todos';
import React from 'react';
function TodoList({ }) {
    const todos = useTodos();


    return (
        <div className='flex flex-col gap-5 p-5'>
            <h1 className='text-2xl font-bold'>TodoList</h1>
            <TodoEditor />
            {todos.map((obj)=>(<TodoItem key={obj.id} {...obj} />))}
        </div>
    );
}

export default TodoList;