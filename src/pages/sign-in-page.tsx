import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInPassword } from "@/hooks/mutations/use-sign-in-password";
import { useState } from "react";
import { Link } from "react-router";
import gitHubLogo from '@/assets/github-mark.svg';
import { useSignInWithOAuth } from "@/hooks/mutations/use-sign-in-with-oauth";
import { toast } from "sonner";

export default function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { mutate: signInWithPassword } = useSignInPassword({
        onError: (error) => {
            toast(error.message, {
                position: "top-center",
            });
            setPassword('');
        }
    });
    const { mutate: signInWithOAuth } = useSignInWithOAuth();

    const handleSignInWithPasswordClick = () => {
        if (email.trim() === "") return;
        if (password.trim() === "") return;
        signInWithPassword({ email, password });
    }

    const handleSignInWithGitHubClick = () => {
        signInWithOAuth('github');
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">로그인</div>
            <div className="flex flex-col gap-2">
                <Input value={email} onChange={(e) => { setEmail(e.target.value) }} className="py-6" type="email" placeholder="example@abe.com" />
                <Input value={password} onChange={(e) => { setPassword(e.target.value) }} className="py-6" type="password" placeholder="password" />
            </div>
            <div className="flex flex-col gap-2">
                <Button onClick={handleSignInWithPasswordClick} className="w-full cursor-pointer">로그인</Button>
                <Button onClick={handleSignInWithGitHubClick} className="w-full" variant={'outline'}> <img className="w-4 h-4" src={gitHubLogo} alt="github logo" /> GitHub 계정으로 로그인</Button>
            </div>
            <div>
                <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>아직 계정이 없다면? 회원가입</Link>
            </div>
        </div>
    );
}