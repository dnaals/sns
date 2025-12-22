import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useSignInPassword } from "@/hooks/mutations/use-sign-in-password";
import { useState } from "react";
import { Link } from "react-router";

export default function SignInPage() {
    const { mutate: signInWithPassword } = useSignInPassword();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignInWithPasswordClick = () => {
        if (email.trim() === "") return;
        if (password.trim() === "") return;
        signInWithPassword({ email, password });
    }

    return (
        <div className="flex flex-col gap-8">
            <div className="text-xl font-bold">로그인</div>
            <div className="flex flex-col gap-2">
                <Input value={email} onChange={(e) => { setEmail(e.target.value) }} className="py-6" type="email" placeholder="example@abe.com" />
                <Input value={password} onChange={(e) => { setPassword(e.target.value) }} className="py-6" type="password" placeholder="password" />
            </div>
            <div>
                <Button onClick={handleSignInWithPasswordClick} className="w-full cursor-pointer">로그인</Button>
            </div>
            <div>
                <Link className="text-muted-foreground hover:underline" to={"/sign-up"}>아직 계정이 없다면? 회원가입</Link>
            </div>
        </div>
    );
}