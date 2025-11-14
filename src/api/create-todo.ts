import { API_URL } from "@/lib/constants";
import type { Todo } from "@/types";

export async function createTodo(contents:string){
    const response = await fetch(`${API_URL}/todos`,{
        method : 'POST',
        body : JSON.stringify({
            contents : contents,
            isDone : false,
        })
    });
    if(!response.ok) throw new Error('create todo failed');

    const data:Todo = await response.json();
    return data;
}