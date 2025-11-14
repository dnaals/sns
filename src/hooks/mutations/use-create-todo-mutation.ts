import { createTodo } from "@/api/create-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useCreateTodoMutation() {

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: createTodo,

        onMutate: () => { },
        onSettled: () => { },
        onSuccess: (newTodo) => {
            queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list,(prevTodos)=>{
                if(!prevTodos) return [newTodo];
                return [...prevTodos,newTodo];
            })
        },
        onError: (error) => {
            alert(`요청 실패 : ${error.message}`);
        },
    })
}