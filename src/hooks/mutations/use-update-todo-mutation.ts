import { updateTodo } from "@/api/update-todo";
import { QUERY_KEYS } from "@/lib/constants";
import type { Todo } from "@/types";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useUpdateTodoMutation(){

    const queryClient = useQueryClient();

    return useMutation({
        mutationFn : updateTodo,
        onMutate : async(updatedTodo)=>{

            await queryClient.cancelQueries({
                queryKey : QUERY_KEYS.todo.list,
            })
            //onMutate실행중 queryKey에 해당하는 refetch 중단 + 비동기임async/await 필요

            const prevTodos = queryClient.getQueryData<Todo[]>(QUERY_KEYS.todo.list); 
            //업데이트 이전의 데이터를 받아놓음 , 에러났을때 복구하기위함
            
            queryClient.setQueryData<Todo[]>(QUERY_KEYS.todo.list,(prevTodos)=>{
                    if(!prevTodos) return [];
                    return prevTodos.map(prevTodo=>prevTodo.id===updatedTodo.id?{...prevTodo, ...updatedTodo} : prevTodo )
                }
            )
            //queryClient.setQueryData( 캐시이름 , 바꿀 캐시데이터()=>{ 반환값을 return으로 써줘야함 } )

            return {
                prevTodos,
                //에러가 생기는등 문제가있을때 업데이트 이전의 데이터를 반환하기위한 return문
            }
        },
        onError : (error, variable, context)=>{
            //error : 에러정보
            //variable : mutationFn의 인수를 받음
            //context : onMutate 반환값을 받음 (요청이 실패했을때 낙관적업데이트를 원상복구해줄때)
            if(context&&context.prevTodos){
                queryClient.setQueryData<Todo[]>(
                    QUERY_KEYS.todo.list,
                    context.prevTodos,
                )
            }
        },
        onSettled : ()=>{
            //모종의 이유로 백엔드data와 달라질경우 원래의 값으로 되돌려줌
            queryClient.invalidateQueries({
                queryKey : QUERY_KEYS.todo.list,
            })
        }
    })
}