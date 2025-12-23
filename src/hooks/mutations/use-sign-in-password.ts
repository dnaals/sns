import { signInWithPassword } from "@/api/auth";
import type { useMutationCallback } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignInPassword(callbacks?: useMutationCallback) {
    return useMutation({
        mutationFn: signInWithPassword,
        onError: (error) => {
            console.error(error);
            if (callbacks?.onError) callbacks?.onError(error);
        }
    })
}