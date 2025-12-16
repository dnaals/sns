import { Link, Outlet } from "react-router";
import logo from "@/assets/logo.png"
import defaultAvatar from "@/assets/default-avatar.jpg";
import { SunIcon } from "lucide-react";
export default function GlobalLayout() {
    return <div className="min-h-[100vh] flex flex-col">
        <header className="h-15 border-b">
            <div className="flex justify-between h-full max-w-175 w-full m-auto px-4">
                <Link to="/" className="flex items-center gap-2">
                    <img className="h-5" src={logo} alt="한입 로그의 로고, 메세지 말풍선을 형상화한 모양" />
                    <div className="font-bold">한입 로그</div>
                </Link>
                <div className="flex items-center gap-5">
                    <div className="hover:bg-muted cursor-pointer rounded-full p-2">
                        <SunIcon />
                    </div>
                    <img className="h-6 transform translate-y-[-1px]" src={defaultAvatar} />
                </div>
            </div>
        </header>
        <main className="max-w-175 flex-1 w-full m-auto px-4 py-6 border-x">
            <Outlet />
        </main>
        <footer className="border-t py-10 text-muted-foreground text-center">
            @woomin
        </footer>
    </div>
}