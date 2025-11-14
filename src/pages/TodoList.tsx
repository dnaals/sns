import TodoEditor from '@/components/todo-list/TodoEditor';
import TodoItem from '@/components/todo-list/TodoItem';
import { useTodosData } from '@/hooks/queries/use-todos-data';

function TodoList({ }) {
    const {data,isLoading,error} = useTodosData();
    if(error) return <div>오류발생</div>;
    if(isLoading) return <div>로딩중...</div>;
    
    return (
        <div className='flex flex-col gap-5 p-5'>
            <h1 className='text-2xl font-bold'>TodoList</h1>
            <TodoEditor />
            {data?.map((obj)=>(<TodoItem key={obj.id} {...obj} />))}
        </div>
    );
}

export default TodoList;