import TodoEditor from '@/components/todo-list/TodoEditor';
import TodoItem from '@/components/todo-list/TodoItem';
import React from 'react';
function TodoList({ }) {
    const dummyTodos = [
        {
            id: 1,
            contents: '할 일 1'
        },
        {
            id: 2,
            contents: '할 일 2'
        },
        {
            id: 3,
            contents: '할 일 3'
        },
    ]


    return (
        <div className='flex flex-col gap-5 p-5'>
            <h1 className='text-2xl font-bold'>TodoList</h1>
            <TodoEditor />
            {dummyTodos.map((obj)=>(<TodoItem key={obj.id} {...obj} />))}
        </div>
    );
}

export default TodoList;