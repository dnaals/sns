import { fetchTodoById } from "@/api/fetch_todo_by_id";
import { useQuery } from "@tanstack/react-query";

export function useTodoDataById(id:string){
    return useQuery({
        queryFn : ()=>(fetchTodoById(id)),
        queryKey : ["todos",id],
    })
}