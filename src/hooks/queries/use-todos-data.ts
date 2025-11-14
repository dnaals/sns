import { useQuery } from "@tanstack/react-query";
import {fetchTodos} from '@/api/fetch_todos';

export function useTodosData(){
    return useQuery({
        queryFn : fetchTodos,
        queryKey : ["todos"],
    })
}