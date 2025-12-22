import { signInWithPassword } from "@/api/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignInPassword() {
    return useMutation({
        mutationFn: signInWithPassword,
    })
}